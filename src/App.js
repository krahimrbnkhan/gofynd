import React, { Component } from "react";
import DropdownSearch from "./components/DropdownSearch";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [
        { color: "Red", id: "chk1", value: 'red' },
        { color: "Blue", id: "chk2", value: 'blue' },
        { color: "Green", id: "chk3", value: 'green' },
        { color: "Black", id: "chk4", value: 'black' },
        { color: "White", id: "chk5", value: 'white' },
        { color: "Gray", id: "chk6", value: 'gray' },
        { color: "Orange", id: "chk7", value: 'orange' }
      ]
    };
  }
  render() {
    return (
      <div>
        <DropdownSearch
          colors={this.state.colors}
          mainTitle="Dropdown with search"
          subTitleOne="Colours"
          subTitleTwo="Dropdown"
        />
      </div>
    );
  }
}

export default App;
