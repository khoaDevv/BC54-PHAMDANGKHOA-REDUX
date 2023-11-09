import React, { Component } from "react";

export default class DemoState extends Component {
  state = {
    soLuong: 1,
  };
  handleTang = () => {
    this.setState({ soLuong: this.state.soLuong + 1 });
  };
  handleGiam = () => {
    if (this.state.soLuong > 0) {
      this.setState({ soLuong: this.state.soLuong - 1 });
    }
  };
  render() {
    return (
      <div>
        <h2>DemoState</h2>
        <button onClick={this.handleGiam} className="btn btn-danger">
          -
        </button>
        <strong className="mx-5"> {this.state.soLuong}</strong>
        <button onClick={this.handleTang} className="btn btn-success">
          +
        </button>
      </div>
    );
  }
}
