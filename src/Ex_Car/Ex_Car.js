import React, { Component } from "react";

export default class ex_car extends Component {
  state = {
    color: "red",
  };
  handleChangeColor = (color) => {
    this.setState({ color: color });
  };
  render() {
    return (
      <div>
        <img
          width={200}
          src={`./img_ex/CarBasic/products/${this.state.color}-car.jpg`}
          alt=""
        />
        <button
          onMouseOver={() => {
            this.handleChangeColor("red");
          }}
          className="btn btn-danger"
        >
          Red
        </button>
        <button
          onMouseOver={() => {
            this.handleChangeColor("black");
          }}
          className="btn btn-dark"
        >
          Blak
        </button>
        <button
          onMouseOver={() => {
            this.handleChangeColor("silver");
          }}
          className="btn btn-secondary"
        >
          Silver
        </button>
      </div>
    );
  }
}
