import React, { Component } from 'react';
import { formatDate } from '../../../functions.js';
import IconButton from '../../universal/icon_button/icon_button.js';
import Tag from '../../universal/tag/tag.js';
import TaskInboxPreview from '../task_inbox_preview/task_inbox_preview.js';

import './case_task_inbox.css'

class CaseTaskInbox extends Component {
    constructor() {
        super();

        this.state = {
            expanded: false,
            updates: [],
            visibleUpdates: 0
        }
    }

    generateTaskPreviewList = () => {
        let views = [];

        Object.values(this.props.tasks).forEach(task => {
            const officer = this.props.officers[task.officerId];
            const isComplete = task.complete;
            const isRead = this.props.officer.read_tasks.includes(task.id);
            views.unshift(<TaskInboxPreview visible={this.state.expanded} task={task} assignedDate={task.assigned} completeDate={task.completed} isRead={isRead} isComplete={isComplete} showTask={(task) => this.props.showTask(task)} markComplete={(task) => { this.props.markComplete(task) }} query={this.props.query} />);
        });

        if (this.state.expanded) {
            this.getHeight(views);
        }
        return views;
    }

    toggleExpanded = (tasks, caseData, user) => {
        this.setState({ expanded: !this.state.expanded }, () => {
            this.getHeight(tasks, caseData, user);
        });
    }

    getNumNewTasks = (officer, tasks) => {
        let sum = 0;

        console.log(tasks);
        tasks.forEach(task => {
            if (!task.complete) {
                sum++;
            }
        });

        return sum;
    }

    getHeight = (elements) => {
        const HEADER_HEIGHT = 72;
        const UPDATE_PREVIEW_HEIGHT = 42;
        const newHeight = this.state.expanded ? HEADER_HEIGHT + UPDATE_PREVIEW_HEIGHT * elements.length : HEADER_HEIGHT;
        document.getElementById(`${this.props.caseData.id}-case_task_inbox`).style.height = `${newHeight}px`;
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
            <div id={`${this.props.caseData.id}-case_task_inbox`} className='case_task_inbox'>
                <div className='case_task_inbox-header'>
                    <h3 className="case_task_inbox-header-case_number">{this.checkForSearchMatches(`Case #${this.props.caseData.id} `, this.props.query)}</h3>
                    <p className="case_task_inbox-header-date_info">{this.props.caseData.open ? this.checkForSearchMatches(`Opened ${formatDate(this.props.caseData.openDate, true)} `, this.props.query) : this.checkForSearchMatches(`Closed ${formatDate(this.props.caseData.closeDate, true)} `, this.props.query)}</p>
                    {this.getNumNewTasks(this.props.officer, this.props.tasks) > 0 ? <Tag label={`${this.getNumNewTasks(this.props.officer, this.props.tasks)} INCOMPLETE`} /> : ''}
                    <IconButton className={this.state.expanded ? 'case_task_inbox-header-dropdown_arrow active' : 'case_task_inbox-header-dropdown_arrow'} icon='keyboard_arrow_down' onClick={() => this.toggleExpanded(this.props.tasks, this.props.caseData, this.props.officer)} />
                </div>
                {this.generateTaskPreviewList()}

            </div>
        );
    }
}

export default CaseTaskInbox;