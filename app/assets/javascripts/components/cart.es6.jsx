class Cart extends React.Component {
  render () {
    return (
      <div>
        <div>Text: {this.props.text}</div>
      </div>
    );
  }
}

Cart.propTypes = {
  text: React.PropTypes.string
};





import React, { Component } from "react";
import ReactDOM from "react-dom";
import Pagination from "../components/Pagination";
require("bootstrap/less/bootstrap.less");
 
