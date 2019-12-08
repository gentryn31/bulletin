import React, { Component } from 'react';

import './search_bar.css'

class SearchBar extends Component {
    render() {
        return (
            <div className='search_bar'>
                <input type='text' placeholder='Search...' />
            </div>
        );
    }
}

export default SearchBar;