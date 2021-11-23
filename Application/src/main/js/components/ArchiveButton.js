import React, { Component } from 'react'
import { properties } from '../Properties';

// This component archive the project 
// in the project list table.
// It is called by TableRow.js.

export class ArchiveButton extends Component {
    
    render() {
        const id = this.props.id;
        function archiveFunction(e) {
            fetch(`http://${properties.web_server_url}/api/v1/archive/${id}`)
            .then(response => response.json())
            .then()
            .catch(error => this.setState({ error, isLoading: false }));

            location.reload();
        }

        function unarchiveFunction(e) {
            fetch(`http://${properties.web_server_url}/api/v1/unarchive/${id}`)
            .then(response => response.json())
            .then()
            .catch(error => this.setState({ error, isLoading: false }));

            location.reload();
        }

        if(this.props.archived == -1) {
            return (
                <a href="#" className="text-danger" onClick={archiveFunction}>
                    <abbr title="Archiver le projet">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
                        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
                        </svg>
                    </abbr>
                </a> 
            )
        } 

        if(this.props.archived == 1) {
            return (
                <a href="#" className="text-success" onClick={unarchiveFunction}>
                    <abbr title="Retirer des archives">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-x-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zM6.854 5.146a.5.5 0 1 0-.708.708L7.293 7 6.146 8.146a.5.5 0 1 0 .708.708L8 7.707l1.146 1.147a.5.5 0 1 0 .708-.708L8.707 7l1.147-1.146a.5.5 0 0 0-.708-.708L8 6.293 6.854 5.146z"/>
                        </svg>
                        &nbsp;Archivé
                    </abbr>
                </a> 
            )
        }

        return(
            <div></div>
        )
    }
}

export default ArchiveButton
