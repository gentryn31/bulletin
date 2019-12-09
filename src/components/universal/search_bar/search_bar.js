import React, { Component } from 'react';

import './search_bar.css'

class SearchBar extends Component {
    render() {
        return (
            <div className={`search_bar ${this.props.className}`}>
                <i className="material-icons search_bar-search_icon">search</i>
                <input className='search_bar-input' type='text' placeholder='Search...' />
            </div>
        );
    }
}

SearchBar.defaultProps = {
    className: ""
}

export default SearchBar;