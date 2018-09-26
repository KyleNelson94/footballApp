import React, { Component } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Actions } from "react-native-router-flux";
import { NavigationStyles } from "../components/global/styles";
import LinearGrad from "../components/linearGradient";
import ProfileHeader from "../components/profileHeader";
import MWLogo from "../assets/icons/mwLogo";
import Particles from "../components/particles";
class Home extends Component {
  // state = {
  //   HeaderText: Text
  // };
  render() {
    return (
      <React.Fragment>
        <LinearGrad />
        <Particles />
        {/* <ScrollView style={{flex: 1}}> */}
        <View
          style={{
            flex: 1,
            justifyContent: "flex-start",
            paddingHorizontal: 30
          }}
        >
          <ProfileHeader />
          <View style={[NavigationStyles.NavigationContainer]}>
            <TouchableOpacity
              style={[NavigationStyles.NavgationItem]}
              onPress={Actions.profile}
            >
              <Text style={[NavigationStyles.NavigationText]}>My Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[NavigationStyles.NavgationItem]}
              onPress={Actions.opting}
            >
              <Text style={[NavigationStyles.NavigationText]}>Opt In/Out</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[NavigationStyles.NavgationItem]}
              onPress={Actions.teams}
            >
              <Text style={[NavigationStyles.NavigationText]}>Teams</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[NavigationStyles.NavgationItem]}
              onPress={Actions.home}
            >
              <Text style={[NavigationStyles.NavigationText]}>
                MW App (Coming Soon)
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 80
            }}
          >
            <MWLogo />
          </View>
          <View
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              height: 80,
              backgroundColor: "#ffffff",
              alignItems: "center",
              // paddingLeft: 30,
              justifyContent: "center"
            }}
          >
            <TouchableOpacity
              style={[NavigationStyles.NavgationReturnItem]}
              onPress={Actions.login}
            >
              <Text style={[NavigationStyles.NavigationReturnText]}>
                Log out
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* </ScrollView> */}
      </React.Fragment>
    );
  }
}
export default Home;
