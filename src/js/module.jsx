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
        const propModifiers = renderModifiers(getModifiersFromProps(this.props));
        const passedModifiers = renderModifiers(this.props.modifiers);
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
    module: PropTypes.string
};