import React, { Component } from 'react';
import CaseUpdateGroup from '../case_update_group/case_update_group.js';

import './case_update_list.css'

class CaseUpdateList extends Component {
    render() {
        return (
            <div className='case_update_list'>
                <CaseUpdateGroup label='Starred Cases' data={this.props.starredCases} />
                <CaseUpdateGroup label='Open Cases' data={this.props.openCases} />
                <CaseUpdateGroup label='Closed Cases' data={this.props.closedCases} />
            </div>
        );
    }
}

export default CaseUpdateList;