import * as lucid from '../../Lucid/src';
import polymorph from '../../Polymorph/src/polymorph';
import sQuery from '../../sQuery/src/squery';

if (typeof window !== 'undefined') {
    sQuery.init();

    Object.assign(window, lucid);

    window.Synergy.styleParser = polymorph;

    window.Synergy.theme = () => {
        console.log('foo theme');
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