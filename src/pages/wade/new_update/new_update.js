import React, { Component } from 'react';

import Toolbar from '../../../components/universal/toolbar/toolbar.js';

import './new_update.css';

class NewUpdateWade extends Component {
    componentDidMount() {
        const date = new Date();
        document.getElementById("update-form-input-date").value = `${date.getFullYear()}-${this.makeLeadingZero(date.getMonth() + 1)}-${this.makeLeadingZero(date.getDate())}`;
        document.getElementById("update-form-input-time").value = `${this.makeLeadingZero(date.getHours())}:${this.makeLeadingZero(date.getMinutes())}`
    }

    makeLeadingZero = num => {
        return num < 10 ? "0" + num : num;
    }

    createCasesDropdown = (cases) => {
        let views = [];

        console.log(cases);
        console.log(this.props.cases);

        cases.forEach(c => {
            views.push(<option id={`update-form-input-case-${c.id}`}>{c.id}</option>);
        });

        return <select id="update-form-input-cases" className="new_update_page-body-input">{views}</select>
    }

    getUpdateFromFields = () => {
        const id = this.generateId();
        const officerId = this.props.uid;
        const timestamp = Date.now() / 1000.0;
        const caseId = this.props.cases[document.getElementById("update-form-input-cases").selectedIndex].id;
        const date = document.getElementById("update-form-input-date").value;
        const time = document.getElementById("update-form-input-time").value;
        const location = document.getElementById("update-form-input-location").value;
        const information = document.getElementById("update-form-input-info").value;
        const attachments = document.getElementById("update-form-input-attachments").value.split(/(\\|\/)/g).pop();

        const data = { id: id, officerId: officerId, caseId: caseId, timestamp: timestamp, date: date, time: time, location: location, information: information, attachments: attachments, comments: [] };

        this.resetFields();

        return data;
    }

    generateId = () => {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        const idLength = 20;
        let id = "";

        for (let i = 0; i < idLength; i++) {
            const randIndex = Math.random() * characters.length;
            const nextChar = characters.substring(randIndex, randIndex + 1);
            id += nextChar;
        }

        return id;
    }

    resetFields = () => {
        document.getElementById("update-form-input-cases").selectedIndex = 0;
        document.getElementById("update-form-input-location").value = "";
        document.getElementById("update-form-input-info").value = "";
    }

    render() {
        return (
            <div className='new_update_page page'>
                <Toolbar title="Add New Update" hasBackButton onBackClicked={() => { this.props.history.push("/wade/updates") }} />
                <div className="new_update_page-body">
                    <label for="case" className="new_update_page-body-label">Case Number</label>
                    {this.createCasesDropdown(this.props.cases)}
                    <label for="date" className="new_update_page-body-label">Date</label>
                    <input id="update-form-input-date" className="new_update_page-body-input" name="date" type="date" />
                    <label for="date" className="new_update_page-body-label">Time</label>
                    <input id="update-form-input-time" className="new_update_page-body-input" name="time" type="time" />
                    <label for="location" className="new_update_page-body-label">Location</label>
                    <input id="update-form-input-location" className="new_update_page-body-input" name="location" type="text" />
                    <label for="description" className="new_update_page-body-label">Update Information</label>
                    <textarea id="update-form-input-info" className="new_update_page-body-input" name="description" type="text" rows="4" />
                    <label for="attachments" className="new_update_page-body-label">Update Attachments</label>
                    <input name="attachments" type="file" id="update-form-input-attachments" />
                    <button className="new_update_page-body-button" onClick={() => {
                        this.props.onSubmit(this.getUpdateFromFields());
                        this.props.history.push("/wade/updates");
                    }}>Submit</button>
                </div>
            </div>
        );
    }
}

export default NewUpdateWade;