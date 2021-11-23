import React, { Component } from 'react'
import CommitTableRow from './CommitTableRow'

// This component creates a table to show all the commits of a project.
// For each commit, it renders a CommitTableRow component.
// It is called by Analyze.js.

export class CommitTable extends Component {

    render() {
        let rows = [];
        this.props.data.commits.forEach((dataObj, index) => {
            rows.push(
                <CommitTableRow
                    key={index}
                    data={dataObj} />
            );
        });
        return (
            <div className="container collapse" id="collapseCommitTable">

                <table className="table table-striped table-sm">

                    <thead className="thead-dark">
                        <tr>
                            <th>Auteur</th>
                            <th>Message</th>
                            <th>Date du commit</th>
                        </tr>
                    </thead>

                    <tbody id="commitTable">
                        {rows}
                    </tbody>

                </table>

            </div>
        )
    }
}

export default CommitTable
