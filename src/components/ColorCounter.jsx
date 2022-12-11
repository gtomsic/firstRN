import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const ColorCounter = ({ color, value, setValue }) => {
  const increaseValue = () => {
    if (value + 15 > 255) return;
    setValue(value + 15);
  };
  const decreaseValue = () => {
    if (value - 15 < 0) return;
    setValue(value - 15);
  };
  return (
    <View style={styles.container}>
      <Text>{color}</Text>
      <Button onPress={increaseValue} title={`Increase ${color}`} />
      <Button onPress={decreaseValue} title={`Decrease ${color}`} />
    </View>
  );
};

export default ColorCounter;

const styles = StyleSheet.create({ container: { marginHorizontal: 20 } });
