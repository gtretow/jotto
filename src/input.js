import React, { Component } from "react";
import { connect } from "react-redux";

//utilizando class e functions para renderizar o JSX pois preciso praticar ambos
class Input extends Component {
  render() {
    return (<div><button/></div>)
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(Input);
