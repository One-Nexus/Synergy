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

    constructor(props, context) {
        super(props, context);

        this.module = this.props.module || context.module;
        this.modifiers = renderModifiers(this.props.modifiers);
        this.classes = this.props.className ? ' ' + this.props.className : '';
        this.selector = `${this.module}_${this.props.name + this.modifiers}${this.classes}`;
        this.onClick = this.props.onClick;

        // dynamically fetch onClick event from global.Synergy object
        if (this.onClick && Synergy.modules) {
            if (/^function[^{]+\{\s*\}/m.test(this.onClick.toString())) {
                if (Synergy.modules[this.module]) {
                    this.onClick = Synergy.modules[this.module].methods[this.props.onClick.name];
                }
            }
        }
    }

    isNested() {
        try {
            return this.constructor.name === this.props.children.type.name;
        } catch (error) {
            return false;
        }
    }

    render() {
        if (this.isNested()) {
            const parentKeys = Object.keys(this.props).sort();
            const childKeys = Object.keys(this.props.children.props).sort();

            if (JSON.stringify(parentKeys) === JSON.stringify(childKeys)) {
                return this.props.children;
            }
        } else {
            return (
                <div className={this.selector} onClick={this.onClick}>
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

    constructor(props, context) {
        super(props, context);

        this.module = this.props.module;
        this.namespace = this.props.name || 'wrapper';
        this.modifiers = renderModifiers(this.props.modifiers);
        this.classes = this.props.className ? ' ' + this.props.className : '';

        if (!this.module) {
            if (this.props.children.length) {
                this.module = this.props.children[0].props.name;
            } else {
                this.module = this.props.children.props.name;
            }
        }

        if (Synergy.CssClassProps) Synergy.CssClassProps.forEach(prop => {
            if (Object.keys(this.props).includes(prop)) {
                this.classes = this.classes + ' ' + prop
            }
        });
    }

    render() {
        return(
            <div className={`${this.module}_${this.namespace + this.modifiers}${this.classes}`}>
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