import React from "react";

import { TouchableOpacity, Text } from "react-native";
import { standardButton, standardButtonText } from "./styles";

// List of all Reusable Buttons
export const standardButton = props => {
  return (
    <TouchableOpacity style={standardButton}>
      <Text>{props.standardButtonText}</Text>
    </TouchableOpacity>
  );
};
