import React, { Component } from "react";
import { View, TextInput, KeyboardAvoidingView, ScrollView } from "react-native";
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { LoginForm } from "../global/styles";
import MWLogo from "../../assets/icons/mwLogo";

class loginForm extends Component {
  constructor() {
    super();
    this.state = [];
  }
  componentWillMount() {
    
  }  
  render() {
    return (
      <View>
        <ScrollView keyboardShouldPersistTaps={"always"}>
          <KeyboardAvoidingView 
            style={{flex: 1, paddingHorizontal: 20, justifyContent: "center"}}
            behavior={"padding"}
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
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    );
  }
}

export default loginForm;
