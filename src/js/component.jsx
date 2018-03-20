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

        // dynamically fetch onClick event from window.Synergy object
        if (onClick && Synergy.modules) {
            if (/^function[^{]+\{\s*\}/m.test(onClick.toString())) {
                if (Synergy.modules[module]) {
                    onClick = Synergy.modules[module].methods[this.props.onClick.name];
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
        let module = this.props.module;

        if (!module) {
            if (this.props.children.length) {
                module = this.props.children[0].props.name;
            } else {
                module = this.props.children.props.name;
            }
        }

        const namespace = this.props.name || 'wrapper';
        const modifiers = renderModifiers(this.props.modifiers);

        let classes = this.props.className ? ' ' + this.props.className : '';

        if (Synergy.CssClassProps) Synergy.CssClassProps.forEach(prop => {
            if (Object.keys(this.props).includes(prop)) {
                classes = classes + ' ' + prop
            }
        });

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