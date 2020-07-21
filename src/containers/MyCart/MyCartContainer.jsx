import React, { Component } from "react";
import { connect } from "react-redux";
import MyCart from "../../components/MyCart/MyCart";

function mapStateToProps(state) {
  return {
    totalItems:
      Object.keys(state.MyCart).length > 0
        ? Object.entries(state.MyCart).reduce(
            (acc, currentItem) => currentItem[1].count + acc,0)
        : 0
  };
}

class MyCartContainer extends Component {
  render() {
    return <MyCart count={this.props.totalItems} />;
  }
}

export default connect(mapStateToProps)(MyCartContainer);
