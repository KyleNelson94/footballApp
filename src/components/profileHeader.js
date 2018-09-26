import React, { Component } from "react";
import { View, Text, Image, Dimensions } from "react-native";

class ProfileHeader extends Component {
  render() {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          marginVertical: 50
        }}
      >
        <Image
          style={{ width: 80, height: 80, borderRadius: 40 }}
          source={require("../assets/images/shutterstock_439433326.jpg")}
        />
        <View style={{ flexDirection: "column", marginHorizontal: 20 }}>
          <Text style={{ color: "#ffffff", fontSize: 18, fontWeight: "800" }}>
            Kyle Nelson
          </Text>
          <Text
            style={{
              color: "#ffffff",
              fontSize: 14,
              fontWeight: "300"
            }}
          >
            Junior Frontend Engineer
          </Text>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#fff",
              marginVertical: 10
            }}
          />
          <Text style={{ color: "#ffffff" }}>Development &amp; Design</Text>
        </View>
      </View>
    );
  }
}
export default ProfileHeader;
