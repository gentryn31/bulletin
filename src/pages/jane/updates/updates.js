import React, { Component } from 'react';
import Toolbar from '../../../components/universal/toolbar/toolbar.js';
import FilterSidebar from '../../../components/universal/filter_sidebar/filter_sidebar.js';
import CaseUpdateList from '../../../components/jane/case_update_list/case_update_list.js';
import UpdateDetailsSidebar from '../../../components/universal/update_details_sidebar/update_details_sidebar.js';

class UpdatesPageJane extends Component {


    render() {
        const starredCases = this.props.data.officers[this.props.data.uid].starredCases.map(id => { return this.props.data.cases[id] });
        const openCases = Object.values(this.props.data.cases).filter(c => { return c.open });
        const closedCases = Object.values(this.props.data.cases).filter(c => { return !c.open });
        const filterViews = {
            "Cases": {
                title: "Cases",
                filters: {
                    "starred_cases": {
                        id: "starred_cases",
                        label: "Starred Cases",
                        type: "checkbox",
                        value: true
                    },
                    "open_cases": {
                        id: "open_cases",
                        label: "Open Cases",
                        type: "checkbox",
                        value: true
                    },
                    "closed_cases": {
                        id: "closed_cases",
                        label: "Closed Cases",
                        type: "checkbox",
                        value: true
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
                        value: true
                    },
                    "read_updates": {
                        id: "read_updates",
                        label: "Read Updates",
                        type: "checkbox",
                        value: true
                    }
                }
            }
        };
        return (
            <div className="updates_page page">
                <Toolbar hasBackButton hasSearch />
                <FilterSidebar contents={filterViews} />
                <CaseUpdateList starredCases={starredCases} openCases={openCases} closedCases={closedCases} />
                <UpdateDetailsSidebar />
            </div>
        );
    }
}

export default UpdatesPageJane;