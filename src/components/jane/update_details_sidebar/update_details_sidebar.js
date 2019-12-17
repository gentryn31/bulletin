import React, { Component } from 'react';
import IconButton from '../../universal/icon_button/icon_button.js';
import DataBit from '../../universal/data_bit/data_bit.js';

import './update_details_sidebar.css'
import { formatDate } from '../../../functions.js';

class UpdateDetailsSidebar extends Component {

    componentDidMount() {
        document.addEventListener('keypress', this.checkEnterPress);
    }

    componentWillUnmount() {
        document.removeEventListener('keypress', this.checkEnterPress);
    }

    componentWillReceiveProps(newProps) {
        if (newProps.isActive && newProps.isActive != this.props.isActive) {
            document.getElementById('update_details_sidebar').focus();
        }
    }

    checkEnterPress = (e) => {
        if (document.activeElement == document.getElementById('update_details_sidebar-reply_box') && e.key == 'Enter') {
            this.submitReply(e.target.value, this.props.activeUpdate);
            e.target.value = '';
        }
    }

    submitReply = (message, update) => {
        this.props.addReply(message, update);
    }

    generateReplyViews = (replies) => {
        return replies.map(reply => {
            return <div className="update_details_sidebar-reply">
                <b className="update_details_sidebar-reply-officer">{reply.officer.first_name} {reply.officer.last_name}:</b> {reply.message}
            </div>
        });
    }
    render() {
        console.log(this.props.activeUpdate);
        return (
            <div id='update_details_sidebar' className={`update_details_sidebar ${this.props.isActive ? 'active' : ''}`}>
                <div className='update_details_sidebar-header'>
                    <h2 className='update_details_sidebar-header-title'>Update Details</h2>
                    <IconButton icon='close' onClick={(e) => this.props.onClose(this.props.activeUpdate)} tabIndex={this.props.isActive ? 1 : -1} />
                </div>
                <div className='update_details_sidebar-body'>
                    <DataBit label='Officer' data={`${this.props.officers[this.props.activeUpdate.officerId].first_name} ${this.props.officers[this.props.activeUpdate.officerId].last_name}`} query={this.props.query} isSmall />
                    <DataBit label='Badge Number' data={this.props.activeUpdate.officerId} query={this.props.query} isSmall />
                    <DataBit label='Location' data={this.props.activeUpdate.location} query={this.props.query} />
                    <DataBit label='Date' data={formatDate(this.props.activeUpdate.date, true)} isSmall />
                    <DataBit label='Time' data={this.props.activeUpdate.time} isSmall />
                    <DataBit label='Content' data={this.props.activeUpdate.information} query={this.props.query} />
                    {this.props.activeUpdate.comments.length == 0 ? '' :
                        <div className="update_details_sidebar-body-reply_container">
                            <h3 className="data_bit-label">Replies</h3>
                            <div className="update_details_sidebar-body-reply_container-replies">
                                {this.generateReplyViews(this.props.activeUpdate.comments)}
                            </div>
                        </div>
                    }
                </div>
                <input id='update_details_sidebar-reply_box' className='update_details_sidebar-reply_box' type='text' placeholder='Reply...' tabIndex={this.props.isActive ? 1 : -1} />
            </div>
        );
    }
}

export default UpdateDetailsSidebar;