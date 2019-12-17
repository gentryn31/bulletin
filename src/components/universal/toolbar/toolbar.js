import React, { Component } from 'react';
import IconButton from '../icon_button/icon_button.js';
import SearchBar from '../search_bar/search_bar.js';

import './toolbar.css'

class Toolbar extends Component {
    render() {
        return (
            <div className='toolbar'>
                {this.props.hasBackButton ? <IconButton className='toolbar-back_button' icon='arrow_back' onClick={() => this.props.onBackClicked()} /> : ''}
                <h1 className='toolbar-title'>{this.props.title}</h1>
                {this.props.hasSearch ? <SearchBar className='toolbar-search_bar' data={this.props.searchData} search={(query) => this.props.search(query)} /> : ''}
                {this.props.children}
            </div>
        );
    }
}

export default Toolbar;