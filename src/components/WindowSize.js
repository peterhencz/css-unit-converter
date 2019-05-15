import React, { Component } from "react";

class WindowSize extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    };
  }

  componentDidMount() {
    this.props.callbackFromParent(
      this.state.windowWidth,
      this.state.windowHeight
    );
    window.addEventListener("resize", this.resizeWindow);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resizeWindow);
  }

  resizeWindow = () => {
    this.forceUpdate();
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    });
    this.props.callbackFromParent(
      this.state.windowWidth,
      this.state.windowHeight
    );
  };

  render() {
    const { windowWidth, windowHeight } = this.state;
    return (
      <div>
        <p>
          your current window size is: {windowWidth} x {windowHeight} pixels
        </p>
      </div>
    );
  }
}

export default WindowSize;
