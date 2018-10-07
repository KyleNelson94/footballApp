import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import SwipeCards from "react-native-swipe-cards";
import MWLogo from "../assets/icons/mwLogo";
class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View
        style={[styles.card, { backgroundColor: this.props.backgroundColor }]}
      >
        <Text style={{ color: "#ffffff", fontSize: 20, fontWeight: "700" }}>
          {this.props.text}
        </Text>
      </View>
    );
  }
}

class NoMoreCards extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View
        style={{ flex: 1, justifyContent: "center", paddingHorizontal: 30 }}
      >
        <Text style={styles.noMoreCardsText}>
          Thank you for letting us know, we will set up teams on match day
        </Text>
        <View
          style={{
            justifyContent: "flex-end",
            alignItems: "center",
            marginVertical: 50
          }}
        >
          <MWLogo />
        </View>
      </View>
    );
  }
}

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [{ text: "Out | In", backgroundColor: "#0052c0" }],
      outOfCards: true
    };
  }

  handleYup(card) {
    console.log("Yes");
  }
  handleNope(card) {
    console.log("No");
  }
  render() {
    // If you want a stack of cards instead of one-per-one view, activate stack mode
    // stack={true}
    return (
      <SwipeCards
        cards={this.state.cards}
        renderCard={cardData => <Card {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}
        handleYup={this.handleYup}
        handleNope={this.handleNope}
      />
    );
  }
}

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    height: 300,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#ffffff"
  },
  noMoreCardsText: {
    fontSize: 22,
    color: "#ffffff"
  }
});
