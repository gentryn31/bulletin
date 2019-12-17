import React, { Component } from 'react';
import CaseUpdateInbox from '../case_update_inbox/case_update_inbox.js';

import './case_update_group.css'

class CaseUpdateGroup extends Component {
    constructor() {
        super();

        this.state = {
            isVisible: true
        }
    }

    updateMatchesQuery = (update, query) => {
        query = query.toLowerCase();
        const matchesCase = update.caseId.toLowerCase().search(query) > -1;
        const matchesOfficerId = update.officerId.toString().toLowerCase().search(query) > -1;
        const officerName = `${this.props.officers[update.officerId].first_name} ${this.props.officers[update.officerId].last_name}`;
        const matchesOfficerName = officerName.toLowerCase().search(query) > -1;
        const matchesLocation = update.location.toLowerCase().search(query) > -1;
        const matchesInformation = update.information.toLowerCase().search(query) > -1;
        const matchesComments = update.comments.filter(comment => { return comment.toLowerCase().search(query) > -1 }).length > 0;

        return matchesCase || matchesOfficerId || matchesOfficerName || matchesLocation || matchesInformation || matchesComments;
    }

    generateCaseUpdateInboxes = (data) => {
        return Object.values(data).filter(c => {
            const validUpdates = Object.values(this.props.updates).filter(update => { return this.updateMatchesQuery(update, this.props.query) }).filter(update => { return c.updates.includes(update.id) }).filter(update => {
                const isRead = this.props.officer.read_updates.includes(update.id);
                return isRead && this.props.showReadUpdates || !isRead && this.props.showUnreadUpdates;
            });
            return validUpdates.length != 0
        }).map(c => {
            const validUpdates = Object.values(this.props.updates).filter(update => { return this.updateMatchesQuery(update, this.props.query) }).filter(update => { return c.updates.includes(update.id) }).filter(update => {
                const isRead = this.props.officer.read_updates.includes(update.id);
                return isRead && this.props.showReadUpdates || !isRead && this.props.showUnreadUpdates;
            });
            return <CaseUpdateInbox
                key={`${c.id}-inbox`}
                caseData={c}
                officer={this.props.officer}
                updates={validUpdates}
                officers={this.props.officers}
                showReadUpdates={this.props.showReadUpdates}
                showUnreadUpdates={this.props.showUnreadUpdates}
                showUpdate={(update) => this.props.showUpdate(update)}
                toggleStarred={(id, isStarred) => this.props.toggleStarred(id, isStarred)}
                query={this.props.query} />;

        });
    }

    render() {
        const views = this.generateCaseUpdateInboxes(this.props.data);
        return (
            <div className={`case_update_group`}>
                <h2 className='case_update_group-heading'>{this.props.label}</h2>
                {views.length == 0 ? <div className='case_update_group-empty_message'>No Relevant Cases Available</div> : views}
            </div>
        );
    }
}

export default CaseUpdateGroup;