import React, { Component } from 'react';

import './tip_card.css'

class TipCard extends Component {
    constructor() {
        super();

        this.state = {
            message: "Just a moment... we're getting things ready"
        }
    }

    componentDidMount() {
        this.getJokeOfTheDay();

    }

    getJokeOfTheDay = async () => {
        const url = "https://icanhazdadjoke.com/slack";
        let joke = await fetch(url).then(data => { return data.json() }).then(res => { return res.attachments[0].text });
        this.setState({ message: joke });
    }

    render() {
        return (
            <div className='tip_card'>
                <h3 className="tip_card-heading">Have a Laugh</h3>
                <p className="tip_card-message">{this.state.message}</p>
            </div>
        );
    }
}

export default TipCard;