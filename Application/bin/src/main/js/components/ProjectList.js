import React, { Component } from 'react'
import {
    Switch,
    Route
} from "react-router-dom";
import { withRouter } from "react-router";

import SearchBar from './SearchBar'
import ProjectTable from './ProjectTable'
import AddProjectLink from './AddProjectLink'
import Project from './Project'

// This components fetch the data from the API to show the project list.
// It also contains a router to show the project list or the project details.

export class ProjectList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            projectName: '',
            isLoading: true,
        };
    }

    componentDidMount() {
        fetch(`http://localhost:8080/api/v1/projectList`)
            .then(response => response.json())
            .then(data => {
                let array = [];

                for (let i = 0; i < data.length; i++) {
                    array[i] = data[i];
                }
                this.setState({
                    data: array,
                    isLoading: false,
                });
            })
            .catch(error => this.setState({ error, isLoading: false }));
    }

    handleSearchEvents = (value) => {
        this.setState({ projectName: value });
    }

    render() {
        if (this.state.isLoading) {
            return <div>Chargement...</div>
        }
        if (this.state.error) {
            return <div>Erreur: {this.state.error}</div>
        }

        const filteredData = this.state.data.filter((dataObj) =>
            (dataObj.projectName.indexOf(this.state.projectName) !== -1));
        const { path, url } = this.props.match;
        return (
            <div>
                <Switch>

                    <Route exact path={`${path}`}>
                        <div className="container" id="page-content">
                            <div className="card">
                            <div className="card-header"><strong>Liste des projets</strong> <small><abbr title="Projet Individuel">PJI</abbr> 2021 - Etat des projets</small></div>
                                <div className="card-body row">
                                    <div className="col-10">
                                        <SearchBar projectName={this.props.projectName}
                                            handleSearchEvents={this.handleSearchEvents} />
                                    </div>
                                    <div className="col-2">
                                        <AddProjectLink />
                                    </div>
                                    <br />
                                </div>

                                <div className="card-body row">
                                    <div className="col-12">
                                        <ProjectTable data={filteredData} path={path} />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </Route>

                    <Route path={`${path}/:id`}>
                        <Project />
                    </Route>

                </Switch>
            </div>

        )
    }
}

export default withRouter(ProjectList)
