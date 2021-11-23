import React, { Component } from 'react'
import { properties } from '../Properties';

// This component is used by Project.js to show the sonarqube analysis of a project.

export class SonarqubeAnalyze extends Component {

    constructor(props) {
        super(props);
        this.sonarKey = 
        this.state = {
            isLoading: true,
        };
    }

    
    componentDidMount() {
        fetch(`http://${properties.web_server_url}/api/v1/sonarqube/${this.props.project.projectId}?sonarUrl=${properties.sonar_url}&sonarToken=${properties.sonar_token}`)
        .then(response => response.json())
        .then(data => {
            this.setState({
                data: data,
                isLoading: false,
            });
        })
        .catch(error => this.setState({ error, isLoading: false }));
    }
    
    render() {
        if(this.state.isLoading) {
            return <div>Chargement...</div>
        }
        if (this.state.error) {
            return <div>Erreur: {this.state.error}</div>
        }

        if(this.state.data.analyzeDone == -1) {
            return (
            <div className="card">

                <div className="card-header">
                    <a className="card-link" data-toggle="collapse" href="#collapseSonarqube">
                        Analyse Sonarqube
                    </a>
                </div>

                <div className="collapse show" id="collapseSonarqube">

                    <div className="card-body row center">
                        <div>
                            Aucune analyse disponible
                        </div>
                        
                    </div>
                    <div className="card-body row center">
                        <div class="col-12">
                            Ajoutez les deux fichiers suivants à la racine du Git :
                        </div>
                        <div className="col-12 center">

                            <div className="card-header">
                                <a className="card-link" data-toggle="collapse" href="#collapseFile1">
                                    .gitlab-ci.yml
                                </a>
                            </div>

                            <div className="collapse" id="collapseFile1">

                                <div className="card-body row center">
                                        <code>
                                        variables:<br/>
                                        &nbsp;&nbsp;SONAR_HOST_URL: http://{properties.sonar_url}<br/>
                                        &nbsp;&nbsp;SONAR_TOKEN: {properties.sonar_token}<br/>
                                        <br/>
                                        #Job<br/>
                                        sonarqube-check:<br/>
                                        &nbsp;&nbsp;image:<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name: sonarsource/sonar-scanner-cli:latest<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;entrypoint: [""]<br/>
                                        &nbsp;&nbsp;variables:<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SONAR_USER_HOME: "{"${CI_PROJECT_DIR}"}/.sonar"  # Defines the location of the analysis task cache<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GIT_DEPTH: "0"  # Tells git to fetch all the branches of the project, required by the analysis task<br/>
                                        &nbsp;&nbsp;cache:<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;key: "{"${CI_JOB_NAME}"}"<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;paths:<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- .sonar/cache<br/>
                                        &nbsp;&nbsp;script:<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- sonar-scanner -Dsonar.qualitygate.wait=true<br/>
                                        &nbsp;&nbsp;allow_failure: true<br/>
                                        &nbsp;&nbsp;only:<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- merge_requests<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- master<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- develop<br/>
                                        </code>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 center">

                            <div className="card-header">
                                <a className="card-link" data-toggle="collapse" href="#collapseFile2">
                                sonar-project.properties
                                </a>
                            </div>

                            <div className="collapse" id="collapseFile2">

                                <div className="card-body row center">
                                        <code>
                                        # must be unique in a given SonarQube instance<br/>
                                        sonar.projectKey=project{this.props.project.projectId}<br/>
                                        <br/>
                                        # --- optional properties ---<br/>
                                        <br/>
                                        # defaults to project key<br/>
                                        sonar.projectName={this.props.project.projectName}<br/>
                                        # defaults to 'not provided'<br/>
                                        #sonar.projectVersion=1.0<br/>
                                        <br/>
                                        # Path is relative to the sonar-project.properties file. Defaults to .<br/>
                                        sonar.sources=src<br/>
                                        sonar.java.binaries=.<br/>
                                        
                                        # Encoding of the source code. Default is default system encoding<br/>
                                        #sonar.sourceEncoding=UTF-8<br/>

                                        </code>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
        }

        return (
            
            <div className="card">

                <div className="card-header">
                    <a className="card-link" data-toggle="collapse" href="#collapseSonarqube">
                        Analyse Sonarqube
                    </a>
                </div>

                <div className="collapse show" id="collapseSonarqube">

                    <div className="card-body row center">

                        <div className="col center border-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bug-fill" viewBox="0 0 16 16">
                                <path d="M4.978.855a.5.5 0 1 0-.956.29l.41 1.352A4.985 4.985 0 0 0 3 6h10a4.985 4.985 0 0 0-1.432-3.503l.41-1.352a.5.5 0 1 0-.956-.29l-.291.956A4.978 4.978 0 0 0 8 1a4.979 4.979 0 0 0-2.731.811l-.29-.956z"/>
                                <path d="M13 6v1H8.5v8.975A5 5 0 0 0 13 11h.5a.5.5 0 0 1 .5.5v.5a.5.5 0 1 0 1 0v-.5a1.5 1.5 0 0 0-1.5-1.5H13V9h1.5a.5.5 0 0 0 0-1H13V7h.5A1.5 1.5 0 0 0 15 5.5V5a.5.5 0 0 0-1 0v.5a.5.5 0 0 1-.5.5H13zm-5.5 9.975V7H3V6h-.5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 0-1 0v.5A1.5 1.5 0 0 0 2.5 7H3v1H1.5a.5.5 0 0 0 0 1H3v1h-.5A1.5 1.5 0 0 0 1 11.5v.5a.5.5 0 1 0 1 0v-.5a.5.5 0 0 1 .5-.5H3a5 5 0 0 0 4.5 4.975z"/>
                            </svg>
                            <span> Bugs</span>
                            <div className="center">{this.state.data.bugs}</div>
                        </div>                  
                        <div className="col center border-right">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock-fill" viewBox="0 0 16 16">
                            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
                        </svg>
                            <span> Vulnérabilités</span>
                            <div className="center">{this.state.data.vulnerabilities}</div>
                        </div>
                        <div className="col center border-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-wrench" viewBox="0 0 16 16">
                                <path d="M.102 2.223A3.004 3.004 0 0 0 3.78 5.897l6.341 6.252A3.003 3.003 0 0 0 13 16a3 3 0 1 0-.851-5.878L5.897 3.781A3.004 3.004 0 0 0 2.223.1l2.141 2.142L4 4l-1.757.364L.102 2.223zm13.37 9.019.528.026.287.445.445.287.026.529L15 13l-.242.471-.026.529-.445.287-.287.445-.529.026L13 15l-.471-.242-.529-.026-.287-.445-.445-.287-.026-.529L11 13l.242-.471.026-.529.445-.287.287-.445.529-.026L13 11l.471.242z"/>
                            </svg>
                            <span> Code smells</span>
                            <div className="center">{this.state.data.code_smells}</div>
                        </div>
                        <div className="col center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-exclamation" viewBox="0 0 16 16">
                                <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.553.553 0 0 1-1.1 0L7.1 4.995z"/>
                            </svg>
                            <span> Duplications</span>
                            <div className="center">{this.state.data.duplications}</div>
                        </div>  
                        
                    </div>
                        <a className="card-link" href={`http://${properties.sonar_url}/dashboard?id=project${this.props.project.projectId}`}>
                            <p>Details..</p>
                    </a>

                </div>
            </div>

        )
    }
}

export default SonarqubeAnalyze
