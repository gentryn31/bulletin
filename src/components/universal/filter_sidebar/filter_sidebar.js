import React, { Component } from 'react';
import FilterSubgroup from '../filter_subgroup/filter_subgroup.js';

import './filter_sidebar.css'

class FilterSidebar extends Component {
    generateFilterSubgroups = (contents) => {
        return Object.values(contents).map(subgroup => { return <FilterSubgroup data={subgroup} onClick={(id) => this.props.onClick(id)} /> });
    }

    render() {
        return (
            <div className='filter_sidebar'>
                <h2 className='filter_sidebar-header'>Filters</h2>
                {this.generateFilterSubgroups(this.props.contents)}
            </div>
        );
    }
}

export default FilterSidebar;