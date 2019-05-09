import React, { Component } from "react";

class WindowSize extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    };
  }

  resizeWindow = () => {
    this.forceUpdate();
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    });
  };

  componentDidMount() {
    window.addEventListener("resize", this.resizeWindow);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resizeWindow);
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
