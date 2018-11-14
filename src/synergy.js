import * as lucid from '../../Lucid/src';
import polymorph from '../../Polymorph/src/polymorph';
import sQuery from '../../sQuery/src/squery';

if (typeof window !== 'undefined') {
    sQuery.init();

    Object.assign(window, lucid);

    window.Synergy.styleParser = polymorph;

    window.Synergy.theme = (modules, theme) => {
        Object.values(modules).forEach(MODULE => MODULE.defaults && (
            window[MODULE.name] = Object.assign(MODULE, {
                config: Module.config(MODULE.defaults(window.theme), theme[MODULE.name])
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