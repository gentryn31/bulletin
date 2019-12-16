import React, { Component } from 'react';

import Toolbar from '../../../components/universal/toolbar/toolbar.js';

import './new_update.css';

class NewUpdateWade extends Component {
    componentDidMount() {
        document.getElementById('case_number_input').value = this.generateCaseNumber();
    }

    generateCaseNumber = () => {
        let caseNumber = "NSP";
        const now = new Date();
        const year = now.getFullYear() % 100;
        caseNumber += year;

        for (let i = 0; i < 4; i++) {
            caseNumber += Math.floor(Math.random() * 10);
        }

        return caseNumber;
    }

    render() {
        return (
            <div className='new_update_page page'>
                <Toolbar title="Add New Update" hasBackButton onBackClicked={() => { this.props.history.push("/wade") }} />
                <div className="new_update_page-body">
                    <label className="new_update_page-body-label">Case Number</label>
                    <input id="case_number_input" className="new_update_page-body-input" type="text" />
                    <label className="new_update_page-body-label">Case Number</label>
                    <input id="case_number_input" className="new_update_page-body-input" type="text" />
                </div>
            </div>
        );
    }
}

export default NewUpdateWade;