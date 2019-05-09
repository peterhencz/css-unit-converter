import React, { Component } from "react";

class WindowSize extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    };
  }

  resize = () => {
    this.forceUpdate();
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    });
  };

  componentDidMount() {
    window.addEventListener("resize", this.resize);
    console.log(this.resize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resize);
    console.log(this.resize);
  }

  render() {
    const { windowWidth, windowHeight } = this.state;
    console.log(this.state);
    return (
      <div>
        your current window size is: {windowWidth} x {windowHeight}
      </div>
    );
  }
}

export default WindowSize;
