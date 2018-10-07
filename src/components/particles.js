import React, { Component } from "react";
import { View, Dimensions, Animated } from "react-native";
import Circle from "./circle";

class Particles extends Component {
  constructor(props) {
    super();
    this.state = {
      cirlces: 6,
      speed: 0.2,
      size: 100
    };
    this.particles = [];
  }

  componentDidMount() {
    const { height, width } = Dimensions.get("window");
    const _this = this;
    this.setState(
      {
        maxX: width,
        maxY: height
      },
      () => {
        _this.setUp();
      }
    );
  }

  randomInt(min, max) {
    return Math.random() * (max - min) + min;
  }

  particleColor() {
    return "rgba(0, 91, 210, " + (Math.random() * 3) / 10 + ")";
  }

  setUp() {
    const _this = this;
    for (var i = 0; i < _this.state.cirlces; i++) {
      let moveX = true,
        moveY = true,
        movePos = true;
      if (Math.round(_this.randomInt(0, 1)) == 0) moveX = false;
      if (Math.round(_this.randomInt(0, 1)) == 0) moveY = false;
      let partX = _this.randomInt(0, _this.state.maxX),
        partY = _this.randomInt(0, _this.state.maxY),
        partSpeed = _this.randomInt(0, _this.state.speed),
        partSize = _this.randomInt(50, _this.state.size);
      _this.particles[i] = {
        x: partX,
        y: partY,
        speed: partSpeed,
        size: partSize,
        moveX: moveX,
        moveY: moveY,
        color: _this.particleColor(),
        movePos: this.randomInt(_this.state.maxX, _this.state.maxY)
      };
    }
    this.renderCircles();
  }

  renderCircles() {
    const circles = this.particles.map((item, index) => {
      const X = new Animated.Value(item.x);
      const Y = new Animated.Value(item.y);
      const style = {
        backgroundColor: item.color,
        borderRadius: item.size / 2,
        height: item.size,
        width: item.size,
        transform: [{ translateX: X }, { translateY: Y }]
      };
      return <Circle styleProps={style} x={X} y={Y} key={index} />;
    });
    this.setState({
      renderedCircles: circles
    });
  }

  render() {
    const { height, width } = Dimensions.get("window");
    return (
      <View
        style={{
          position: "absolute",
          height: height,
          width: width,
          flex: 1,
          zIndex: 0
        }}
      >
        {this.state.renderedCircles}
      </View>
    );
  }
}

export default Particles;
