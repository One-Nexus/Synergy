import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

/**
 * Render Component component
 * 
 * @access public
 *
 * @param {Object} options
 */
export default class Component extends React.Component {
    render() {
        return (
            <div className={`${this.context.module}_${this.props.name}`}>
                {this.props.children}
            </div>
        );
    }
}

Component.contextTypes = {
    module: PropTypes.string
};