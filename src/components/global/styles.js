import { StyleSheet, Platform, Dimensions } from "react-native";
// Containers ---------------------------------- //
export const containers = StyleSheet.create({
  mainContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#B9929F"
  },
  subContainer: {
    backgroundColor: "#E2C2C6",
    margin: 20
  },
  buttonContainer: {}
});
// Buttons ------------------------------------ //
export const buttonStyles = StyleSheet.create({
  standardButton: {
    backgroundColor: "#0052c0",
    justifyContent: "center",
    height: 40,
    borderColor: "#0052c0",
    borderWidth: 1,
    borderRadius: 50,
    marginBottom: 15
  },
  standardButtonText: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 14
  }
});
// Login Form Styles ------------------------- //
export const LoginForm = StyleSheet.create({
  formContainer: {
    alignItems: "center",
    paddingVertical: 10
  },
  formStyle: {
    height: 40,
    width: "100%",
    borderRadius: 100,
    backgroundColor: "#ffffff",
    paddingLeft: 20
  }
});
// Navigation Styles ------------------------ //
export const NavigationStyles = StyleSheet.create({
  NavigationContainer: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 10
  },
  NavgationItem: {
    marginBottom: 20
  },
  NavigationText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "700"
  },
  NavigationReturnItem: {
    alignItems: "center"
  },
  NavigationReturnText: {
    color: "#0052c0",
    fontSize: 18,
    fontWeight: "800"
  }
});
