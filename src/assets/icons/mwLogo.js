import React from "react";
import Svg, {
  Circle,
  Ellipse,
  G,
  LinearGradient,
  RadialGradient,
  Line,
  Path,
  Polygon,
  Polyline,
  Rect,
  Symbol,
  Text,
  Use,
  Defs,
  Stop
} from "react-native-svg";

export default (MWLogo = props => {
  return (
    <Svg width="47" height="50">
      <G fill="#FFF" fillRule="evenodd">
        <Path d="M11.139 12.739l2.73 11.707 3.7-11.707h4.64l2.825 12.119 3.077-12.119h4.64l2.88 11.118L39.757 6.94C35.553 2.665 29.64 0 23.087 0 10.336 0 0 10.074 0 22.502c0 2.476.417 4.856 1.175 7.083L6.498 12.74h4.64z" />
        <Path d="M38.022 33.081h-4.64L30.305 21.2 27.163 33.08H21.47l-2.177-11.347-3.412 11.347h-4.742l-2.36-11.389-3.87 14.67C9.135 41.617 15.703 45 23.087 45c12.751 0 23.09-10.074 23.09-22.5 0-3.514-.83-6.84-2.304-9.804L38.022 33.08z" />
      </G>
    </Svg>
  );
});
