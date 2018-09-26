import React, { Component } from "react";
import { View, Text, Dimensions } from "react-native";
import LinearGrad from "../components/linearGradient";
class Teams extends Component {
  render() {
    return (
      <React.Fragment>
        <LinearGrad />
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 2,
            borderColor: "#ffffff",
            margin: 10
          }}
        >
          <View
            style={{
              position: "absolute",
              top: 0,
              borderColor: "#ffffff",
              borderWidth: 2,
              borderTopWidth: 0,
              alignSelf: "center",
              width: 150,
              height: 60
            }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center"
            }}
          >
            <Text
              style={{
                color: "#ffffff",
                marginHorizontal: 15,
                alignSelf: "center"
              }}
            >
              Kyle
            </Text>
            <Text
              style={{
                color: "#ffffff",
                marginHorizontal: 15,
                alignSelf: "center"
              }}
            >
              Kyle
            </Text>
            <Text
              style={{
                color: "#ffffff",
                marginHorizontal: 15,
                alignSelf: "center"
              }}
            >
              Kyle
            </Text>
            <Text
              style={{
                color: "#ffffff",
                marginHorizontal: 15,
                alignSelf: "center"
              }}
            >
              Kyle
            </Text>
            <Text
              style={{
                color: "#ffffff",
                marginHorizontal: 15,
                alignSelf: "center"
              }}
            >
              Kyle
            </Text>
          </View>
          <View
            style={{
              borderColor: "#ffffff",
              borderWidth: 2,
              width: 100,
              height: 50,
              borderBottomWidth: 0,
              borderTopLeftRadius: 50,
              borderTopRightRadius: 50
            }}
          />
          <View
            style={{
              alignSelf: "stretch",
              borderBottomColor: "#ffffff",
              borderBottomWidth: 2
            }}
          />
          <View
            style={{
              borderColor: "#ffffff",
              borderWidth: 2,
              borderTopWidth: 0,
              width: 100,
              height: 50,
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50
            }}
          />
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                color: "#ffffff",
                marginHorizontal: 15,
                alignSelf: "center"
              }}
            >
              Kyle
            </Text>
            <Text
              style={{
                color: "#ffffff",
                marginHorizontal: 15,
                alignSelf: "center"
              }}
            >
              Kyle
            </Text>
            <Text
              style={{
                color: "#ffffff",
                marginHorizontal: 15,
                alignSelf: "center"
              }}
            >
              Kyle
            </Text>
            <Text
              style={{
                color: "#ffffff",
                marginHorizontal: 15,
                alignSelf: "center"
              }}
            >
              Kyle
            </Text>
            <Text
              style={{
                color: "#ffffff",
                marginHorizontal: 15,
                alignSelf: "center"
              }}
            >
              Kyle
            </Text>
          </View>
          <View
            style={{
              position: "absolute",
              bottom: 0,
              borderColor: "#ffffff",
              borderWidth: 2,
              borderBottomWidth: 0,
              alignSelf: "center",
              width: 150,
              height: 60
            }}
          />
        </View>
      </React.Fragment>
    );
  }
}

export default Teams;
