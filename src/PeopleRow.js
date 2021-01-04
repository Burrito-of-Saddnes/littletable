import React from 'react';
import { Component } from 'react';

export default class PeopleRow extends Component {
    render() {
      return (
        <tr className="tr">
          <td className="td"> { this.props.people.id } </td>
          <td className="td"> { this.props.people.firstName } </td>
          <td className="td"> { this.props.people.lastName } </td>
          <td className="td"> { this.props.people.email } </td>
          <td className="td"> { this.props.people.phone } </td>
        </tr>        
      );
    }
  };