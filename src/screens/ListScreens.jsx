import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";

const ListScreens = () => {
  const friends = [
    { name: "Friend #1" },
    { name: "Friend #2" },
    { name: "Friend #3" },
    { name: "Friend #4" },
    { name: "Friend #5" },
    { name: "Friend #6" },
    { name: "Friend #7" },
    { name: "Friend #8" },
    { name: "Friend #9" },
  ];
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={friends}
      keyExtractor={(friend) => friend.name}
      renderItem={({ item }) => {
        return <Text style={styles.textStyles}>{item.name}</Text>;
      }}
    />
  );
};

export default ListScreens;

const styles = StyleSheet.create({
  textStyles: {
    marginVertical: 50,
  },
});
