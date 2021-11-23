import React, { Component } from 'react'

// This component is used in the project list to show the members of a git project.

export class Members extends Component {
  render() {
    let rows = [];
    let count = 0;
    rows.push(
      <span key={count}>{this.props.professor.firstName} {this.props.professor.surname} (professeur)</span>
    );
    count++;

    this.props.students.forEach((dataObj, index) => {
      rows.push(
        <span key={count}> / {dataObj.firstName} {dataObj.surname}</span>
      );
      count++;
    });
    return (
      <div>
        {rows}
      </div>
    )
  }
}

export default Members
