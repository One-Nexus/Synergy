import React from 'react';

/**
 * Construct a Synergy module
 */
export default class Synergize extends React.Component {
    constructor(props, context) {
        super(props, context);

        try {
            this.config = global.Synergy.modules[this.props.name].config;
        } catch(error) {
            this.config = {};
        }

        try {
            this.methods = global.Synergy.modules[this.props.name].methods;
        } catch(error) {
            this.methods = {};
        }

        for (let method in this.methods) {
            this[method] = this.methods[method];
        }

        this.content = defaults => {
            if (this.props.content) {
                return defaults;
            }

            if (this.containsStaticMethodContent(this.props.children)) {
                return this.props.children;
            }

            return defaults;
        };
    }

    containsStaticMethodContent(props) {
        return Object.entries(this.props).some(prop => {
            const [key, value] = [prop[0], prop[1]];

            if (value.constructor === Array) {
                return value.find(prop => prop.type === this.constructor.content);
            } else {
                return value.type === this.constructor.content;
            }
        });
    }
}