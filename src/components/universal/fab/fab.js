import React, { Component } from 'react';

import './fab.css'

class FloatingActionButton extends Component {
    render() {
        return (
            <div className='fab' onClick={() => this.props.onClick()}>
                <p className="fab-label">{this.props.label}</p>
                <i className="material-icons fab-icon">{this.props.icon}</i>
            </div>
        );
    }
}

export default FloatingActionButton;