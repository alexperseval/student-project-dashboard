import React, { Component } from 'react'
import TableRow from './TableRow'

// This component creates a table to show the project list.
// For each project, it renders a TableRow component.
// The project list data come from its parent.
// It is called by ProjectList.js.

export class ProjectTable extends Component {

    render() {
        let rows = [];
        this.props.data.forEach((dataObj, index) => {
            rows.push(
                <TableRow
                    path={this.props.path}
                    key={index}
                    id={dataObj.id}
                    course={dataObj.course}
                    projectName={dataObj.projectName}
                    professor={dataObj.professor}
                    students={dataObj.students} />
            );
        });
        return (
            <div className="container">
                <table className="table table-striped">

                    <thead className="thead-dark">
                        <tr>
                            <th>Matière</th>
                            <th>Nom du projet</th>
                            <th>Membre(s)</th>
                        </tr>
                    </thead>
                    <tbody id="tableProjectList">
                        {rows}
                    </tbody>

                </table>

            </div>
        )
    }
}

export default ProjectTable
