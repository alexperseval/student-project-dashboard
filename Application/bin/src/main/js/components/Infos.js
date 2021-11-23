import React, { Component } from 'react'

// This component is used by Project.js to show the general informations about a project.

export class Infos extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let rows = [];
        let count = 0;
        this.props.project.students.forEach((dataObj, index) => {
            rows.push(
                <li key={count}>{dataObj.firstName} {dataObj.surname}</li>
            );
            count++;
        });
        return (
            <div className="card">

                <div className="card-header">
                    <a className="card-link" data-toggle="collapse" href="#collapseInfos">
                        Informations générales
                        </a>
                </div>

                <div className="collapse show" id="collapseInfos">

                    <div className="card-body">
                        <p className="card-text"> <strong>Nom du projet: </strong> {this.props.project.projectName} </p>
                        <p className="card-text"> <strong>Description: </strong> {this.props.project.projectDescription} </p>
                        <p className="card-text"> <strong>Matière: </strong> {this.props.project.course} </p>
                        <p className="card-text"> <strong>Enseignant: </strong> {this.props.project.professor.firstName} {this.props.project.professor.surname} </p>
                        <div className="card-text"> <strong>Membres: </strong> </div>
                        <ul>
                            {rows}
                        </ul>
                        <p className="card-text"> <strong>URL: </strong><a href={this.props.project.gitUrl} className="card-link" >{this.props.project.gitUrl}</a> </p>
                    </div>

                </div>

            </div>
        )
    }
}

export default Infos
