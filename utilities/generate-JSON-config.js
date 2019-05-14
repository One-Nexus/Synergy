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

// Core Settings
const PROJECT_ROOT = process.cwd() + '/';
const CONF_ARG = process.argv.slice(2)[0];
const CONFG_OBJ = CONF_ARG && require(PROJECT_ROOT + CONF_ARG);
const CONFIG = CONFG_OBJ ? (CONFG_OBJ.app || CONFG_OBJ) : {};

// Config
const MODULES_PATH    = CONFIG.MODULES_PATH    || '/src/modules'; // relative to PROJECT_ROOT
const FOUNDATION_FILE = CONFIG.FOUNDATION_FILE || null;           // relative to PROJECT_ROOT
const DEFAULTS_FILE   = CONFIG.DEFAULTS_FILE   || '/config.js';   // relative to MODULE_PATH
const OUTPUT_FILE     = CONFIG.OUTPUT_FILE     || '/config.json'; // relative to MODULE_PATH
const INDENTATION     = CONFIG.INDENTATION     || 4;

// Theme
const THEME_NAME  = CONFIG.THEME_NAME;
const THEMES_PATH = CONFIG.THEMES_PATH || '/src/themes/';
const THEME       = THEME_NAME && require(PROJECT_ROOT + THEMES_PATH + `${THEME_NAME}.json`).theme;

// UI Assets
const FOUNDATION = FOUNDATION_FILE && Object.assign({}, require(PROJECT_ROOT + FOUNDATION_FILE));
const APP_CONFIG = CONFIG.ui;
const MODULES    = require(PROJECT_ROOT + MODULES_PATH);

// Theme
const _THEME_ = deepExtend(FOUNDATION, THEME, APP_CONFIG);

console.log(_THEME_);

// Tool
execFile('find', [PROJECT_ROOT + MODULES_PATH], (err, stdout, stderr) => {
    var file_list = stdout.split('\n');

    Object.keys(MODULES).forEach(key => {
        const MODULE_PATH = file_list.filter(file => file.indexOf(key) !== -1)[0];

        if (!MODULE_PATH) return console.log(`No path found for module: ${key}`);

        const MODULE_DEFAULTS = require(MODULE_PATH + DEFAULTS_FILE).default;
        const MODULE_CONFIG = MODULE_DEFAULTS(_THEME_);
        const OUTPUT_PATH = MODULE_PATH + OUTPUT_FILE;

        fs.writeFile(OUTPUT_PATH, JSON.stringify(MODULE_CONFIG, null, INDENTATION), 'utf8', (error, result) => {
            if (error) console.log(error);
        });

        console.log(`Successfully generated config.json for ${key} module`);
    });
});