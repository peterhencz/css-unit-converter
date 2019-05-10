import React, { Component } from "react";
import WindowSize from "./components/WindowSize";
import Input from "./components/Input";
import Converter from "./components/Converter";
import githubLogo from "./assets/Octocat.jpg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      baseFontSize: "16",
      dpi: "96",
      vw: "",
      vh: "",
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.windowWidth !== prevProps.windowWidth) {
      console.log("cica");
      this.setState({ vw: this.props.windowWidth });
    }
    if (this.props.windowHeight !== prevProps.windowHeight) {
      this.setState({ vh: this.props.windowHeight });
    }
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  myCallback = (windowWidth, windowHeight) => {
    this.setState({
      vw: windowWidth,
      vh: windowHeight,
    });
  };

  render() {
    console.log(this.state);
    console.log(window.devicePixelRatio);
    const { baseFontSize, dpi, vw, vh } = this.state;
    return (
      <div className="main-container">
        css-unit-converter 🤘
        <WindowSize callbackFromParent={this.myCallback} />
        <div className="inputs">
          If your base font size is
          <Input
            name="baseFontSize"
            defaultValue={baseFontSize}
            onChange={this.handleInputChange}
          />{" "}
          pixel and your screen resolution is
          <Input
            name="dpi"
            defaultValue={dpi}
            onChange={this.handleInputChange}
          />{" "}
          dpi, your css units are:
        </div>
        <Converter
          baseFontSize={baseFontSize}
          dpi={dpi}
          windowWidth={vw}
          windowHeight={vh}
        />
        <a
          href="https://github.com/peterhencz/css-unit-converter"
          target="_blank">
          <img class="octo" src={githubLogo} />
        </a>
      </div>
    );
  }
}

export default App;
