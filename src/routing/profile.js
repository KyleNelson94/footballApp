import React, { Component } from "react";
import { Text, TouchableOpacity } from "react-native";
import LinearGrad from "../components/linearGradient";
import ProfileHeader from "../components/profileHeader";
import axios from 'axios';

class Profile extends Component {
  componentWillMount() {
    axios.get('http://www.json-generator.com/api/json/get/coCfizChXC?indent=2').then(response => this.setState({ profiles: response.data }));
  }
  renderProfiles() {
    return (this.state.profiles.map(profile => console.log(profile))); 
  }
  render() {
    return (
      <React.Fragment>
        
          <LinearGrad />
          <ProfileHeader />
          <TouchableOpacity onPress={Actions.About}>
              <Text>About methodName = (params) => {
                
              }
              </Text>
          </TouchableOpacity>
        
      </React.Fragment>
    );
  }
}
export default Profile;
