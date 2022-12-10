import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

const ColorsScreen = () => {
  const [colors, setColors] = useState([]);
  const addColors = () => {
    setColors([randomRgb(), ...colors]);
  };
  return (
    <View>
      <Button onPress={addColors} title="Add a Color" />
      <FlatList
        data={colors}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View style={{ height: 100, width: 100, backgroundColor: item }} />
        )}
      />
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
};

export default ColorsScreen;

const styles = StyleSheet.create({});
