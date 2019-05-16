/**
 * One-Nexus tool for generating JSON configuration for modules
 */

 // Setup
require('@babel/register')();
require('jsdom-global')();

// Dependencies
const fs = require('fs');
const execFile = require('child_process').execFile;
const deepExtend = require('deep-extend');

// Core Constants
const PROJECT_ROOT = process.cwd() + '/';
const CONF_ARG = process.argv.slice(2)[0];
const CONFG_OBJ = CONF_ARG && require(PROJECT_ROOT + CONF_ARG);
const CONFIG = CONFG_OBJ ? (CONFG_OBJ.app || CONFG_OBJ) : {};

// Core Config
const MODULES_PATH  = CONFIG.MODULES_PATH  || '/src/modules'; // relative to PROJECT_ROOT
const DEFAULTS_FILE = CONFIG.DEFAULTS_FILE || '/config.js';   // relative to MODULE_PATH
const OUTPUT_FILE   = CONFIG.OUTPUT_FILE   || '/config.json'; // relative to MODULE_PATH

// Misc Config
const FOUNDATION_FILE = CONFIG.FOUNDATION_FILE; // relative to PROJECT_ROOT
const INDENTATION = CONFIG.INDENTATION || 4;

// UI Assets
const MODULES = require(PROJECT_ROOT + MODULES_PATH);
let FOUNDATION = FOUNDATION_FILE && Object.assign({}, require(PROJECT_ROOT + FOUNDATION_FILE)) || {};
FOUNDATION = FOUNDATION.default ? FOUNDATION.default : FOUNDATION;

// Theme
const THEME_NAME = CONFIG.THEME_NAME;
const THEMES_PATH = CONFIG.THEMES_PATH || '/src/themes/'; // relative to PROJECT_ROOT
let THEME_FILE;
try {
    THEME_FILE = require(PROJECT_ROOT + THEMES_PATH + `/${THEME_NAME}.js`).default;
} catch(e) {
    THEME_FILE = require(PROJECT_ROOT + THEMES_PATH + `/${THEME_NAME}.json`);
}
let THEME = THEME_FILE;
if (typeof THEME === 'function') {
    THEME = THEME(FOUNDATION);
}
if (THEME.theme) {
    THEME = THEME.theme;
}

// Theme
const _THEME_ = deepExtend(FOUNDATION, THEME, CONFIG.ui);

// Tool
execFile('find', [PROJECT_ROOT + MODULES_PATH], (err, stdout, stderr) => {
    var file_list = stdout.split('\n');

    Object.keys(MODULES).forEach(key => {
        const MODULE_PATH = file_list.filter(file => file.indexOf(key) !== -1)[0];

        if (!MODULE_PATH) return console.log(`No path found for module: ${key}`);

        const MODULE_DEFAULTS = require(MODULE_PATH + DEFAULTS_FILE).default;
        const THEME_MODULE_CONFIG = _THEME_.modules && evalConfig(_THEME_.modules[key]);
        const MODULE_CONFIG = deepExtend(MODULE_DEFAULTS(_THEME_), THEME_MODULE_CONFIG);

        const OUTPUT_PATH = MODULE_PATH + OUTPUT_FILE;

        fs.writeFile(OUTPUT_PATH, JSON.stringify(MODULE_CONFIG, null, INDENTATION), 'utf8', (error, result) => {
            if (error) console.log(error);
        });

        console.log(`Successfully created ${key} module JSON configuration at ${OUTPUT_PATH}`);
    });
});

// Evaluate module config properties
function evalConfig(config) {
    if (!config) return;

    Object.entries(config).forEach(([key, value]) => {
        if (typeof value === 'object') {
            return evalConfig(value);
        } else {
            if (typeof value !== 'function') return;

            return config[key] = value();
        }
    });

    return config;
}