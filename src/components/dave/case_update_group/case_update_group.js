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
    generateCaseUpdateInboxes = (data) => {
        return Object.values(data).filter(c => {
            const validUpdates = Object.values(this.props.updates).filter(update => { return c.updates.includes(update.id) }).filter(update => {
                const isRead = this.props.officer.read_updates.includes(update.id);
                return isRead && this.props.showReadUpdates || !isRead && this.props.showUnreadUpdates;
            });
            return validUpdates.length != 0
        }).map(c => {
            const validUpdates = Object.values(this.props.updates).filter(update => { return c.updates.includes(update.id) }).filter(update => {
                const isRead = this.props.officer.read_updates.includes(update.id);
                return isRead && this.props.showReadUpdates || !isRead && this.props.showUnreadUpdates;
            });
            return <CaseUpdateInbox
                caseData={c}
                officer={this.props.officer}
                updates={validUpdates}
                officers={this.props.officers}
                showReadUpdates={this.props.showReadUpdates}
                showUnreadUpdates={this.props.showUnreadUpdates}
                showUpdate={(update) => this.props.showUpdate(update)}
                toggleStarred={(id, isStarred) => this.props.toggleStarred(id, isStarred)} />;

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