import React, { Component } from "react";
import "./App.css";
import Table from "./components/Table";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedColor: "white",
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

  render() {
    return (
      <div className="container">
        <h1 className="mt-4 mb-4">React DOM Challenge</h1>
        {/* Buttons */}
        <div className="form-inline">
          <button className="btn btn-primary mr-3 mb-4">Add Row</button>
          <button className="btn btn-primary mr-3 mb-4">Add Column</button>
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
        <Table handleCellClick={this.handleCellClick} />
      </div>
    );
  }
}

export default App;
