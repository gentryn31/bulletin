import React, { Component } from 'react';
import IconButton from '../icon_button/icon_button.js';

import './update_details_sidebar.css'

class UpdateDetailsSidebar extends Component {
    render() {
        return (
            <div className='update_details_sidebar'>
                <h2 classname='update_details_sidebar-header'>Update Details</h2>
                <IconButton icon='close' />
            </div>
        );
    }
}

export default UpdateDetailsSidebar;