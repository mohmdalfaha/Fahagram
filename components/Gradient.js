import React, { Component } from 'react';
import { View } from 'react-native';

const Gradient = props => {
  const { startColor, endColor, steps, stepHeight, stepWidth } = props;

  let colors = interpolateColors(startColor, endColor, steps);

  return colors.map((point, index) => {
    let color = `rgb(${point[0]}, ${point[1]}, ${point[2]})`;
    return (
      <View
        key={index}
        style={{
          backgroundColor: color,
          height: stepHeight,
          width: stepWidth,
        }}
      />
    );
  });
};

export default Gradient;







// SHAMELESS COPY-PASTA from https://graphicdesign.stackexchange.com/a/83867
function interpolateColor(color1, color2, factor) {
  if (arguments.length < 3) {
    factor = 0.5;
  }
  var result = color1.slice();
  for (var i = 0; i < 3; i++) {
    result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
  }
  return result;
}

function interpolateColors(color1, color2, steps) {
  var stepFactor = 1 / (steps - 1), interpolatedColorArray = [];

  color1 = color1.match(/\d+/g).map(Number);
  color2 = color2.match(/\d+/g).map(Number);

  for (var i = 0; i < steps; i++) {
    interpolatedColorArray.push(
      interpolateColor(color1, color2, stepFactor * i)
    );
  }

  return interpolatedColorArray;
}
