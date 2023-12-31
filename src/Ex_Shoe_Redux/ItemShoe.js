import React, { Component } from "react";
import { connect } from "react-redux";

class ItemShoe extends Component {
  render() {
    let { data, handleCart } = this.props;
    return (
      <div className="col-3 card">
        <img className="w-100" src={data.image} alt="" />
        <br />

        <button className="btn btn-primary" onClick={() => handleCart(data)}>
          Add
        </button>
        <button
          onClick={() => {
            this.props.handleClickView(data);
          }}
          className="btn btn-info"
        >
          View
        </button>
      </div>
    );
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    handleClickView: (shoe) => {
      let action = {
        type: "VIEW_DETAIL",
        payload: shoe,
      };
      dispatch(action);
    },
    handleCart: (shoe) => {
      let action = {
        type: "ADD_CART",
        payload: shoe,
      };
      dispatch(action);
    },
  };
};
export default connect(null, mapDispatchToProps)(ItemShoe);
