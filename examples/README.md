# DM Toolkit Examples

This directory contains example macros and implementations using the DM Toolkit module.

## Macros

### Smart Attack (`macros/smart-attack.js`)

A macro that demonstrates using the DM Toolkit's combat and dialog utilities to create an enhanced attack workflow.

#### Features:
- Custom dialog for entering damage roll
- Damage type selection
- Automatic damage calculation and application
- Chat message confirmation

#### How to Use:
1. Open Foundry VTT
2. Create a new macro
3. Set the Type to "Script"
4. Copy the contents of `smart-attack.js` into your macro
5. Save the macro

#### Usage Instructions:
1. Select a target token
2. Run the macro
3. Enter your damage roll
4. Select the damage type
5. Click "Apply Damage"

The macro will:
- Calculate the final damage using any applicable modifiers
- Apply the damage to the target
- Display a confirmation message in chat

#### Requirements:
- DM Toolkit module must be installed and enabled
- User must have permissions to:
  - Target tokens
  - Modify token HP
  - Create chat messages 