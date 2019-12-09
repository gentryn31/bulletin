import React, { Component } from 'react';
import CaseUpdateInbox from '../case_update_inbox/case_update_inbox.js';

import './case_update_group.css'

class CaseUpdateGroup extends Component {
    generateCaseUpdateInboxes = (data) => {
        return Object.values(data).map(c => { return <CaseUpdateInbox caseData={c} /> });
    }

    render() {
        return (
            <div className='case_update_group'>
                <h2 classname='case_update_group-heading'>{this.props.label}</h2>
                {this.generateCaseUpdateInboxes(this.props.data)}
            </div>
        );
    }
}

export default CaseUpdateGroup;