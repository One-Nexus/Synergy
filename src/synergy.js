// import * as lucid from '../../../Lucid/Lucid/src';
// import sQuery from '../../../sQuery/sQuery/src/squery';
// import polymorph from '../../../Polymorph/Polymorph/src/polymorph';

// import * as lucid from '../../../Lucid/Lucid/dist/lucid';
// import polymorph from '../../../Polymorph/Polymorph/dist/polymorph';
// import sQuery from '../../../sQuery/sQuery/dist/squery';

import * as lucid from '@onenexus/lucid/src';
import sQuery from '@onenexus/squery/src/squery';
import polymorph from '@onenexus/polymorph/src/polymorph';

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
        // config: (...params) => deepextend({}, ...params),
        config: deepextend,
        theme: theme
    });
}

/**
 * Synergy Theme
 */
function theme(modules, theme, globals, trump) {
    if (typeof theme === 'function') {
        theme = theme(globals);
    }

    Synergy.config(globals, Synergy.config(theme, trump));

    sQuery.init({
        modifierGlue: theme['modifier-glue'],
        componentGlue: theme['component-glue']
    });

    Synergy.CssClassProps = theme['css-class-props'];

    Object.values(modules).forEach(MODULE => {
        if (MODULE.defaults) {
            const evaluatedConfig = evalConfig(theme.modules[MODULE.name]);

            window[MODULE.name] = Object.assign(MODULE, {
                config: Synergy.config(MODULE.defaults(globals), evaluatedConfig)
            });
        }
    });

    if (typeof globals.foundation === 'function') {
        globals.foundation(globals);
    }

    delete globals.modules, window.ui = globals;
}

/**
 * Evaluate module config properties
 */
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