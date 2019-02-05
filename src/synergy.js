import * as lucid from '../../../Lucid/Lucid/src';
import polymorph from '../../../Polymorph/Polymorph/src/polymorph';
import sQuery from '../../../sQuery/sQuery/src/squery';

// import * as lucid from '../../../Lucid/Lucid/dist/lucid';
// import polymorph from '../../../Polymorph/Polymorph/dist/polymorph';
// import sQuery from '../../../sQuery/sQuery/dist/squery';

// @TODO sQuery.init needs to be called upon importing this file...

import deepextend from 'deep-extend';

if (typeof window !== 'undefined') {
    // Attach Synergy tools to global object
    Object.assign(window, {
        Synergy: window.Synergy || {},
        ...lucid
    });

    // Declare global Synergy properties
    Object.assign(Synergy, {
        styleParser: polymorph,
        config: (...params) => deepextend({}, ...params),
        theme: theme
    });
}

/**
 * Synergy Theme
 * 
 * @param {*} modules
 * @param {*} globals
 * @param {*} theme
 */
function theme(modules, theme, globals) {
    window.ui = Synergy.config(globals, theme);

    delete window.ui.modules;

    sQuery.init({
        modifierGlue: theme['modifier-glue'],
        componentGlue: theme['component-glue']
    });

    Synergy.CssClassProps = theme['css-class-props'];

    Object.values(modules).forEach(MODULE => MODULE.defaults && (
        window[MODULE.name] = Object.assign(MODULE, {
            config: Module.config(MODULE.defaults(ui), theme.modules[MODULE.name])
        })
    ));

    if (typeof ui.foundation === 'function') {
        ui.foundation(ui);
    }  
}