import React, { Component } from 'react'
import {
    Link
} from "react-router-dom";
import Members from './Members'
import ArchiveButton from './ArchiveButton'

// This component creates a table row to represent each project 
// in the project list table.
// It is called by ProjectTable.js.

export class TableRow extends Component {
    
    render() {
        return (
            <tr>
                <td>{this.props.course}</td>
                <td><Link to={`${this.props.path}/${this.props.id}`}>{this.props.projectName}</Link></td>
                <td>
                    <Members professor={this.props.professor} students={this.props.students} />
                </td>
                <td>
                    <ArchiveButton id={this.props.id} archived={this.props.archived}/>
                </td>
            </tr>
        )
    }
}

export default TableRow
