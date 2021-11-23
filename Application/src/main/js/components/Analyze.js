import React, { Component } from 'react'
import { properties } from '../Properties';
import CommitFrequency from './CommitFrequency';
import CommitRelevance from './CommitRelevance';
import CommitRepartition from './CommitRepartition';
import CommitTable from './CommitTable';

// This component is used by Project.js to show the analysis of a git project.
// It fetch data from the API to get informations about the commits of a project.

export class Analyze extends Component {

    constructor(props) {
        super(props);
        this.state = {
            commitInfo: {},
            isLoading: true,
        };
    }

    componentDidMount() {
        fetch(`http://${properties.web_server_url}/api/v1/commitInfo?id=${this.props.project.projectId}&token=${this.props.project.token}&gitRoot=${this.props.project.gitRoot}`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    commitInfo: data,
                    isLoading: false,
                });
            })
            .catch(error => this.setState({ error, isLoading: false }));

    }

    render() {
        if (this.state.isLoading) {
            return <div>Chargement...</div>
        }
        if (this.state.error) {
            return <div>Erreur: {this.state.error}</div>
        }

        let rows = [];
        this.props.project.students.forEach((dataObj, index) => {
            rows.push(
                <li key={index}>{dataObj.firstName} {dataObj.surname}</li>
            );
        });
        return (
            <div className="card">

                <div className="card-header">
                    <a className="card-link" data-toggle="collapse" href="#collapseAnalyze">
                        Analyse du projet
                        </a>
                </div>

                <div className="collapse show" id="collapseAnalyze">

                    <div className="card-body row">

                        <div className="col-12">

                            <div className="container">
                                <div className="card-header">
                                    <a className="card-link" data-toggle="collapse" href="#collapseCommitTable">Historique des commits</a>
                                </div>
                                <br />
                                <CommitTable data={this.state.commitInfo} />
                            </div>

                        </div>



                    </div>

                    <div className="card-body row">

                        <div className="col-6">

                            <div className="container">
                                <div className="card-header">
                                    <a className="card-link" data-toggle="collapse" href="#collapseCommitRep">Répartition des commits</a>
                                </div>
                                <br />
                                <CommitRepartition data={this.state.commitInfo} />
                            </div>

                        </div>

                        <div className="col-6">

                            <div className="container">
                                <div className="card-header">
                                    <a className="card-link" data-toggle="collapse" href="#collapseCommitRel">Pertinence des commits</a>
                                </div>
                                <br />
                                <CommitRelevance data={this.state.commitInfo} />
                            </div>

                        </div>

                    </div>

                    <div className="card-body row">

                        <div className="col-6">

                            <div className="container">
                                <div className="card-header">
                                    <a className="card-link" data-toggle="collapse" href="#collapseCommitFreq">Fréquence des commits</a>
                                </div>
                                <br />
                                <CommitFrequency data={this.state.commitInfo} />
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default Analyze
