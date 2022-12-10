import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  const increaseCounter = () => {
    setCounter(counter + 1);
  };
  const decreaseCounter = () => {
    if (counter === 0) return;
    setCounter(counter - 1);
  };
  return (
    <View>
      <Button title="Increase" onPress={increaseCounter} />
      <Button title="Decrease" onPress={decreaseCounter} />
      <Text>Current Counter: {counter}</Text>
    </View>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({});
