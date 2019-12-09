import React, { Component } from 'react';
import FilterCheckbox from '../filter_checkbox/filter_checkbox.js';

import './filter_subgroup.css'

class FilterSubgroup extends Component {
    generateFilterOptions = (filters) => {
        return Object.values(filters).map(filter => {
            if (filter.type == 'checkbox') {
                return <FilterCheckbox id={filter.id} label={filter.label} isChecked={filter.isChecked} />;
            }
        });
    }

    render() {
        return (
            <div className='filter_subgroup'>
                <h3 className='filter_subgroup-title'>{this.props.data.title}</h3>
                {this.generateFilterOptions(this.props.data.filters)}
            </div>
        );
    }
}

export default FilterSubgroup;