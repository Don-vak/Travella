import { StyleSheet, Text, View } from "react-native";
import React from "react";

const category = () => {
  return (
    <View style={styles.container}>
      <Text>category</Text>
    </View>
  );
};

export default category;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
