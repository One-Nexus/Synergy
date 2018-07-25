import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import HTMLTags from 'html-tags';

import getHtmlProps from './utilities/getHtmlProps';
import getModifiersFromProps from './utilities/getModifiersFromProps';
import renderModifiers from './utilities/renderModifiers';

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

        this.tag = props.tag || (HTMLTags.includes(props.name) ? props.name : 'div');
        this.propModifiers = renderModifiers(getModifiersFromProps(props, Synergy.CssClassProps));
        this.passedModifiers = renderModifiers(props.modifiers);
        this.modifiers = this.propModifiers + this.passedModifiers;
        this.classes = props.className ? ' ' + props.className : '';
        this.classNames = props.name + this.modifiers + this.classes;
        this.id = props.id;

        this.ref = node => {
            if (props.init) props.init(node);

            if (props.styles) {
                props.styles(node);

                // Options for the observer (which mutations to observe)
                const config = { attributes: true, childList: true, subtree: true };

                // Callback function to execute when mutations are observed
                const callback = function(mutationsList, observer) {
                    for (var mutation of mutationsList) {

                        console.log(mutation);

                        if (mutation.type == 'childList') {
                        }
                        else if (mutation.type == 'attributes') {
                            props.styles(node);
                            observer.disconnect();
                        }
                    }
                };

                // Create an observer instance linked to the callback function
                const observer = new MutationObserver(callback);

                // Start observing the target node for configured mutations
                observer.observe(node, config);
            }
        }

        increment++;

        if (props.component) this.tag = props.component;

        if ((props.before || props.after) && !this.id) {
            this.id = `synergy-module-${increment}`;
        }

        if (Synergy.modules) {
            // determine if any passed prop is a module - if so, add it to `classes`
            Object.entries(props).forEach(prop => {
                if (prop[0][0] === prop[0][0].toUpperCase()) {
                    if (Object.keys(Synergy.modules).includes(prop[0].toLowerCase())) {
                        const module = prop[0].toLowerCase();

                        let modifiers = '';

                        if (prop[1].constructor === Array) {
                            modifiers = '-' + prop[1].join('-');
                        } else if (typeof prop[1] === 'string') {
                            modifiers = '-' + prop[1];
                        }

                        this.classes = this.classes + ' ' + module + modifiers;
                    }
                }
            });
        }

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

Module.setStyles = (element, styles, globals, theme, scope) => {
    const moduleName = element.getAttribute('data-module');

    for (let [key, value] of Object.entries(typeof styles === 'object' ? styles : styles(element, globals))) {

        let namespace = `${scope || moduleName}_${key}`;

        if (key.indexOf('modifier(') > -1) {
            let modifier = key.replace('modifier(', '');

            modifier = modifier.replace(/\)/g, '');

            if (element.modifier(modifier)) {
                Module.setStyles(element, value, globals, theme);
            }

            continue;
        }

        if (typeof value === 'object') {
            let components = element.querySelectorAll(`.${namespace}`);

            if (!components.length) {
                components = element.component(key);
            }

            if (components.length) {
                [...components].forEach(component => {
                    Module.setStyles(component, value, globals, theme, namespace);
                });
            } else {
                // console.log(components, element, namespace);
            }
        } else {
            element.style[key] = value;
        }
    }

    if (theme) Module.setStyles(element, theme, globals);
}

Module.childContextTypes = {
    module: PropTypes.string,
    modifiers: PropTypes.array,
    config: PropTypes.object,
    props: PropTypes.object
};