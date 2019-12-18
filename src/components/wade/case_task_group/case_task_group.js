import React, { Component } from 'react';
import { formatDate } from '../../../functions.js';
import CaseTaskInbox from '../case_task_inbox/case_task_inbox.js';

import './case_task_group.css'

class CaseTaskGroup extends Component {
    caseMatchesQuery = (c, query) => {
        query = query.toLowerCase();
        const matchesCaseNumber = (`Case #${c.id}`).toLowerCase().search(query) > -1;
        const matchesOpenDate = (`Opened ${formatDate(c.openDate, true)}`).toLowerCase().search(query) > -1;

        return matchesCaseNumber || matchesOpenDate;
    }

    taskMatchesQuery = (task, query) => {
        console.log(task);
        query = query.toLowerCase();
        const caseNo = `Case #${task.caseId}`;
        const matchesCase = caseNo.toLowerCase().search(query) > -1;
        const matchesLabel = task.label.toLowerCase().search(query) > -1;
        const matchesAssigned = formatDate(task.assigned, true).toLowerCase().search(query) > -1;
        const matchesCompleted = formatDate(task.completed, true).toLowerCase().search(query) > -1;

        return matchesCase || matchesLabel || matchesAssigned || matchesCompleted;
    }

    generateCaseTaskInboxes = () => {
        return Object.values(this.props.data)
            .filter(c => { return this.props.officer.cases.includes(c.id) })
            .filter(c => {
                const validTasks = Object.values(this.props.tasks)
                    .filter(task => { return this.taskMatchesQuery(task, this.props.query) || this.caseMatchesQuery(c, this.props.query) })
                    .filter(task => { return c.tasks.includes(task.id) })
                    .filter(task => {
                        const isComplete = task.complete;
                        return (isComplete && this.props.showCompleteTasks || !isComplete && this.props.showIncompleteTasks);
                    });
                return validTasks.length != 0;
            })
            .map(c => {
                const validTasks = Object.values(this.props.tasks)
                    .filter(task => { return this.taskMatchesQuery(task, this.props.query) || this.caseMatchesQuery(c, this.props.query) })
                    .filter(task => { return c.tasks.includes(task.id) })
                    .filter(task => {
                        const isComplete = task.complete;
                        return (isComplete && this.props.showCompleteTasks || !isComplete && this.props.showIncompleteTasks);
                    });
                return <CaseTaskInbox
                    key={`${c.id}-task_inbox`}
                    caseData={c}
                    officer={this.props.officer}
                    tasks={validTasks}
                    officers={this.props.officers}
                    showCompleteTasks={this.props.showCompleteTasks}
                    showIncompleteTasks={this.props.showIncompleteTasks}
                    showTask={(task) => this.props.showTask(task)}
                    markComplete={(task) => this.props.markComplete(task)}
                    query={this.props.query} />;
            });
    }

    render() {
        const views = this.generateCaseTaskInboxes(this.props.tasks);
        return (
            <div className='case_task_group'>
                <h2 className='case_task_group-heading'>{this.props.label}</h2>
                {views.length == 0 ? <div className='case_task_group-empty_message'>No Relevant Cases Available</div> : views}
            </div>
        );
    }
}

export default CaseTaskGroup;