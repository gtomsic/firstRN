import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const ImageDetail = ({ title, imageSource, score }) => {
  return (
    <View style={styles.container}>
      <Image source={imageSource} />
      <View style={styles.textView}>
        <Text>{title}</Text>
        <Text>Score of: {score}</Text>
      </View>
    </View>
  );
};

export default ImageDetail;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 3,
  },
  textView: {
    marginLeft: 10,
  },
});
