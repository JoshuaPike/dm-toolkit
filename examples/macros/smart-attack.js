// Example Smart Attack Macro using dm-toolkit

// First, ensure we have access to the module's API
const dmToolkit = game.modules.get('dm-toolkit')?.api;
if (!dmToolkit) {
    ui.notifications.error("DM Toolkit module is not enabled!");
    return;
}

// Get selected token
const target = game.user.targets.first()?.actor;
if (!target) {
    ui.notifications.warn("Please select a target!");
    return;
}

// Create dialog content
const content = `
<form>
    <div class="form-group">
        <label>Damage Roll:</label>
        <input type="number" name="roll" placeholder="Enter your damage roll"/>
    </div>
    <div class="form-group">
        <label>Damage Type:</label>
        <select name="damageType">
            <option value="slashing">Slashing</option>
            <option value="piercing">Piercing</option>
            <option value="bludgeoning">Bludgeoning</option>
            <option value="fire">Fire</option>
            <option value="cold">Cold</option>
            <option value="lightning">Lightning</option>
        </select>
    </div>
</form>
`;

// Configure dialog buttons
const buttons = {
    attack: {
        icon: '<i class="fas fa-fist-raised"></i>',
        label: "Apply Damage",
        callback: async (html) => {
            const roll = Number(html.find('[name="roll"]').val());
            const damageType = html.find('[name="damageType"]').val();
            
            if (!roll) {
                ui.notifications.error("Please enter a valid damage roll!");
                return;
            }
            
            // Calculate final damage using our module's utility
            const finalDamage = dmToolkit.CombatUtils.calculateDamage(roll, damageType, target);
            
            // Apply the damage
            await dmToolkit.CombatUtils.applyDamage(target, finalDamage, damageType);
            
            // Show confirmation
            ChatMessage.create({
                content: `Applied ${finalDamage} ${damageType} damage to ${target.name}`,
                speaker: ChatMessage.getSpeaker()
            });
        }
    },
    cancel: {
        icon: '<i class="fas fa-times"></i>',
        label: "Cancel"
    }
};

// Show the dialog using our module's utility
dmToolkit.DialogUtils.showPrompt("Smart Attack", content, buttons); 