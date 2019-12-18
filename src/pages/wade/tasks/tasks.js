import React, { Component } from 'react';
import Toolbar from '../../../components/universal/toolbar/toolbar.js';
import FilterSidebar from '../../../components/universal/filter_sidebar/filter_sidebar.js';
import CaseTaskList from '../../../components/wade/case_task_list/case_task_list.js';

import './tasks.css'

class TasksPageWade extends Component {
    constructor() {
        super();

        this.state = {
            query: "",
            filterViews: {
                "Cases": {
                    title: "Cases",
                    filters: {
                        "my_cases": {
                            id: "my_cases",
                            label: "My Cases",
                            type: "checkbox",
                            isChecked: true
                        },
                        "closed_cases": {
                            id: "closed_cases",
                            label: "Closed Cases",
                            type: "checkbox",
                            isChecked: true
                        }
                    }
                },
                "Tasks": {
                    title: "Tasks",
                    filters: {
                        "incomplete_tasks": {
                            id: "incomplete_tasks",
                            label: "Incomplete Tasks",
                            type: "checkbox",
                            isChecked: true
                        },
                        "complete_tasks": {
                            id: "complete_tasks",
                            label: "Complete Tasks",
                            type: "checkbox",
                            isChecked: true
                        }
                    }
                }
            },
            showTaskPanel: false,
            activeTask: {}
        }
    }

    toggleFilter = (id) => {
        let filterViews = this.state.filterViews;
        Object.values(filterViews).forEach(subgroup => {
            Object.values(subgroup.filters).forEach(filter => {
                if (filter.id == id) {
                    filterViews[subgroup.title].filters[filter.id].isChecked = !filter.isChecked;
                }
            });
        });
        this.setState({ filterViews: filterViews });
    }

    showTaskPanel = (update) => {
        this.setState({ showTaskPanel: true, activeTask: update });
    }

    render() {
        const myCases = this.props.data.officers[this.props.data.uid].cases.map(id => { return this.props.data.cases[id] }).filter(c => { return c.open });
        const closedCases = Object.values(this.props.data.cases).filter(c => { return !c.open });
        return (
            <div className='tasks_page page'>
                <Toolbar title="Tasks" hasBackButton onBackClicked={() => { this.props.history.push("/wade"); }} hasSearch search={query => this.setState({ query: query })} />
                <div className="tasks_page-body">
                    <FilterSidebar contents={this.state.filterViews} onClick={(id) => this.toggleFilter(id)} />
                    <CaseTaskList
                        myCases={myCases}
                        showMyCases={this.state.filterViews["Cases"].filters["my_cases"].isChecked}
                        closedCases={closedCases}
                        showClosedCases={this.state.filterViews["Cases"].filters["closed_cases"].isChecked}
                        officer={this.props.data.officers[this.props.data.uid]}
                        updates={this.props.data.updates}
                        showCompleteTasks={this.state.filterViews["Tasks"].filters["complete_tasks"].isChecked}
                        showIncompleteTasks={this.state.filterViews["Tasks"].filters["incomplete_tasks"].isChecked}
                        officers={this.props.data.officers}
                        tasks={this.props.data.tasks}
                        showTask={(task) => this.showTaskPanel(task)}
                        markComplete={(task) => this.props.markComplete(task)}
                        query={this.state.query} />
                </div>
            </div>
        );
    }
}

export default TasksPageWade;