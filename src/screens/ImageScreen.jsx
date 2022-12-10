import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail />
      <ImageDetail />
      <ImageDetail />
    </View>
  );
};

export default ImageScreen;

const styles = StyleSheet.create({});
