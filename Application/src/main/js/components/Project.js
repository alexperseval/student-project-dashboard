import React, { Component } from 'react'
import Infos from './Infos'
import Analyze from './Analyze'
import SonarqubeAnalyze from './SonarqubeAnalyze'
import { properties } from '../Properties';
import { withRouter } from "react-router";

// This component fetch the data of a project from the API based on the written id
// in the path and gives it to its children.

export class Project extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            project: {},
        };
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        fetch(`http://${properties.web_server_url}/api/v1/projectList/${id}`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    project: data,
                    isLoading: false,
                });
            })
            .catch(error => this.setState({ error, isLoading: false }));
    }

    render() {
        const id = this.props.match.params.id;
        if (this.state.isLoading) {
            return <div>Chargement...</div>
        }
        return (
            <div className="container" id="page-content">
                <div className="card">
                    <div className="card-header"><strong>Détails du projet</strong> <small><abbr title="Projet Individuel">PJI</abbr> 2021 - Etat des projets</small></div>
                    <div className="card-body row">
                        <div className="col-12">
                            <Infos project={this.state.project} />
                        </div>
                    </div>
                    <div className="card-body row">
                        <div className="col-12">
                            <SonarqubeAnalyze project={this.state.project} />
                        </div>
                    </div>
                    <div className="card-body row">
                        <div className="col-12">
                            <Analyze project={this.state.project} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Project)
