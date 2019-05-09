import React, { Component } from "react";
import Input from "./Input";
class Converter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rem: this.props.baseFontSize,
      px: this.props.baseFontSize,
    };
    console.log(this.props);
  }

  componentDidUpdate(prevProps) {
    if (this.props.baseFontSize !== prevProps.baseFontSize) {
      this.setState({ rem: this.props.baseFontSize });
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
    const { rem, px } = this.state;
    console.log(this.props);
    console.log(this.state);
    console.log(this.convertToEm);
    console.log(window);
    return (
      <div>
        units:
        <Input name="px" onChange={this.handleInputChange} />
        <div className="units">
          <p>{rem} rem</p>
          <p>{(this.state.px / this.state.rem).toFixed(2)} em</p>
          <p>ch</p>
          <p>vw</p>
          <p>vh</p>
          <p>cm</p>
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
