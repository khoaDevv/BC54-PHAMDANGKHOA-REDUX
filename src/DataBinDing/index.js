import React, { Component } from "react";

export default class DataBinDing extends Component {
  email = "alice@gmail.com";
  avatar =
    "https://afamilycdn.com/150157425591193600/2023/5/19/ezgifcom-webp-to-jpg6-1684485635845-16844856362182096950805.jpg";
  renderButton = () => {
    return <button className="btn btn-danger">Click me</button>;
  };
  render() {
    let username = "Alice";
    return (
      <div>
        <h2>DataBinding</h2>
        <h3>User profile</h3>
        <p>Username : {username} </p>
        <p>Gmail : {this.email}</p>
        <img src={this.avatar} alt="" />
        {this.renderButton()}
      </div>
    );
  }
}
