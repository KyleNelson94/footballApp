import React from "react";
import { LinearGradient } from "expo";

export default (LinearGrad = () => {
  return (
    <LinearGradient
      colors={["#020738", "#020738", "#0E3FAE"]}
      style={{
        alignItems: "center",
        height: "100%",
        width: "100%",
        flex: 1,
        position: "absolute"
      }}
    />
  );
});
