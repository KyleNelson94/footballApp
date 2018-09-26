import React, { Component } from "react";
import { View, Text } from "react-native";
import Card from "../components/cardSwipe";
import LinearGrad from "../components/linearGradient";
import Particles from "../components/particles";
class Opting extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <LinearGrad />
        <Particles />
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 80
          }}
        >
          <Text style={{ color: "#ffffff" }}>
            Swipe left to Opt out and swipe right to opt in.
          </Text>
        </View>
        <Card />
      </View>
    );
  }
}
export default Opting;
