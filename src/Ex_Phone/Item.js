import React, { Component } from "react";

export default class Item extends Component {
  render() {
    let { hinhAnh, tenSP } = this.props.phoneData;
    return (
      <div className="col-4">
        <div className="card text-left">
          <img src={hinhAnh} alt />
          <div className="card-body">
            <h4 className="card-title">{tenSP}</h4>
            <p className="card-text">Body</p>
            <button
              onClick={() => {
                this.props.handleViewDatail(this.props.phoneData);
              }}
              className="btn btn-warning"
            >
              View Detail
            </button>
          </div>
        </div>
      </div>
    );
  }
}
