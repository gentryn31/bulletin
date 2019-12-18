import React, { Component } from 'react';

import Toolbar from '../../../components/universal/toolbar/toolbar.js';
import TipCard from '../../../components/universal/tip_card/tip_card.js';

import './home.css'

class HomePageJane extends Component {
    componentDidMount() {
        this.props.login("jane");
    }

    render() {
        return (
            <div className='home_page page'>
                <Toolbar title="Bulletin">
                    <button className="home_page-toolbar-logout_button" onClick={() => this.props.history.push('/')}>Logout</button>
                </Toolbar>
                <div className="home_page-body">
                    <h2 className="home_page-body-heading">Welcome, Jane</h2>
                    <button className="home_page-body-button" onClick={() => { this.props.history.push("/jane/updates") }}>View Case Updates</button>
                    <button className="home_page-body-button" onClick={() => { this.props.history.push("/jane/heatmap") }}>View Heat Map</button>
                    <TipCard />
                </div>

            </div>
        );
    }
}

export default HomePageJane;