import React, { Component } from 'react';

import './icon_button.css'

class IconButton extends Component {
    setEnterListener() {
        document.addEventListener('keydown', this.listenForEnterPress);
    }

    removeEnterListener() {
        document.removeEventListener('keydown', this.listenForEnterPress);
    }

    listenForEnterPress = e => {
        if (e.key == "Enter") {
            this.props.onClick();
        }
    }

    render() {
        return (
            <div id={this.props.id} className={`icon_button ${this.props.className}`} onClick={e => this.props.onClick(e)} tabIndex={-1}>
                <i className="material-icons icon_button-icon">{this.props.icon}</i>
                <div className="icon_button-spotlight" tabIndex={this.props.tabIndex} onFocus={() => this.setEnterListener()} onBlur={() => this.removeEnterListener()} />
            </div>
        );
    }
}

IconButton.defaultProps = {
    className: "",
    id: "",
    tabIndex: 0
}

export default IconButton;