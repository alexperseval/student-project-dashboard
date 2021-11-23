import React, { Component } from 'react'
import { Line } from 'react-chartjs-2';

export class CommitFrequency extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let days = Object.keys(this.props.data.nbCommitsOverLastWeek);
        days = days.sort();
        const nbCommits = Object.values(this.props.data.nbCommitsOverLastWeek);
        const nbDays = days.length;
        const data = {
            labels: days,
            datasets: [{
                label: "Fréquence des commits au cours des " + nbDays + " derniers jours",
                backgroundColor: 'rgb(255, 99, 132)',
                fill: false,
                data: nbCommits,
                borderColor: 'rgba(255, 99, 132, 0.2)',
            }]
        };
        const options = {
            scales: {
                yAxes: [{
                    min: 2,
                    max: 10,
                    ticks: {
                        stepSize: 1,
                        beginAtZero: true,
                    },
                }],
            },
        };
        return (
            <div className="container collapse show" id="collapseCommitFreq">
                <Line
                    data={data}
                    options={options}
                    height={300}
                    width={300}
                />
            </div>
        )
    }
}

export default CommitFrequency
