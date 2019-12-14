import React, { Component } from 'react';
import IconButton from '../icon_button/icon_button.js';

import './filter_checkbox.css'

class FilterCheckbox extends Component {
    render() {
        return (
            <div className='filter_checkbox'>
                <IconButton className={this.props.isChecked ? 'filter_checkbox-button checked' : 'filter_checkbox-button'} icon={this.props.isChecked ? 'check_box' : 'check_box_outline_blank'} onClick={(e) => this.props.onClick(this.props.id)} />
                <p className='filter_checkbox-label'>{this.props.label}</p>
            </div>
        );
    }
}

export default FilterCheckbox;