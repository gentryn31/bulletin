import React, { Component } from 'react';
import { formatDate } from '../../../functions.js';
import IconButton from '../../universal/icon_button/icon_button.js';

import './task_inbox_preview.css'

class TaskInboxPreview extends Component {
    constructor() {
        super();

        this.state = {
            expanded: false,
            updates: [],
            visibleUpdates: 0
        }
    }
    setEnterListener = () => {
        document.addEventListener('keypress', this.handleEnterPress);
    }

    removeEnterListener = () => {
        document.removeEventListener('keypress', this.handleEnterPress);
    }

    handleEnterPress = (e) => {
        if (e.key == 'Enter') {
            this.props.showTask(this.props.task);
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
            <div className={`task_inbox_preview ${!this.props.isComplete ? 'incomplete' : ''}`} onClick={() => this.props.showTask(this.props.task)} tabIndex={-1} >
                <IconButton className={this.state.expanded ? 'case_task_inbox-header-dropdown_arrow active' : 'case_task_inbox-header-dropdown_arrow'} icon={this.props.isComplete ? "check_box" : "check_box_outline_blank"} onClick={() => this.props.markComplete(this.props.task)} />
                <p className='task_inbox_preview-officer_name'>{this.checkForSearchMatches(this.props.task.label, this.props.query)}</p>
                <p className='task_inbox_preview-date'>{this.props.isComplete ? this.checkForSearchMatches(`Completed ${formatDate(this.props.completeDate)}`, this.props.query) : this.checkForSearchMatches(`Assigned ${formatDate(this.props.assignedDate)}`, this.props.query)}</p>
            </div>
        );
    }
}

export default TaskInboxPreview;