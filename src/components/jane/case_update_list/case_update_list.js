import React, { Component } from 'react';
import CaseUpdateGroup from '../case_update_group/case_update_group.js';

import './case_update_list.css'

class CaseUpdateList extends Component {
    render() {
        return (
            <div className='case_update_list'>
                {this.props.showStarredCases ?
                    <CaseUpdateGroup
                        label='Starred Cases'
                        data={this.props.starredCases}
                        officer={this.props.officer}
                        updates={this.props.updates}
                        officers={this.props.officers}
                        showReadUpdates={this.props.showReadUpdates}
                        showUnreadUpdates={this.props.showUnreadUpdates}
                        showUpdate={(update) => this.props.showUpdate(update)}
                        toggleStarred={(id, isStarred) => this.props.toggleStarred(id, isStarred)} />
                    : ''}
                {this.props.showOpenCases ?
                    <CaseUpdateGroup
                        label='Open Cases'
                        data={this.props.openCases}
                        officer={this.props.officer}
                        updates={this.props.updates}
                        officers={this.props.officers}
                        showReadUpdates={this.props.showReadUpdates}
                        showUnreadUpdates={this.props.showUnreadUpdates}
                        showUpdate={(update) => this.props.showUpdate(update)}
                        toggleStarred={(id, isStarred) => this.props.toggleStarred(id, isStarred)} />
                    : ''}
                {this.props.showClosedCases ?
                    <CaseUpdateGroup
                        label='Closed Cases'
                        data={this.props.closedCases}
                        officer={this.props.officer}
                        updates={this.props.updates}
                        officers={this.props.officers}
                        showReadUpdates={this.props.showReadUpdates}
                        showUnreadUpdates={this.props.showUnreadUpdates}
                        showUpdate={(update) => this.props.showUpdate(update)}
                        toggleStarred={(id, isStarred) => this.props.toggleStarred(id, isStarred)} />
                    : ''}
            </div>
        );
    }
}

export default CaseUpdateList;