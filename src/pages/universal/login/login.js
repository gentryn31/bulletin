import React, { Component } from 'react';

import './login.css'
import logo from "../../../assets/logo_large.png";

class LoginPage extends Component {
    onLogin = (e) => {
        const email = document.getElementById("login_page-email_input").value;
        const name = email.split('@')[0].toLowerCase();

        this.props.history.push(`/${name}`);
        this.props.login(name);
    }

    render() {
        return (
            <div className='login_page page'>
                <img className="login_page-logo" src={logo} alt="Bulletin by BlueLine" />
                <label for="login_page-email_input" className="login_page-input_label">Email</label>
                <input id="login_page-email_input" name="login_page-email_input" className="login_page-input" type="text" />
                <label for="login_page-password_input" className="login_page-input_label">Password</label>
                <input id="login_page-password_input" name="login_page-password_input" className="login_page-input" type="password" />
                <button className="login_page-login_button" onClick={(e) => { this.onLogin(e) }}>Login</button>
            </div>
        );
    }
}

export default LoginPage;