import React, { Component } from 'react'

// This component is used to make a search bar.
// Its is called by ProjectList.js.

export class SearchBar extends Component {

    handleOnChange = (e) => {
        this.props.handleSearchEvents(e.target.value);
    };

    render() {
        return (
            <input type="text" id="projectSearch"
                aria-describedby="projectSearch" className="form-control"
                placeholder="Rechercher un nom de projet..."
                value={this.props.projectName}
                onChange={this.handleOnChange} />
        )
    }
}

export default SearchBar
