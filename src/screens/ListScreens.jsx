import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";

const ListScreens = () => {
  const friends = [
    { name: "Friend #1", age: 1 },
    { name: "Friend #2", age: 2 },
    { name: "Friend #3", age: 3 },
    { name: "Friend #4", age: 4 },
    { name: "Friend #5", age: 5 },
    { name: "Friend #6", age: 6 },
    { name: "Friend #7", age: 7 },
    { name: "Friend #8", age: 8 },
    { name: "Friend #9", age: 9 },
  ];
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={friends}
      keyExtractor={(friend) => friend.name}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyles}>
            {item.name} - Age: {item.age}
          </Text>
        );
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
