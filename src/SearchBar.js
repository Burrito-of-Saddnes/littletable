import React from 'react';
import { Component } from 'react';

export default class SearchBar extends Component {
    constructor(props) {
      super(props);
      this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
    }
    handleFilterTextInputChange(e) {
      this.props.onFilterTextInput(e.target.value);
    }
  
    render() {
      return (
        <form className="Search">
          <input
            type="text"
            placeholder="Поиск"
            value={this.props.filterText}
            onChange={this.handleFilterTextInputChange}
            className="SearchBar"
          />
        </form>
      );
    }
  };