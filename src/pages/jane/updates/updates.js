import React, { Component } from 'react';
import Toolbar from '../../../components/universal/toolbar/toolbar.js';
import FilterSidebar from '../../../components/universal/filter_sidebar/filter_sidebar.js';
import CaseUpdateList from '../../../components/jane/case_update_list/case_update_list.js';
import UpdateDetailsSidebar from '../../../components/universal/update_details_sidebar/update_details_sidebar.js';

class UpdatesPageJane extends Component {
    render() {
        return (
            <div>
                <Toolbar />
                <FilterSidebar />
                <CaseUpdateList />
                <UpdateDetailsSidebar />
            </div>
        );
    }
}

export default UpdatesPageJane;