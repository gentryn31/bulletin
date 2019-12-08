import React, { Component } from 'react';
import IconButton from '../icon_button/icon_button.js';
import SearchBar from '../search_bar/search_bar.js';

import './toolbar.css'

class Toolbar extends Component {
    render() {
        return (
            <div className='toolbar'>
                {this.props.hasBackButton ? <IconButton className='toolbar-back_button' icon='arrow_back' /> : ''}
                <h1 className='toolbar-title'>Updates</h1>
                {this.props.hasSearch ? <SearchBar className='toolbar-search_bar' data={this.props.searchData} /> : ''}
            </div>
        );
    }
}

export default Toolbar;