import React, { Component } from 'react';

import Toolbar from '../../../components/universal/toolbar/toolbar.js';
import TipCard from '../../../components/universal/tip_card/tip_card.js';

import './home.css'

class HomePageWade extends Component {
    render() {
        return (
            <div className='home_page page'>
                <Toolbar title="Bulletin">
                    <button className="home_page-toolbar-logout_button" onClick={() => this.props.history.push('/')}>Logout</button>
                </Toolbar>
                <div className="home_page-body">
                    <h2 className="home_page-body-heading">Welcome, 572</h2>
                    <button className="home_page-body-button" onClick={() => { this.props.history.push("/wade/tasks") }}>View Assigned Tasks</button>
                    <button className="home_page-body-button" onClick={() => { this.props.history.push("/wade/updates") }}>View Case Updates</button>
                    <TipCard />
                </div>

            </div>
        );
    }
}

export default HomePageWade;