import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

const Comment = ({ comment }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        {comment.username} <Text style={styles.text}>{comment.comment}</Text>
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
