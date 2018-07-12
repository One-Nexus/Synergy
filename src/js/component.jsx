import React from 'react';
import PropTypes from 'prop-types';
import HTMLTags from 'html-tags';

import getHtmlProps from './utilities/getHtmlProps';
import getParam from './utilities/getParam';
import renderModifiers from './utilities/renderModifiers';

/**
 * Render a Synergy component
 *
 * @extends React.Component
 */
export default class Component extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.config = context.config || {};
        this.tag = this.props.tag || (HTMLTags.includes(this.props.name) ? this.props.name : 'div');
        this.module = this.props.module || context.module;
        this.modifiers = renderModifiers(this.props.modifiers);
        this.classes = this.props.className ? ' ' + this.props.className : '';
        this.selector = `${this.module}_${this.props.name + this.modifiers}${this.classes}`;

        this.getEventHandlers([
            this.props, this.config[this.props.name] ? this.config[this.props.name] : {}
        ]);

        if (this.props.href) this.tag = 'a';
    }

    getEventHandlers(properties) {
        this.eventHandlers = this.eventHandlers || {};

        if (properties.constructor === Array) {
            properties.forEach(group => this.getEventHandlers(group));
        }
        else for (var key in properties) {
            const value = properties[key];

            if (key.indexOf('event') === 0 || key.indexOf('[') === 0) {
                this.eventHandlers[getParam(key)] = Synergy.modules[this.module].methods[value];
            }

            if (Object.keys(window).includes(key.toLowerCase())) {
                if (typeof value === 'function') {
                    this.eventHandlers[key] = value;
                } else {
                    //@TODO be smarter here, don't hardcode any properties
                    if (key !== 'name') {
                        this.eventHandlers[key] = Synergy.modules[this.module].methods[value];
                    }
                }
            }

            if (key.indexOf('modifier') === 0 || key.indexOf('-') === 0) {
                if (this.props.modifiers && this.props.modifiers.includes(getParam(key))) {
                    this.getEventHandlers(value);
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
        const renderTag = () => (
            <this.tag 
                {...getHtmlProps(this.props)} 
                {...this.eventHandlers} 

                className={this.selector}
                data-component={this.props.name}
            >

                {this.props.children}
            </this.tag>   
        );

        if (this.isNested()) {
            const parentKeys = Object.keys(this.props).sort();
            const childKeys = Object.keys(this.props.children.props).sort();

            if (JSON.stringify(parentKeys) === JSON.stringify(childKeys)) {
                return this.props.children;
            }

            else return renderTag();
        } 

        else return renderTag();
    }
}

Component.contextTypes = {
    module: PropTypes.string,
    config: PropTypes.object
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