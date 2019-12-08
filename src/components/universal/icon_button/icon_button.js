import React, { Component } from 'react';

import './icon_button.css'

class IconButton extends Component {
    render() {
        return (
            <div id={this.props.id} className={`icon_button ${this.props.className}`} onClick={e => this.props.onClick(e)} tabIndex={-1}>
                <i className="material_icons icon_button-icon">{this.props.icon}</i>
                <div className="icon_button-spotlight" tabIndex={0} />
            </div>
        );
    }
}

IconButton.defaultProps = {
    className: "",
    id: ""
}

export default IconButton;