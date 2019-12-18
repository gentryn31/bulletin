import React, { Component } from 'react';
import CaseTaskGroup from '../case_task_group/case_task_group.js';

import './case_task_list.css'

class CaseTaskList extends Component {
    render() {
        return (
            <div className='case_task_list'>
                {this.props.showMyCases ?
                    <CaseTaskGroup
                        label='My Cases'
                        data={this.props.myCases}
                        officer={this.props.officer}
                        updates={this.props.updates}
                        officers={this.props.officers}
                        tasks={this.props.tasks}
                        showCompleteTasks={this.props.showCompleteTasks}
                        showIncompleteTasks={this.props.showIncompleteTasks}
                        showTask={(task) => this.props.showTask(task)}
                        markComplete={(task) => this.props.markComplete(task)}
                        query={this.props.query} />
                    : ''}
                {this.props.showClosedCases ?
                    <CaseTaskGroup
                        label='Closed Cases'
                        data={this.props.closedCases}
                        officer={this.props.officer}
                        updates={this.props.updates}
                        officers={this.props.officers}
                        tasks={this.props.tasks}
                        showCompleteTasks={this.props.showCompleteTasks}
                        showIncompleteTasks={this.props.showIncompleteTasks}
                        showTask={(task) => this.props.showTask(task)}
                        markComplete={(task) => this.props.markComplete(task)}
                        query={this.props.query} />
                    : ''}
            </div>
        );
    }
}

export default CaseTaskList;