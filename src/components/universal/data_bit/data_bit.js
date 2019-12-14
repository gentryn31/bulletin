import React, { Component } from 'react';

import './data_bit.css'

class DataBit extends Component {
    render() {
        return (
            <div className={`data_bit ${this.props.isSmall ? 'small' : ''}`}>
                <h3 className='data_bit-label'>{this.props.label}</h3>
                <p className='data_bit-data'>{this.props.data}</p>
            </div>
        );
    }
}

DataBit.defaultProps = {
    isSmall: false,
}

export default DataBit;