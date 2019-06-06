import React, { Component } from "react";
import Input from "./Input";
class Converter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rem: this.props.baseFontSize,
      dpi: this.props.dpi,
      px: this.props.baseFontSize,
      vw: this.props.windowWidth,
      vh: this.props.windowHeight,
    };
    console.log(this.props);
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.baseFontSize !== prevProps.baseFontSize ||
      this.props.dpi !== prevProps.dpi ||
      this.props.windowWidth !== prevProps.windowWidth ||
      this.props.windowHeight !== prevProps.windowHeight
    ) {
      this.setState({
        rem: this.props.baseFontSize,
        dpi: this.props.dpi,
        vw: this.props.windowWidth,
        vh: this.props.windowHeight,
      });
    }
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  convertToEm = () => {
    return (this.state.px / this.state.rem).toFixed(2);
  };

  render() {
    const { rem, px, vw, vh } = this.state;
    console.log(this.state);
    return (
      <div className="converter">
        <div className="units">
          <Input name="px" onChange={this.handleInputChange} /> pixels will be
        </div>
        <div className="units">
          <p className="unit">{rem} rem</p>
          <p className="unit">{parseFloat((px / rem).toFixed(3))} em</p>
          <p className="unit">{parseFloat((px / vw) * 100).toFixed(2)} vw</p>
          <p className="unit">{parseFloat(((px / vh) * 100).toFixed(2))} vh</p>
        </div>
      </div>
    );
  }
}

export default Converter;
