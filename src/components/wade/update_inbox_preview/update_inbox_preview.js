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

    checkForSearchMatches = (text, query) => {
        text = text.toString();
        const textSegments = text.toLowerCase().split(query.toLowerCase());
        if (textSegments.length > 0) {
            let views = [];
            let insertionIndex = 0;
            views.push(text.substring(insertionIndex, textSegments[0].length));
            insertionIndex = textSegments[0].length;
            for (let i = 1; i < textSegments.length; i++) {
                views.push(<span className="highlight">{text.substring(insertionIndex, insertionIndex + query.length)}</span>);
                insertionIndex += query.length;
                views.push(text.substring(insertionIndex, insertionIndex + textSegments[i].length));
                insertionIndex += textSegments[i].length;
            }
            return views;
        }

        return text;
    }

    render() {
        return (
            <div className={`update_inbox_preview ${!this.props.isRead ? 'unread' : ''}`} onClick={() => this.props.showUpdate(this.props.update)} tabIndex={-1} >
                <div className='update_inbox_preview-unread_indicator' />
                <p className='update_inbox_preview-officer_name'>{this.checkForSearchMatches(`${this.props.officerName} (${this.props.update.officerId})`, this.props.query)}</p>
                <p className='update_inbox_preview-date'>{this.checkForSearchMatches(formatDate(this.props.date), this.props.query)}</p>
                <div className='update_inbox_preview-spotlight' tabIndex={this.props.visible ? 0 : -1} onFocus={() => this.setEnterListener()} onBlur={() => this.removeEnterListener()} />
            </div>
        );
    }
}

export default UpdateInboxPreview;