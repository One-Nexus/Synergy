import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

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
            module: this.props.name,
            renderModifiers: this.renderModifiers
        };
    }

    /**
     * Content to pass to children components
     */
    getBlacklistedModifiers() {
        return (global && global.Synergy) ? global.Synergy.blacklistedModifiers : [];
    }

    /**
     * Get modifiers from props
     */
    getModifiersFromProps(props, blacklist = this.getBlacklistedModifiers()) {
        const modifiers = [];

        for (var prop in props) {
            const [key, value] = [prop, props[prop]];

            if (typeof value === 'boolean' && value) {
                if (blacklist.indexOf(key) < 0) {
                    modifiers.push(key);
                }
            }
        }

        return modifiers;
    }

    /**
     * Render any passed modifiers
     * 
     * @param {Array} modifiers 
     */
    renderModifiers(modifiers) {
        if (modifiers && typeof modifiers === 'object' && modifiers.length) {
            return ('-' + modifiers).replace(/,/g, '-');
        }

        return '';
    }

    /**
     * Render the module
     */
    render() {
        const Tag = this.props.tag || 'div';
        const propModifiers = this.renderModifiers(this.getModifiersFromProps(this.props));
        const passedModifiers = this.renderModifiers(this.props.modifiers);
        const modifiers = propModifiers + passedModifiers;
        const classes = this.props.className ? ' ' + this.props.className : '';
        const classNames = this.props.name + modifiers + classes;

        return (
            <Tag className={classNames}>
                {this.props.children}
            </Tag>
        );
    }
}

Module.childContextTypes = {
    module: PropTypes.string,
    renderModifiers: PropTypes.func
};