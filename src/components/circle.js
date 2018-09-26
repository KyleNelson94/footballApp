import React, { Component } from "react";
import { Animated } from "react-native";

class Circle extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return <Animated.View style={this.props.styleProps} />;
  }
}

export default Circle;
