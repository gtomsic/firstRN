import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Forest"
        imageSource={require("../../assets/images/forest.jpg")}
        score={9}
      />
      <ImageDetail
        title="Beach"
        imageSource={require("../../assets/images/beach.jpg")}
        score={7}
      />
      <ImageDetail
        title="Moutain"
        imageSource={require("../../assets/images/mountain.jpg")}
        score={10}
      />
    </View>
  );
};

export default ImageScreen;

const styles = StyleSheet.create({});
