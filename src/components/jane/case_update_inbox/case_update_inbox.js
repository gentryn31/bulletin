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
            starred: false,
            expanded: false,
            updates: [],
            visibleUpdates: 0
        }
    }

    toggleStarred = () => {
        this.props.toggleStarred(this.props.caseData.id, !this.isStarred(this.props.officer, this.props.caseData.id));
    }

    toggleExpanded = (updates, caseData, user) => {
        this.setState({ expanded: !this.state.expanded }, () => {
            this.getHeight(updates, caseData, user);
        });
    }

    isStarred = (officer, id) => {
        return officer.starredCases.includes(id);
    }

    getNumNewUpdates = (officer, caseId, updates) => {
        return Object.values(updates).filter(update => { return update.caseId == caseId }).filter(update => { return !officer.read_updates.includes(update.id) }).length;
    }

    caseMatchesQuery = (c, query) => {
        query = query.toLowerCase();
        const matchesCaseNumber = (`Case #${c.id}`).toLowerCase().search(query) > -1;
        const matchesOpenDate = (`Opened ${formatDate(this.props.caseData.openDate, true)}`).toLowerCase().search(query) > -1;

        return matchesCaseNumber || matchesOpenDate;
    }

    updateMatchesQuery = (update, query) => {
        query = query.toLowerCase();
        const caseNo = `Case #${update.caseId}`;
        const matchesCase = caseNo.toLowerCase().search(query) > -1;
        const matchesOfficerId = update.officerId.toString().toLowerCase().search(query) > -1;
        const officerName = `${this.props.officers[update.officerId].first_name} ${this.props.officers[update.officerId].last_name}`;
        const matchesOfficerName = officerName.toLowerCase().search(query) > -1;
        const matchesOfficerNameBadge = `${this.props.officers[update.officerId].first_name} ${this.props.officers[update.officerId].last_name} (${update.officerId})`.toLowerCase().search(query) > -1;
        const matchesDate = formatDate(update.date, true).toLowerCase().search(query) > -1;
        const matchesLocation = update.location.toLowerCase().search(query) > -1;
        const matchesInformation = update.information.toLowerCase().search(query) > -1;
        const matchesComments = update.comments.filter(comment => { return comment.message.toLowerCase().search(query) > -1 }).length > 0;

        return matchesCase || matchesOfficerId || matchesOfficerName || matchesOfficerNameBadge || matchesDate || matchesLocation || matchesInformation || matchesComments;
    }

    generateUpdatePreviewList = (updates, officers, user, query) => {
        let views = [];

        updates.filter(update => { return (this.updateMatchesQuery(update, query) || this.caseMatchesQuery(this.props.caseData, query)) }).forEach(update => {
            const officer = officers[update.officerId];
            const officerName = `${officer.first_name} ${officer.last_name} `;
            const isRead = user.read_updates.includes(update.id);
            views.unshift(<UpdateInboxPreview key={`${update.id}-inbox_preview`} visible={this.state.expanded} update={update} officerName={officerName} date={update.date} isRead={isRead} showUpdate={(update) => this.props.showUpdate(update)} query={query} />);
        });

        console.log(views)

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

    checkForSearchMatches = (text, query) => {
        text = text.toString();
        const textSegments = text.toLowerCase().split(query.toLowerCase());
        if (textSegments.length > 0) {
            let views = [];
            let insertionIndex = 0;
            views.push(text.substring(insertionIndex, textSegments[0].length));
            insertionIndex = textSegments[0].length;
            for (let i = 1; i < textSegments.length; i++) {
                views.push(<span className="highlight">{text.substring(insertionIndex, insertionIndex + query.length)}</span>);
                insertionIndex += query.length;
                views.push(text.substring(insertionIndex, insertionIndex + textSegments[i].length));
                insertionIndex += textSegments[i].length;
            }
            return views;
        }

        return text;
    }

    render() {
        return (
            <div id={`${this.props.caseData.id}-case_update_inbox`} className='case_update_inbox'>
                <div className='case_update_inbox-header'>
                    <IconButton className={this.isStarred(this.props.officer, this.props.caseData.id) ? 'case_update_inbox-header-star_button starred' : 'case_update_inbox-header-star_button'} icon={this.isStarred(this.props.officer, this.props.caseData.id) ? 'star' : 'star_border'} onClick={() => this.toggleStarred()} />
                    <h3 className="case_update_inbox-header-case_number">{this.checkForSearchMatches(`Case #${this.props.caseData.id} `, this.props.query)}</h3>
                    <p className="case_update_inbox-header-date_info">{this.props.caseData.open ? this.checkForSearchMatches(`Opened ${formatDate(this.props.caseData.openDate, true)} `, this.props.query) : this.checkForSearchMatches(`Closed ${formatDate(this.props.caseData.closeDate, true)} `, this.props.query)}</p>
                    {this.getNumNewUpdates(this.props.officer, this.props.caseData.id, this.props.updates) > 0 ? <Tag label={`${this.getNumNewUpdates(this.props.officer, this.props.caseData.id, this.props.updates)} NEW`} /> : ''}
                    <IconButton className={this.state.expanded ? 'case_update_inbox-header-dropdown_arrow active' : 'case_update_inbox-header-dropdown_arrow'} icon='keyboard_arrow_down' onClick={() => this.toggleExpanded(this.props.updates, this.props.caseData, this.props.officer)} />
                </div>
                {this.generateUpdatePreviewList(this.props.updates, this.props.officers, this.props.officer, this.props.query)}
            </div>
        );
    }
}

export default CaseUpdateInbox;