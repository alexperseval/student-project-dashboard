import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// This script is specified as an entry in the webpack to be used in the bundle.
// The bundle is then called by the file resources/templates/home.html.
// It is the starting point of the web app.
// It renders the App component in a div of home.html.

const bootstrapReact =
    () => ReactDOM.render(
        <App />,
        document.getElementById('app')
    );

window.addEventListener('DOMContentLoaded', bootstrapReact);