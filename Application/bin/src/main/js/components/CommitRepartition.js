import React, { Component } from 'react'
import { Doughnut } from 'react-chartjs-2';

// This component contains a doughnut chart showing the commit repartition
// among the members of a git project

export class CommitRepartition extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const devs = Object.keys(this.props.data.nbCommits);
        const nbCommits = Object.values(this.props.data.nbCommits);
        const data = {
            labels: devs,
            datasets: [{
                label: "Nombre de commits (par auteur)",
                backgroundColor: ["#3e95cd", "#8e5ea2", "#e67e22", "#27ae60", "#f1c40f"],
                data: nbCommits
            }]
        };
        return (
            <div className="container collapse show" id="collapseCommitRep">
                <Doughnut
                    data={data}
                    height={300}
                    width={300}
                />
            </div>
        )
    }
}

export default CommitRepartition
