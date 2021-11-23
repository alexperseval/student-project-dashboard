import React, { Component } from 'react'

// This component creates a commit table row to represent each commit 
// in the commit table.
// It is called by CommitTable.js.

export class CommitTableRow extends Component {

    render() {
        return (
            <tr>
                <td>{this.props.data.message}</td>
                <td>{this.props.data.author}</td>
                <td>{this.props.data.date}</td>
            </tr>
        )
    }
}

export default CommitTableRow