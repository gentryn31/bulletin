import React, { Component } from 'react';

import './search_bar.css'

class SearchBar extends Component {

    alterIconOnFocus = () => {
        document.getElementById("search_bar-search_icon").style.color = "#212121";
    }

    alterIconOnBlur = () => {
        document.getElementById("search_bar-search_icon").style.color = "#FFFFFF";
    }

    render() {
        return (
            <div className={`search_bar ${this.props.className}`}>
                <i id="search_bar-search_icon" className="material-icons search_bar-search_icon">search</i>
                <input className='search_bar-input' type='text' placeholder='Search...' onFocus={() => this.alterIconOnFocus()} onBlur={() => this.alterIconOnBlur()} />
            </div>
        );
    }
}

SearchBar.defaultProps = {
    className: ""
}

export default SearchBar;