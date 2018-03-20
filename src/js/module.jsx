import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import getModifiersFromProps from './utilities/getModifiersFromProps';
import renderModifiers from './utilities/renderModifiers';

/**
 * Render a Synergy module
 *
 * @extends React.Component
 */
export default class Module extends React.Component {
    /**
     * Content to pass to children components
     */
    getChildContext() {
        return { 
            module: this.props.name
        };
    }

    /**
     * Render the module
     */
    render() {
        const Tag = this.props.tag || 'div';
        const propModifiers = renderModifiers(getModifiersFromProps(this.props, Synergy.CssClassProps));
        const passedModifiers = renderModifiers(this.props.modifiers);
        const modifiers = propModifiers + passedModifiers;

        let classes = this.props.className ? ' ' + this.props.className : '';

        // determine if any passed prop is a module - if so, add it to `classes`
        if (Synergy.modules) {
            Object.entries(this.props).forEach(prop => {
                if (prop[0][0] === prop[0][0].toUpperCase()) {
                    if (Object.keys(Synergy.modules).includes(prop[0].toLowerCase())) {
                        const module = prop[0].toLowerCase();
                        const modifiers = prop[1].constructor === Array ? '-' + prop[1].join('-') : '';

                        classes = classes + ' ' + module + modifiers;
                    }
                }
            });
        }

        let classNames = this.props.name + modifiers + classes;

        if (Synergy.CssClassProps) {
            Synergy.CssClassProps.forEach(prop => classNames = classNames + ' ' + prop);
        }

        return (
            <Tag id={this.props.id} className={classNames} data-module={this.props.name}>
                {this.props.children}
            </Tag>
        );
    }
}

Module.childContextTypes = {
    module: PropTypes.string
};