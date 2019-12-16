import React, { Component } from 'react';
import { formatDate } from '../../../functions.js';
import IconButton from '../../universal/icon_button/icon_button.js';
import Tag from '../../universal/tag/tag.js';
import UpdateInboxPreview from '../update_inbox_preview/update_inbox_preview.js';

import './case_update_inbox.css'

class CaseUpdateInbox extends Component {
    constructor() {
        super();

        this.state = {
            expanded: false,
            updates: [],
            visibleUpdates: 0
        }
    }

    toggleExpanded = (updates, caseData, user) => {
        this.setState({ expanded: !this.state.expanded }, () => {
            this.getHeight(updates, caseData, user);
        });
    }

    getNumNewUpdates = (officer, caseData) => {
        let sum = 0;

        caseData.updates.forEach(update => {
            if (!officer.read_updates.includes(update)) {
                sum++;
            }
        });

        return sum;
    }

    generateUpdatePreviewList = (caseData, updates, officers, user) => {
        let views = [];

        updates.forEach(update => {
            const officer = officers[update.officerId];
            const officerName = `${officer.first_name} ${officer.last_name}`;
            const isRead = user.read_updates.includes(update.id);
            views.unshift(<UpdateInboxPreview visible={this.state.expanded} update={update} officerName={officerName} date={update.date} isRead={isRead} showUpdate={(update) => this.props.showUpdate(update)} />);
        });

        if (this.state.expanded) {
            this.getHeight(views);
        }
        return views;
    }

    getHeight = (elements) => {
        const HEADER_HEIGHT = 72;
        const UPDATE_PREVIEW_HEIGHT = 42;
        const newHeight = this.state.expanded ? HEADER_HEIGHT + UPDATE_PREVIEW_HEIGHT * elements.length : HEADER_HEIGHT;
        document.getElementById(`${this.props.caseData.id}-case_update_inbox`).style.height = `${newHeight}px`;
    }

    render() {
        return (
            <div id={`${this.props.caseData.id}-case_update_inbox`} className='case_update_inbox'>
                <div className='case_update_inbox-header'>
                    <h3 className="case_update_inbox-header-case_number">Case #{this.props.caseData.id}</h3>
                    <p className="case_update_inbox-header-date_info">{this.props.caseData.open ? `Opened ${formatDate(this.props.caseData.openDate, true)}` : `Closed ${formatDate(this.props.caseData.closeDate, true)}`}</p>
                    {this.getNumNewUpdates(this.props.officer, this.props.caseData) > 0 ? <Tag label={`${this.getNumNewUpdates(this.props.officer, this.props.caseData)} NEW`} /> : ''}
                    <IconButton className={this.state.expanded ? 'case_update_inbox-header-dropdown_arrow active' : 'case_update_inbox-header-dropdown_arrow'} icon='keyboard_arrow_down' onClick={() => this.toggleExpanded(this.props.updates, this.props.caseData, this.props.officer)} />
                </div>
                {this.generateUpdatePreviewList(this.props.caseData, this.props.updates, this.props.officers, this.props.officer)}
            </div>
        );
    }
}

export default CaseUpdateInbox;