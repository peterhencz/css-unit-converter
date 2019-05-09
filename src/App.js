import React, { Component } from "react";
import WindowSize from "./components/WindowSize";
import Input from "./components/Input";
import Converter from "./components/Converter";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      baseFontSize: "16",
    };
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    console.log(this.state);
    const { baseFontSize } = this.state;
    return (
      <div className="App">
        css-unit-converter
        <WindowSize />
        Your base font-size in px:{" "}
        <Input
          name="baseFontSize"
          defaultValue={baseFontSize}
          onChange={this.handleInputChange}
        />
        <Converter baseFontSize={baseFontSize} />
      </div>
    );
  }
}

export default App;
