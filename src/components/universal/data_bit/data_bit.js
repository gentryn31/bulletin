import React, { Component } from 'react';

import './data_bit.css'

class DataBit extends Component {
    checkForSearchMatches = (text, query) => {
        text = text.toString();
        console.log(`Label: ${this.props.label}, Text: ${text}`)
        const textSegments = text.toLowerCase().split(query.toLowerCase());
        if (textSegments.length > 0) {
            let views = [];
            let insertionIndex = 0;
            views.push(text.substring(insertionIndex, textSegments[0].length));
            insertionIndex = textSegments[0].length;
            for (let i = 1; i < textSegments.length; i++) {
                views.push(<span className="highlight">{text.substring(insertionIndex, insertionIndex + query.length)}</span>);
                insertionIndex += query.length;
                views.push(text.substring(insertionIndex, insertionIndex + textSegments[i].length));
                insertionIndex += textSegments[i].length;
            }
            return views;
        }

        return text;
    }

    render() {
        return (
            <div className={`data_bit ${this.props.isSmall ? 'small' : ''}`}>
                <h3 className='data_bit-label'>{this.props.label}</h3>
                <p className="data_bit-data">{this.checkForSearchMatches(this.props.data, this.props.query)}</p>
            </div>
        );
    }
}

DataBit.defaultProps = {
    isSmall: false,
    data: "",
    query: ""
}

export default DataBit;