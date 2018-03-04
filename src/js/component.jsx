import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import getModifiersFromProps from './utilities/getModifiersFromProps';
import renderModifiers from './utilities/renderModifiers';

/**
 * Render a Synergy component
 *
 * @extends React.Component
 */
export default class Component extends React.Component {
    render() {
        const module = this.props.module || this.context.module;
        const modifiers = renderModifiers(this.props.modifiers);
        const classes = this.props.className ? ' ' + this.props.className : '';
        const selector = `${module}_${this.props.name + modifiers}${classes}`;

        let onClick = this.props.onClick;

        // dynamically fetch onClick event from window.UI object
        if (onClick) {
            if (/^function[^{]+\{\s*\}/m.test(onClick.toString())) {
                if ('UI' in global && module in global.UI) {
                    onClick = global.UI[module]()[this.props.onClick.name];
                }
            }
        }

        if (
            this.props.children && 
            this.props.children.type && 
            this.constructor.name === this.props.children.type.name
        ) {
            const parentKeys = Object.keys(this.props).sort();
            const childKeys = Object.keys(this.props.children.props).sort();

            if (JSON.stringify(parentKeys) === JSON.stringify(childKeys)) {
                return this.props.children;
            }
        } else {
            return (
                <div className={selector} onClick={onClick}>
                    {this.props.children}
                </div>
            );
        }
    }
}

Component.contextTypes = {
    module: PropTypes.string
};

export class Wrapper extends Component {
    render() {
        const namespace = this.props.name || 'wrapper';
        const module = this.props.module || this.props.children.props.name;
        const modifiers = renderModifiers(this.props.modifiers);
        const classes = this.props.className ? ' ' + this.props.className : '';

        return(
            <div className={`${module}_${namespace + modifiers}${classes}`}>
                {this.props.children}
            </div>
        )
    }
}

export class Group extends Component {
    render() {
        return(
            <Wrapper name='group' {...this.props}>{this.props.children}</Wrapper>
        )
    }
}