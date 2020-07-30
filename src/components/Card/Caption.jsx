import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { Text } from "react-native-paper";

const Caption = () => {
  return (
    <View style={styles.container}>
      <Text>
        <Text style={styles.username}>{"martins    "}</Text> It is a long established fact that a
        reader will be distracted by the readable content of a page when looking at its layout
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 7,
  },
  username: {
    fontWeight: "bold",
  },
});

export default Caption;
