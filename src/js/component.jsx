import React from 'react';
import PropTypes from 'prop-types';
import HTMLTags from 'html-tags';

import getHtmlProps from './utilities/getHtmlProps';
import getModifiersFromProps from './utilities/getModifiersFromProps';
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
        this.tag = props.tag || (HTMLTags.includes(props.name) ? props.name : 'div');
        this.module = props.module || context.module;
        this.propModifiers = renderModifiers(getModifiersFromProps(props, Synergy.CssClassProps));
        this.passedModifiers = renderModifiers(props.modifiers);
        this.modifiers = this.propModifiers + this.passedModifiers;
        this.classes = props.className ? ' ' + props.className : '';
        this.selector = `${this.module}_${props.name + this.modifiers}${this.classes}`.replace(/,/g, '_');

        this.getEventHandlers([
            props, this.config[props.name] ? this.config[props.name] : {}
        ]);

        if (props.href) this.tag = 'a';
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

    getChildContext() {
        return {
            component: this.props.name
        };
    }

    renderTag(props) {
        return (
            <this.tag 
                {...getHtmlProps(props)} 
                {...this.eventHandlers} 

                className={this.selector}
                data-component={props.name}
            >

                {props.children}
            </this.tag>
        )
    }

    render() {
        if (this.isNested()) {
            const parentKeys = Object.keys(this.props).sort();
            const childKeys = Object.keys(this.props.children.props).sort();
            const sameAsParent = this.props.name === this.props.children.props.name;

            if (JSON.stringify(parentKeys) === JSON.stringify(childKeys) && sameAsParent) {
                return this.props.children;
            }

            return this.renderTag(this.props);
        } 

        else return this.renderTag(this.props);
    }
}

Component.contextTypes = {
    module: PropTypes.string,
    modifiers: PropTypes.array,
    component: PropTypes.string,
    subComponent: PropTypes.array,
    config: PropTypes.object
};

Component.childContextTypes = {
    component: PropTypes.string
};

export class SubComponent extends Component {
    constructor(props, context) {
        super(props, context);

        let namespace = `${context.component}_${props.name}`;

        if (context.subComponent) {
            namespace = `${namespace}_${context.subComponent.join('_')}`;
        }

        this.selector = `${this.module}_${namespace + this.modifiers}${this.classes}`;
    }

    getChildContext() {
        let subComponents = this.context.subComponent || [];

        subComponents.push(this.props.name);

        return {
            subComponent: subComponents
        };
    }

    render() {
        return this.renderTag(this.props);
    }
}

SubComponent.childContextTypes = {
    subComponent: PropTypes.array
};

export class Wrapper extends Component {

    constructor(props, context) {
        super(props, context);

        this.module = props.module;
        this.namespace = props.name || 'wrapper';
        this.modifiers = renderModifiers(props.modifiers);
        this.classes = props.className ? ' ' + props.className : '';

        if (!this.module) {
            if (props.children.length) {
                this.module = props.children[0].props.name;
            } else {
                this.module = props.children.props.name;
            }
        }

        if (Synergy.CssClassProps) Synergy.CssClassProps.forEach(prop => {
            if (Object.keys(props).includes(prop)) {
                this.classes = classes + ' ' + prop
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
        return (
            <Wrapper name='group' {...this.props}>{this.props.children}</Wrapper>
        )
    }
}