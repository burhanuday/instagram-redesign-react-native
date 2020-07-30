import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

const Comment = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        burhanuday{" "}
        <Text style={styles.text}>
          We build products that empower developers and connect them to solutions that enable
          productivity, growth, and discovery.
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 3,
  },
  name: {
    fontWeight: "700",
  },
  text: {
    fontSize: 12,
  },
});

export default Comment;
