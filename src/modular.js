/*-----------------------------------------------------------------

Modular - JS Extension
Made by @esr360
http://github.com/esr360/Modular/
	
-----------------------------------------------------------------*/

//-----------------------------------------------------------------
// Convert CSS config to JS
//-----------------------------------------------------------------

// Get styles' configuration
var stylesConfigJSON = document.getElementById("stylesConfigJSON");

// Remove quotes from computed JSON
function removeQuotes(json) {
    json = json.replace(/^['"]+|\s+|\\|(;\s?})+|['"]$/g, '');
    return json;
}

// Convert computed JSON to camelCase
function camelCase(json) {
    json = json.replace(/-([a-z])/g, function (g) { 
        return g[1].toUpperCase(); 
    });
    return json;
}

// Convert the config to JS
function getStylesConfig(camelCase) {
    var style = null;
    style = window.getComputedStyle(stylesConfigJSON, '::before');
    style = style.content;
    style = removeQuotes(style);
    if(camelCase) {
        style = camelCase(style);
    }
    return JSON.parse(style);
}

// Store configuartion data in a variable
var module = getStylesConfig();

// CamelCase the config
var moduleCC = getStylesConfig(camelCase);

// Create a global variable to select each main component in the DOM
var componentIndex = 0;
$.each(module, function(component) {
    var componentCC = moduleCC[Object.keys(moduleCC)[componentIndex]]['name'];
    window[componentCC] = '.' + component + ', [class*="' + component + '-"]';
    componentIndex++;
});

//-----------------------------------------------------------------
// Functions
//-----------------------------------------------------------------

//  1. setting()

//-----------------------------------------------------------------

// 1. Setting
//-----------------------------------------------------------------

//  Usage
//
//  if(setting(navigation, 'sticky')) {
//      ...
//  }

function setting(component, setting) {

    var $setting  = module[component][setting],
        $id = $('.' + component + ', [class*="' + component + '-"]'),
        $selector = $id.is('[class*="-' + setting + '"]') == true;
    
    if (typeof($setting[Object.keys($setting)[0]]) == 'boolean') {
        return $selector || $setting['default'] != false;
    } else {
        return $selector || $setting != false;
    }

}