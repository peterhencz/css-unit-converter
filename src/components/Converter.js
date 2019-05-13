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
    const { rem, dpi, px, vw, vh } = this.state;
    // console.log(this.props);
    // console.log(this.state);
    // console.log(this.convertToEm);
    // console.log(window);
    console.log(this.state);
    return (
      <div className="converter">
        <Input name="px" onChange={this.handleInputChange} /> pixels will be
        <div className="units">
          <p>{rem} rem</p>
          <p>{(px / rem).toFixed(2)} em</p>
          <p>{((px / vw) * 100).toFixed(2)} vw</p>
          <p>{((px / vh) * 100).toFixed(2)} vh</p>
          <p>cm</p>
          <p>ch</p>
          <p>vh</p>
          <p>in</p>
          <p>mm</p>
          <p>pc</p>
          <p>pt</p>
        </div>
      </div>
    );
  }
}

export default Converter;
