import { StyleSheet, Text, View } from "react-native";
import React from "react";

const bookmark = () => {
  return (
    <View style={styles.container}>
      <Text>bookmark</Text>
    </View>
  );
};

export default bookmark;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
