import React from 'react';
import { Component } from 'react';
import PeopleRow from './PeopleRow';

export default class PeopleTable extends Component {
    render() {
      let rows = [];
      this.props.peoples.forEach((people) => {
        if (people.id.indexOf(this.props.filterText) && 
            people.firstName.indexOf(this.props.filterText) && 
            people.lastName.indexOf(this.props.filterText) &&
            people.email.indexOf(this.props.filterText) &&
            people.phone.indexOf(this.props.filterText) === -1) {
              return;
        } 
        rows.push(<PeopleRow people = {people} key = {people.id} />);
      });
      return (
        <table className="Table">
          <thead className="Head">
            <tr>
              <th className="th"> id </th>
              <th className="th"> firstName </th>
              <th className="th"> lastName </th>
              <th className="th"> email </th>
              <th className="th"> phone </th>
            </tr>
          </thead>
          <tbody className="Body"> 
            { rows } 
          </tbody>
        </table>          
      );
    }
  };