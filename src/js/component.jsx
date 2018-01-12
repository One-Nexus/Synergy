import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

/**
 * Render a Synergy component
 *
 * @extends React.Component
 */
export default class Component extends React.Component {
    render() {
        const module = this.props.module || this.context.module;
        const modifiers = this.context.renderModifiers(this.props.modifiers);

        if (this.props.children && this.props.children.type) {
            if (this.constructor.name === this.props.children.type.name) {
                const parentKeys = Object.keys(this.props).sort();
                const childKeys = Object.keys(this.props.children.props).sort();

                if (JSON.stringify(parentKeys) === JSON.stringify(childKeys)) {
                    return this.props.children;
                }
            }
        } else {
            return (
                <div className={`${module}_${this.props.name}${modifiers}`}>
                    {this.props.children}
                </div>
            );
        }
    }
}

Component.contextTypes = {
    module: PropTypes.string,
    renderModifiers: PropTypes.func
};