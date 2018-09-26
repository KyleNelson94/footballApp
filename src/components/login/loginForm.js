import React, { Component } from "react";
import { View, TextInput } from "react-native";
import { LoginForm } from "../global/styles";
import MWLogo from "../../assets/icons/mwLogo";

class loginForm extends Component {
  constructor() {
    super();
    this.state = [];
  }
  render() {
    return (
      <View
        style={{ flex: 1, paddingHorizontal: 20, justifyContent: "center" }}
      >
        <View style={{ alignItems: "center", padding: 20 }}>
          <MWLogo />
        </View>

        <View style={[LoginForm.formContainer]}>
          <TextInput style={[LoginForm.formStyle]} placeholder={"Email"} />
        </View>

        <View style={[LoginForm.formContainer]}>
          <TextInput style={[LoginForm.formStyle]} placeholder={"Password"} />
        </View>
      </View>
    );
  }
}

export default loginForm;
