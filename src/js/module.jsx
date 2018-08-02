import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import HTMLTags from 'html-tags';
import deepExtend from 'deep-extend';

import getHtmlProps from './utilities/getHtmlProps';
import getModifiersFromProps from './utilities/getModifiersFromProps';
import getModuleFromProps from './utilities/getModulesFromProps';
import renderModifiers from './utilities/renderModifiers';
import setStyles from './utilities/setStyles';
import refHandler from './utilities/refHandler';

/**
 * Used for generating unique module ID's
 */
let increment = 1;

/**
 * Render a Synergy module
 *
 * @extends React.Component
 */
export default class Module extends React.Component {

    constructor(props, context) {
        super(props, context);

        increment++;

        this.tag = props.component || props.tag || (HTMLTags.includes(props.name) ? props.name : 'div');
        this.propModifiers = renderModifiers(getModifiersFromProps(props, Synergy.CssClassProps));
        this.passedModifiers = renderModifiers(props.modifiers);
        this.modifiers = this.propModifiers + this.passedModifiers;
        this.classes = props.className ? ' ' + props.className : '';
        this.classNames = getModuleFromProps(props, props.name + this.modifiers + this.classes);
        this.id = (props.before || props.after) && !props.id ? `synergy-module-${increment}` : props.id;
        this.ref = node => refHandler(node, props);

        if (Synergy.CssClassProps) Synergy.CssClassProps.forEach(prop => {
            if (Object.keys(props).includes(prop)) {
                this.classNames = this.classNames + ' ' + prop
            }
        });
    }

    getChildContext() {
        let config;

        try {
            config = global.Synergy.modules[this.props.name].config;
        } catch(error) {
            config = null;
        }

        return { 
            module: this.props.name,
            modifiers: this.props.modifiers,
            config,
            props: this.props
        };
    }

    componentDidMount() {
        const _module = Synergy.modules ? Synergy.modules[this.props.name] : null;

        if (_module && _module.methods) {
            if (_module.methods.init) {
                _module.methods.init(ReactDOM.findDOMNode(this), this.config);
            }
        }
    }

    getEventHandlers(properties) {
        let eventHandlers = {};

        for (let prop in properties) {
            if (Object.keys(window).includes(prop.toLowerCase())) {
                if (prop !== 'name') {
                    eventHandlers[prop] = properties[prop];
                }
            }
        }

        return eventHandlers;
    }

    getDataAttributes(properties) {
        let dataAttributes = {};

        for (let prop in properties) {
            if (prop.indexOf('data-') === 0) {
                dataAttributes[prop] = properties[prop];
            }
        }

        return dataAttributes;
    }

    render() {
        return (
            <React.Fragment>
                { this.props.before && this.props.before(() => document.getElementById(this.id)) }

                <this.tag
                    id={this.id}
                    className={this.classNames}
                    data-module={this.props.name}
                    ref={this.ref}

                    {...getHtmlProps(this.props)}
                    {...this.getDataAttributes(this.props)}
                    {...this.getEventHandlers(this.props)}
                    {...this.props.componentProps}
                >
                    {this.props.children}
                </this.tag>

                { this.props.after && this.props.after(() => document.getElementById(this.id)) }
            </React.Fragment>
        );
    }
}

Module.setStyles = (...params) => setStyles(...params);

Module.config = deepExtend;

Module.childContextTypes = {
    module: PropTypes.string,
    modifiers: PropTypes.array,
    config: PropTypes.object,
    props: PropTypes.object
};