import * as lucid from '../../../Lucid/Lucid/src';
import polymorph from '../../../Polymorph/Polymorph/src/polymorph';
import sQuery from '../../../sQuery/sQuery/src/squery';

// import * as lucid from '../../../Lucid/Lucid/dist/lucid';
// import polymorph from '../../../Polymorph/Polymorph/dist/polymorph';
// import sQuery from '../../../sQuery/sQuery/dist/squery';

import deepextend from 'deep-extend';

if (typeof window !== 'undefined') {
    // Attach common dependencies to window
    window.deepExtend = deepextend;

    sQuery.init();

    Object.assign(window, lucid);

    Synergy.styleParser = polymorph;

    Synergy.config = (...params) => deepextend({}, ...params);

    Synergy.theme = (modules, ui, theme) => {
        window.ui = Synergy.config(ui, theme);

        delete window.ui.modules;

        Synergy.CssClassProps = theme['css-class-props'];

        Object.values(modules).forEach(MODULE => MODULE.defaults && (
            window[MODULE.name] = Object.assign(MODULE, {
                config: Module.config(MODULE.defaults(ui), theme.modules[MODULE.name])
            })
        ));

        if (typeof ui.foundation === 'function') {
            ui.foundation(ui);
        }
    };
}