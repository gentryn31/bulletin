import React, { Component } from 'react';

import './tag.css'

class Tag extends Component {
    render() {
        return (
            <div className='tag'>
                <p className="tag-label">{this.props.label}</p>
            </div>
        );
    }
}

export default Tag;