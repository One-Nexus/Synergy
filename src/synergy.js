import * as lucid from '../../Lucid/src';
import polymorph from '../../Polymorph/src/polymorph';
import sQuery from '../../sQuery/src/squery';
import deepextend from 'deep-extend';
import { HashRouter, Route } from 'react-router-dom';

if (typeof window !== 'undefined') {
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
    };

    Synergy.app = ({ modules, ui, theme, pages, config }) => {
        Synergy.theme(modules, ui, theme);

        return (
            <HashRouter>
                <React.Fragment>
                    <Route path='/' exact render={() => <pages.index config={config} />} />
    
                    {Object.keys(pages).map((page, index) => <Route key={index} path={`/${page}`} render={() => {
                        const Page = pages[page];
    
                        return <Page config={config} />;
                    }} />)}
                </React.Fragment>
            </HashRouter>
        );
    }
}