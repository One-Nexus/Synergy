import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

/**
 * Render Module component
 * 
 * @access public
 *
 * @param {Object} options
 */
export default class Module extends React.Component {

    getChildContext() {
        return { 
            module: this.props.name 
        };
    }

    render() {
        return (
            <div className={this.props.name}>
                {React.Children.map(this.props.children, child => {
                    return React.cloneElement(child, {module: this.props.name})
                })}
            </div>
        );
    }
}

Module.childContextTypes = {
    module: PropTypes.string
};