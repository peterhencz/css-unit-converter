import React, { Component } from "react";

class Converter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rem: this.props.baseFontSize,
    };
    console.log(this.props);
  }

  convertToEm = () => {
    this.setState({});
  };

  render() {
    const { rem } = this.state;
    console.log(this.props);
    console.log(this.state);
    return <div>units: {rem}</div>;
  }
}

export default Converter;
