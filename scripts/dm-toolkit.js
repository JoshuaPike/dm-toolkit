// Import our API functions
import { registerAPI } from './api.js';

// Constants
export const MODULE_ID = 'dm-toolkit';

/**
 * Initialize module
 */
Hooks.once('init', async function() {
    console.log(`${MODULE_ID} | Initializing dm-toolkit`);
    
    // Register module settings
    registerSettings();
});

/**
 * Setup module
 */
Hooks.once('setup', function() {
    // Register API functions
    registerAPI();
});

/**
 * When ready
 */
Hooks.once('ready', function() {
    console.log(`${MODULE_ID} | Ready`);
});

/**
 * Register module settings
 */
function registerSettings() {
    // Add your settings registration here
    game.settings.register(MODULE_ID, 'enableCombatFeatures', {
        name: 'Enable Combat Features',
        hint: 'Enable enhanced combat management features',
        scope: 'world',
        config: true,
        type: Boolean,
        default: true
    });
} 