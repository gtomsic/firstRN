import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import ColorCounter from "../components/ColorCounter";

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  return (
    <View>
      <ColorCounter
        color="Red"
        value={red}
        setValue={(value) => setRed(value)}
      />
      <ColorCounter
        color="Green"
        value={green}
        setValue={(value) => setGreen(value)}
      />
      <ColorCounter
        color="Blue"
        value={blue}
        setValue={(value) => setBlue(value)}
      />
      <View style={styles.colorSquare}>
        <View
          style={{
            height: 100,
            width: 100,
            backgroundColor: `rgb(${red}, ${green}, ${blue})`,
          }}
        />
      </View>
    </View>
  );
};

export default SquareScreen;

const styles = StyleSheet.create({
  colorSquare: {
    marginVertical: 20,
    alignItems: "center",
  },
});
