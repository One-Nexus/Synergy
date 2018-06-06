import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import PropTypes from 'prop-types';
import HTMLTags from 'html-tags';

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

        this.tag = this.props.tag || (HTMLTags.includes(this.props.name) ? this.props.name : 'div');
        this.propModifiers = renderModifiers(getModifiersFromProps(this.props, Synergy.CssClassProps));
        this.passedModifiers = renderModifiers(this.props.modifiers);
        this.modifiers = this.propModifiers + this.passedModifiers;
        this.classes = this.props.className ? ' ' + this.props.className : '';
        this.classNames = this.props.name + this.modifiers + this.classes;
        this.id = this.props.id;

        increment++;

        if ((this.props.before || this.props.after) && !this.id) {
            this.id = `synergy-module-${increment}`;
        }

        if (Synergy.modules) {
            // determine if any passed prop is a module - if so, add it to `classes`
            Object.entries(this.props).forEach(prop => {
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

            if (Synergy.CssClassProps) Synergy.CssClassProps.forEach(prop => {
                if (Object.keys(this.props).includes(prop)) {
                    this.classNames = this.classNames + ' ' + prop
                }
            });
        }
    }

    /**
     * Content to pass to children components
     */
    getChildContext() {
        let config;

        try {
            config = global.Synergy.modules[this.props.name].config;
        } catch(error) {
            config = null;
        }

        return { 
            module: this.props.name,
            config
        };
    }

    componentDidMount() {
        const _module = Synergy.modules[this.props.name];

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
        return [
            this.props.before && this.props.before(() => document.getElementById(this.id)),

            <this.tag
                id={this.id}
                className={this.classNames}
                data-module={this.props.name}
                href={this.props.href}
                
                {...this.getDataAttributes(this.props)}
                {...this.getEventHandlers(this.props)}
            >
                {this.props.children}
            </this.tag>,

            this.props.after && this.props.after(() => document.getElementById(this.id))
        ];
    }
}

Module.childContextTypes = {
    module: PropTypes.string,
    config: PropTypes.object
};