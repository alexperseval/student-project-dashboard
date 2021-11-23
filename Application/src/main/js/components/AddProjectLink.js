import React, { Component } from 'react'

// This component is called by ProjectList.js to add a button above the project list.
// The button is linking to the /addProject page, currently made with thymeleaf and 
// routed by spring.

export class AddProjectLink extends Component {
    render() {
        return (
            <a href="/addProject">
                <button type="button" className="btn btn-outline-primary">
                    Ajouter un projet
                </button>
            </a>
        )
    }
}

export default AddProjectLink
