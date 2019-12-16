import React, { Component } from 'react';

import Toolbar from '../../../components/universal/toolbar/toolbar.js';

import './heatmap.css'

class HeatMapJane extends Component {
    render() {
        return (
            <div className='heatmap_page page'>
                <Toolbar title="Heat Map" hasBackButton onBackClicked={() => this.props.history.push("/jane")} />
                <iframe id="map" src="https://www.google.com/maps/d/embed?mid=1N-j6Dawtctqfj_5nLbz8CMZA-5DaTQHZ&hl=en"></iframe>
            </div>
        );
    }
}

export default HeatMapJane;