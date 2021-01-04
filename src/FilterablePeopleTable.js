import React from 'react';
import { Component } from 'react';
import PeopleTable from './PeopleTable';
import SearchBar from './SearchBar';
import AddingBar from './AddingBar';

export default class FilterablePeopleTable extends Component {
    constructor(props) {
      super(props);
      this.state = { 
        peoples: [
          {id: "1", firstName: 'Neorge Hg', lastName:'Sad', email: 'aemail@email.ru', phone: '17898979'},
          {id: "2", firstName: 'Meorge', lastName:'Pad', email: 'bemail@email.ru', phone: '27898979'},
          {id: "3", firstName: 'George', lastName:'Tad', email: 'cemail@email.ru', phone: '37898979'},
        ],
        filterText: '',
        modalOpen: false,
      };
      this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
    }

    handleFilterTextInput = ( filterText ) => {
      this.setState({ filterText: filterText });
    }

    handlePersonAdd = ( person ) => {
      this.setState({ peoples: [...this.state.peoples, person] }) 
    }

    render() {
      return (
        <div className="Container">
          <SearchBar
            filterText = { this.state.filterText }
            onFilterTextInput = { this.handleFilterTextInput }
          />
          <PeopleTable
            peoples = { this.state.peoples }
            filterText = { this.state.filterText }
          />
          <AddingBar
            modalOpen = { this.state.modalOpen }
            peoples = { this.state.peoples }
            onAdd = {this.handlePersonAdd}
          />
        </div>
      );
    }
  };
  