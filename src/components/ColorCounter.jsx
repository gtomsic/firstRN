import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const ColorCounter = ({ color, value, setValue }) => {
  const increaseValue = () => {
    if (value + 10 > 255) return;
    setValue(value + 10);
  };
  const decreaseValue = () => {
    if (value - 10 < 0) return;
    setValue(value + 10);
  };
  return (
    <View>
      <Text>{color}</Text>
      <Button onPress={increaseValue} title={`Increase ${color}`} />
      <Button onPress={decreaseValue} title={`Decrease ${color}`} />
    </View>
  );
};

export default ColorCounter;

const styles = StyleSheet.create({});
