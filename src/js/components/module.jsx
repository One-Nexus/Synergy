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
     * Render any passed modifiers
     * 
     * @param {Array} modifiers 
     */
    renderModifiers(modifiers) {
        return (modifiers) ? ('-' + modifiers).replace(',', '-') : '';
    }

    /**
     * Render the module
     */
    render() {
        const modifiers = this.renderModifiers(this.props.modifiers);

        return (
            <div className={`${this.props.name}${modifiers}`}>
                {this.props.children}
            </div>
        );
    }
}

Module.childContextTypes = {
    module: PropTypes.string,
    renderModifiers: PropTypes.func
};