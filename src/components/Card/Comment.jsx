import React from "react";
import { StyleSheet } from "react-native";
import { Text, Surface } from "react-native-paper";

const Comment = () => {
  return (
    <Surface style={styles.container}>
      <Text style={styles.name}>
        burhanuday{" "}
        <Text style={styles.text}>
          We build products that empower developers and connect them to solutions that enable
          productivity, growth, and discovery.
        </Text>
      </Text>
    </Surface>
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
