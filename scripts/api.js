import { MODULE_ID } from './dm-toolkit.js';

/**
 * Combat Utilities
 */
export class CombatUtils {
    /**
     * Calculate damage with modifiers
     * @param {number} roll - The damage roll
     * @param {string} damageType - Type of damage
     * @param {Actor} target - The target actor
     * @returns {number} - Final damage amount
     */
    static calculateDamage(roll, damageType, target) {
        // Add your damage calculation logic here
        return roll;
    }

    /**
     * Apply damage to a target
     * @param {Actor} target - The target actor
     * @param {number} amount - Amount of damage
     * @param {string} damageType - Type of damage
     */
    static async applyDamage(target, amount, damageType) {
        if (!target || !amount) return;
        
        // Example implementation
        const hp = target.system.attributes.hp;
        const newHP = Math.max(hp.value - amount, 0);
        
        await target.update({
            "system.attributes.hp.value": newHP
        });
    }
}

/**
 * Dialog Utilities
 */
export class DialogUtils {
    /**
     * Show a custom prompt dialog
     * @param {string} title - Dialog title
     * @param {string} content - Dialog content
     * @param {Object} buttons - Dialog buttons configuration
     * @returns {Promise} - Dialog result
     */
    static async showPrompt(title, content, buttons = null) {
        if (!buttons) {
            buttons = {
                ok: {
                    icon: '<i class="fas fa-check"></i>',
                    label: "OK",
                    callback: () => true
                },
                cancel: {
                    icon: '<i class="fas fa-times"></i>',
                    label: "Cancel",
                    callback: () => false
                }
            };
        }

        return new Promise((resolve) => {
            new Dialog({
                title,
                content,
                buttons,
                default: "ok",
                close: () => resolve(false)
            }).render(true);
        });
    }
}

/**
 * Register the API for external use
 */
export function registerAPI() {
    game.modules.get(MODULE_ID).api = {
        CombatUtils,
        DialogUtils
    };
} 