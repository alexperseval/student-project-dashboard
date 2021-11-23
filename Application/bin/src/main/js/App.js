import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"
import Home from './components/Home';
import Header from './components/Header';
import ProjectList from './components/ProjectList';

// This component puts the header and do the routing of the web app.

export class App extends Component {
    render() {
        return (
            <Router>
                <Header />

                <br />

                <Switch>

                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/projectList">
                        <ProjectList />
                    </Route>

                </Switch>
            </Router>
        )
    }
}



export default App
