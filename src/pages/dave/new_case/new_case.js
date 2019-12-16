import React, { Component } from 'react';

import Toolbar from '../../../components/universal/toolbar/toolbar.js';

import './new_case.css'

class NewCaseDave extends Component {
    render() {
        return (
            <div className='new_case_page page'>
                <Toolbar title="Create New Case File" hasBackButton onBackClicked={() => { this.props.history.push("/dave") }} />
            </div>
        );
    }
}

export default NewCaseDave;