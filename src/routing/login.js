import React, { Component } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { Actions } from "react-native-router-flux";
import { buttonStyles, LoginForm } from "../components/global/styles";
import LinearGrad from "../components/linearGradient";
import MWLogo from "../assets/icons/mwLogo";
import Particles from "../components/particles";

const AUTH_DATA = {
  data:
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InBoaWwuYnJld0BtZWRpYXdvcmtzLmNvLnVrIiwicGFzcyI6ImIxMDlmM2JiYmMyNDRlYjgyNDQxOTE3ZWQwNmQ2MThiOTAwOGRkMDliM2JlZmQxYjVlMDczOTRjNzA2YThiYjk4MGIxZDc3ODVlNTk3NmVjMDQ5YjQ2ZGY1ZjEzMjZhZjVhMmVhNmQxMDNmZDA3Yzk1Mzg1ZmZhYjBjYWNiYzg2In0.dBjhmGRBimgItbp1owAJUWZIBr_IyzqZG3m4Z-u82dU",
  user_id: "46",
  valid: "true"
};

class Login extends Component {
  constructor(props) {
    super();
    this.state = {};
    this.validateLogin = this.validateLogin.bind(this);
  }
  validateLogin() {
    const _this = this;

    //API CALL TO CHECK WHETHER DETIALS ARE VALID
    //IF VALID THEN DO BELOW
    this.props.validateLogin(AUTH_DATA, function() {
      _this.Actions.home;
    });
  }
  render() {
    return (
      <React.Fragment>
        <LinearGrad />
        <Particles />
        <View
          style={{ flex: 1, justifyContent: "center", paddingHorizontal: 30 }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              padding: 20
            }}
          >
            <MWLogo />
          </View>
          <View style={{ marginVertical: 20 }}>
            <View style={[LoginForm.formContainer]}>
              <TextInput style={[LoginForm.formStyle]} placeholder={"Email"} />
            </View>

            <View style={[LoginForm.formContainer]}>
              <TextInput
                style={[LoginForm.formStyle]}
                placeholder={"Password"}
              />
            </View>
          </View>

          <TouchableOpacity
            style={[buttonStyles.standardButton]}
            onPress={Actions.home}
          >
            <Text style={[buttonStyles.standardButtonText]}>Login</Text>
          </TouchableOpacity>
          <View
            style={{
              position: "absolute",
              left: 0,
              right: 250,
              bottom: 0,
              backgroundColor: "#0b3392",
              opacity: 0.2,
              width: 140
            }}
          />
        </View>
      </React.Fragment>
    );
  }
}

export default Login;
