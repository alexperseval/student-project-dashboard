import React, { Component } from 'react';


// This component is used to make a checkbox.
// Its is called by ProjectList.js.

class Checkbox extends Component {
  state = {
    isChecked: false,
  }

  toggleCheckboxChange = () => {
    const { handleCheckboxChange, label } = this.props;

    this.setState(({ isChecked }) => (
      {
        isChecked: !isChecked,
      }
    ));

    handleCheckboxChange(label);
  }

  render() {
    const { label } = this.props;
    const { isChecked } = this.state;

    return (
      <div className="checkbox">
        <label>
          <input
              type="checkbox"
              value={label}
              checked={isChecked}
              onChange={this.toggleCheckboxChange}
          />

          {label}
        </label>
      </div>
    );
  }
}

export default Checkbox;