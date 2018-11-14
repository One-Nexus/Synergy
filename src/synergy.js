import * as lucid from '../../Lucid/src';
import polymorph from '../../Polymorph/src/polymorph';
import sQuery from '../../sQuery/src/squery';
import deepextend from 'deep-extend';

if (typeof window !== 'undefined') {
    sQuery.init();

    Object.assign(window, lucid);

    Synergy.styleParser = polymorph;

    Synergy.config = (...params) => deepextend({}, ...params);

    Synergy.theme = (modules, ui, theme) => {
        window.ui = Synergy.config(ui, theme);

        delete window.ui.modules;

        Object.values(modules).forEach(MODULE => MODULE.defaults && (
            window[MODULE.name] = Object.assign(MODULE, {
                config: Module.config(MODULE.defaults(ui), theme.modules[MODULE.name])
            })
        ));
    };
}

export {
    Synergize,
    Module, 
    Wrapper, 
    Group,
    Component, 
    SubComponent,
    sQuery,
    polymorph
}