import React, { Component } from 'react';

import Toolbar from '../../../components/universal/toolbar/toolbar.js';

import './new_case.css'

class NewCaseDave extends Component {
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
            <div className='new_case_page page'>
                <Toolbar title="Create New Case File" hasBackButton onBackClicked={() => { this.props.history.push("/dave/updates") }} />
                <div className="new_case_page-body">
                    <label for="case" className="new_case_page-body-label">Case Number</label>
                    <input id="case_number_input" className="new_case_page-body-input" type="text" />
                    <label for="date" className="new_case_page-body-label">Date</label>
                    <input id="case-form-input-date" className="new_case_page-body-input" name="date" type="date" />
                    <label for="description" className="new_case_page-body-label">Case Description</label>
                    <textarea id="case-form-input-info" className="new_case_page-body-input" name="description" type="text" rows="4" />
                    <button className="new_case_page-body-button" onClick={() => {
                        this.props.onSubmit(this.getUpdateFromFields());
                        this.props.history.push("/wade/updates");
                    }}>Submit</button>
                </div>
            </div>
        );
    }
}

export default NewCaseDave;