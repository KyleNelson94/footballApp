import React, { Component } from "react";
import { View, Text } from "react-native";
// import Header from "../components/global/header";
import LinearGrad from "../components/linearGradient";
import ProfileHeader from "../components/profileHeader";

class Profile extends Component {
  render() {
    return (
      <React.Fragment>
        <LinearGrad />
        <ProfileHeader />
      </React.Fragment>
    );
  }
}
export default Profile;
