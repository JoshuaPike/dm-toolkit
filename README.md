# DM Toolkit

A Foundry VTT module that provides a collection of utilities and tools to enhance DM/GM gameplay management.

## Features

- Combat utilities for managing damage calculations and application
- Dialog utilities for creating custom prompts and interfaces
- Utility CSS classes for consistent styling
- Extensible API for use in macros and other modules

## Project Structure

The module is organized with the following structure:

```
dm-toolkit/
├── scripts/
│   ├── dm-toolkit.js     # Main module file with initialization hooks
│   └── api.js            # API file containing utility functions
├── styles/
│   └── dm-toolkit.css    # CSS styles and utility classes
├── lang/
│   └── en.json          # English translations
├── module.json          # Module manifest and configuration
├── LICENSE             # MIT License
└── README.md           # This documentation
```

### Key Files Explained

#### `module.json`
The main configuration file that Foundry VTT uses to load the module. It defines:
- Module metadata (name, version, description)
- Required files (scripts, styles, languages)
- Foundry VTT compatibility
- Dependencies and settings

#### `scripts/dm-toolkit.js`
The main module file that:
- Initializes the module
- Registers settings
- Sets up hooks for Foundry VTT integration
- Manages module lifecycle

#### `scripts/api.js`
Contains the utility functions exposed by the module:
- `CombatUtils`: Functions for damage calculation and application
- `DialogUtils`: Functions for creating custom dialogs and prompts

Example utility functions:
```javascript
// Combat utilities for calculating and applying damage
CombatUtils.calculateDamage(roll, damageType, target)
CombatUtils.applyDamage(target, amount, damageType)

// Dialog utilities for custom prompts
DialogUtils.showPrompt(title, content, buttons)
```

#### `styles/dm-toolkit.css`
Provides:
- Custom styling for module dialogs
- Utility classes for common styling needs
- Consistent visual theming

Example classes:
```css
.dm-toolkit-dialog .dialog-button
.dm-toolkit-hidden
.dm-toolkit-flex
.dm-toolkit-flex-center
```

#### `lang/en.json`
Contains all text strings used by the module, enabling:
- Consistent terminology
- Future localization support
- Easy text maintenance

Example translations:
```json
{
    "dm-toolkit.settings.enableCombatFeatures.name": "Enable Combat Features",
    "dm-toolkit.dialogs.confirm": "Confirm",
    "dm-toolkit.combat.applyDamage": "Apply Damage"
}
```

## Installation

1. Download the latest release from the releases page
2. Extract the zip file
3. Copy the extracted folder to your Foundry VTT `modules` folder
4. Restart Foundry VTT
5. Enable the module in your World's module settings

## Usage

### In Macros

```javascript
// Access the module's API
const dmToolkit = game.modules.get('dm-toolkit').api;

// Use combat utilities
await dmToolkit.CombatUtils.applyDamage(target, 10, "fire");

// Use dialog utilities
const result = await dmToolkit.DialogUtils.showPrompt(
    "Confirm Action",
    "Are you sure you want to proceed?"
);
```

### CSS Classes

The module provides several utility CSS classes:

- `dm-toolkit-hidden`: Hide an element
- `dm-toolkit-flex`: Make an element a flex container
- `dm-toolkit-flex-center`: Center content both horizontally and vertically

## Development

### Setting Up Development Environment

1. The module uses a symbolic link between the development directory and Foundry's module directory:
   ```powershell
   New-Item -ItemType SymbolicLink -Path "D:\dnd\FoundryVTT\FoundryVTT\Data\modules\dm-toolkit" -Target "D:\dnd\Cursor-Foundry\Modules\dm-toolkit"
   ```
   Note: This command must be run as Administrator in PowerShell.

2. After creating the symbolic link, restart Foundry VTT to detect the module.

### Adding New Features

1. Utility Functions:
   - Add new utility classes to `scripts/api.js`
   - Register them in the API export
   - Document the new functions in this README

2. Styles:
   - Add new CSS classes to `styles/dm-toolkit.css`
   - Follow the existing naming convention: `dm-toolkit-*`

3. Translations:
   - Add new strings to `lang/en.json`
   - Use the format: `"dm-toolkit.category.key": "value"`

### Generated Files

This repository was initialized with the following files:

1. `module.json`: Basic module configuration with metadata, dependencies, and file references
2. `scripts/dm-toolkit.js`: Main module initialization with hooks and settings registration
3. `scripts/api.js`: API utilities for combat and dialog management
4. `styles/dm-toolkit.css`: CSS styles and utility classes
5. `lang/en.json`: English translations for all module text
6. `LICENSE`: MIT License for the project
7. `README.md`: This documentation file

Each file has been structured to follow Foundry VTT best practices and provide a solid foundation for building your module.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT License - See LICENSE file for details 