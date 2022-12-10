import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  const { navigate } = navigation;
  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Button
        onPress={() => navigate("Components")}
        title="Go To Component Demo"
      />
      <Button onPress={() => navigate("List")} title="Go To List Demo" />
      <Button
        onPress={() => navigate("ImageScreen")}
        title="Go To Image Demo"
      />
      <Button onPress={() => navigate("Counter")} title="Go To Counter Demo" />
      <Button onPress={() => navigate("Colors")} title="Go To Colors Demo" />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
