import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2';

// This component contains a grouped bar chart showing the commit relevance
// of each member of a git project

export class CommitRelevance extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const devs = Object.keys(this.props.data.averageStatsByUser);
    const stats = Object.values(this.props.data.averageStatsByUser);
    const additions = [];
    const deletions = [];
    stats.forEach(e => {
      additions.push(e[0]);
      deletions.push(e[1]);
    });

    const data = {
      labels: devs,
      datasets: [
        {
          label: 'Nombre d\'additions par commit',
          data: additions,
          backgroundColor: 'rgb(255, 99, 132)',
        },
        {
          label: 'Nombre de suppressions par commit',
          data: deletions,
          backgroundColor: 'rgb(75, 192, 192)',
        },
      ],
    };
    const options = {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    };
    return (
      <div className="container collapse show" id="collapseCommitRel">
        <Bar
          data={data}
          options={options}
          height={300}
          width={300}
        />
      </div>
    )
  }
}

export default CommitRelevance
