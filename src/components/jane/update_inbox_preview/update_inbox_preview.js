import React, { Component } from 'react';
import { formatDate } from '../../../functions.js';

import './update_inbox_preview.css'

class UpdateInboxPreview extends Component {
    setEnterListener = () => {
        document.addEventListener('keypress', this.handleEnterPress);
    }

    removeEnterListener = () => {
        document.removeEventListener('keypress', this.handleEnterPress);
    }

    handleEnterPress = (e) => {
        if (e.key == 'Enter') {
            this.props.showUpdate(this.props.update);
        }
    }

    render() {
        return (
            <div className={`update_inbox_preview ${!this.props.isRead ? 'unread' : ''}`} onClick={() => this.props.showUpdate(this.props.update)} tabIndex={-1} >
                <div className='update_inbox_preview-unread_indicator' />
                <p className='update_inbox_preview-officer_name'>{this.props.officerName} ({this.props.update.officerId})</p>
                <p className='update_inbox_preview-date'>{formatDate(this.props.date)}</p>
                <div className='update_inbox_preview-spotlight' tabIndex={this.props.visible ? 0 : -1} onFocus={() => this.setEnterListener()} onBlur={() => this.removeEnterListener()} />
            </div>
        );
    }
}

export default UpdateInboxPreview;