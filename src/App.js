import React, { Component } from "react";
import "./App.css";
import Table from "./components/Table";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedColor: "default",
      numberOfRows: 8,
      numberOfColumns: 4,
    };
  }

  // Function to select color to be applied to table cells
  handleSelectColor = (e) => {
    this.setState({
      selectedColor: e.target.value,
    });
  };

  // Function to apply color to the cell that is clicked
  handleCellClick = (e) => {
    console.log("Cell clicked");
    console.log(e.target);
  };

  // Function to handle the button clicks to control the grid
  handleButtonClick = (e) => {
    let action = e.target.value;

    if (action === "add-row") {
      this.setState((state) => ({
        numberOfRows: state.numberOfRows + 1,
      }));
    } else if (action === "remove-row" && this.state.numberOfRows !== 1) {
      this.setState((state) => ({
        numberOfRows: state.numberOfRows - 1,
      }));
    }

    if (action === "add-column") {
      this.setState((state) => ({
        numberOfColumns: state.numberOfColumns + 1,
      }));
    } else if (action === "remove-column" && this.state.numberOfColumns !== 1) {
      this.setState((state) => ({
        numberOfColumns: state.numberOfColumns - 1,
      }));
    }
  };

  render() {
    return (
      <div className="container">
        <h1 className="mt-4 mb-4">React DOM Challenge</h1>
        {/* Buttons */}
        <div className="form-inline">
          {/* Add Row */}
          <button
            className="btn btn-primary mr-3 mb-4"
            value="add-row"
            onClick={this.handleButtonClick}
          >
            Add Row
          </button>
          {/* Add Column */}
          <button
            className="btn btn-primary mr-3 mb-4"
            value="add-column"
            onClick={this.handleButtonClick}
          >
            Add Column
          </button>
          {/* Remove Row */}
          <button
            className="btn btn-primary mr-3 mb-4"
            value="remove-row"
            onClick={this.handleButtonClick}
          >
            Remove Row
          </button>
          {/* Remove Column */}
          <button
            className="btn btn-primary mr-3 mb-4"
            value="remove-column"
            onClick={this.handleButtonClick}
          >
            Remove Column
          </button>

          {/* Color Select */}
          <select
            className="custom-select mb-4"
            value={this.state.selectedColor}
            onChange={this.handleSelectColor}
          >
            <option value="white">Choose color</option>
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </select>
        </div>

        {/* Table */}
        <Table
          handleCellClick={this.handleCellClick}
          numberOfRows={this.state.numberOfRows}
          numberOfColumns={this.state.numberOfColumns}
          color={this.state.selectedColor}
        />
      </div>
    );
  }
}

export default App;
