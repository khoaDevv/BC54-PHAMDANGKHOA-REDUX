import React, { Component } from "react";
import ItemShoe from "./ItemShoe";
import { connect } from "react-redux";
import { shoeArr } from "./data";
class ListShoe extends Component {
  render() {
    const { handleCart } = this.props;
    return (
      <div className="row">
        {this.props.list.map((item, index) => {
          return <ItemShoe handleCart={handleCart} key={index} data={item} />;
        })}
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    list: state.shoeReducer.shoeArr,
  };
};
export default connect(mapStateToProps)(ListShoe);
