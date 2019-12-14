import React, { Component } from 'react';
import Toolbar from '../../../components/universal/toolbar/toolbar.js';
import FilterSidebar from '../../../components/universal/filter_sidebar/filter_sidebar.js';
import CaseUpdateList from '../../../components/jane/case_update_list/case_update_list.js';
import UpdateDetailsSidebar from '../../../components/universal/update_details_sidebar/update_details_sidebar.js';

import './updates.css';

class UpdatesPageJane extends Component {
    constructor() {
        super();

        this.state = {
            filterViews: {
                "Cases": {
                    title: "Cases",
                    filters: {
                        "starred_cases": {
                            id: "starred_cases",
                            label: "Starred Cases",
                            type: "checkbox",
                            isChecked: true
                        },
                        "open_cases": {
                            id: "open_cases",
                            label: "Open Cases",
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
                "Updates": {
                    title: "Updates",
                    filters: {
                        "unread_updates": {
                            id: "unread_updates",
                            label: "Unread Updates",
                            type: "checkbox",
                            isChecked: true
                        },
                        "read_updates": {
                            id: "read_updates",
                            label: "Read Updates",
                            type: "checkbox",
                            isChecked: true
                        }
                    }
                }
            },
            showUpdatePanel: false,
            activeUpdate: { id: -1, caseId: "", officerId: 0, timestamp: -1, date: "", time: "", location: "", information: "", replies: [] }
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

    showUpdatePanel = (update) => {
        this.setState({ showUpdatePanel: true, activeUpdate: update });
    }

    closeSidebar = (readUpdate) => {
        this.props.markAsRead(readUpdate);
        this.setState({ showUpdatePanel: false });
    }

    render() {
        const starredCases = this.props.data.officers[this.props.data.uid].starredCases.map(id => { return this.props.data.cases[id] }).filter(c => { return c.open });
        const openCases = Object.values(this.props.data.cases).filter(c => { return c.open && !this.props.data.officers[this.props.data.uid].starredCases.includes(c.id) });
        const closedCases = Object.values(this.props.data.cases).filter(c => { return !c.open });
        return (
            <div className="updates_page page">
                <Toolbar hasBackButton hasSearch />
                <div className="updates_page-body">
                    <FilterSidebar contents={this.state.filterViews} onClick={(id) => this.toggleFilter(id)} />
                    <CaseUpdateList
                        starredCases={starredCases}
                        showStarredCases={this.state.filterViews["Cases"].filters["starred_cases"].isChecked}
                        openCases={openCases}
                        showOpenCases={this.state.filterViews["Cases"].filters["open_cases"].isChecked}
                        closedCases={closedCases}
                        showClosedCases={this.state.filterViews["Cases"].filters["closed_cases"].isChecked}
                        officer={this.props.data.officers[this.props.data.uid]}
                        updates={this.props.data.updates}
                        showReadUpdates={this.state.filterViews["Updates"].filters["read_updates"].isChecked}
                        showUnreadUpdates={this.state.filterViews["Updates"].filters["unread_updates"].isChecked}
                        officers={this.props.data.officers}
                        showUpdate={(update) => this.showUpdatePanel(update)}
                        toggleStarred={(id, isStarred) => this.props.toggleStarred(id, isStarred)} />
                </div>
                <UpdateDetailsSidebar isActive={this.state.showUpdatePanel} activeUpdate={this.state.activeUpdate} officers={this.props.data.officers} onClose={(readUpdate) => this.closeSidebar(readUpdate)} addReply={(message, update) => this.props.addReply(message, update)} />
            </div>
        );
    }
}

export default UpdatesPageJane;