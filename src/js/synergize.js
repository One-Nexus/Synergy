import React from 'react';

/**
 * Construct a Synergy module
 */
export default class Synergize extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.config = (global.UI && global.UI.config) ? global.UI.config[this.props.name] : null;
        this.methods = this.config ? (this.config.methods || []) : [];

        this.methods.forEach(method => {
            this[method] = Synergy.modules[this.props.name].methods[method];
        });

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