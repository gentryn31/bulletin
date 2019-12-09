import React, { Component } from 'react';
import { formatDate } from '../../../functions.js';
import IconButton from '../../universal/icon_button/icon_button.js';

import './case_update_inbox.css'

class CaseUpdateInbox extends Component {
    constructor() {
        super();

        this.state = {
            starred: false
        }
    }

    toggleStarred = () => {
        this.setState({ starred: !this.state.starred });
    }

    render() {
        return (
            <div className='case_update_inbox'>
                <div className='case_update_inbox-header'>
                    <IconButton className={this.state.starred ? 'starred' : ''} icon={this.state.starred ? 'star' : 'starred'} onClick={() => this.toggleStarred()} />
                    <h3 className="case_update_inbox-case_number">Case #{this.props.caseData.id}</h3>
                    <p className="case_update_inbox-date_info">{this.props.caseData.open ? `Opened ${formatDate(this.props.caseData.openDate, true)}` : `Closed ${formatDate(this.props.caseData.closeDate, true)}`}</p>
                </div>
            </div>
        );
    }
}

export default CaseUpdateInbox;