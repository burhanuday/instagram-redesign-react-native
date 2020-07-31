import React from "react";
import { StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";

import Comment from "./Comment";

const Comments = ({ comments }) => {
  return (
    <Card style={styles.card} elevation={5}>
      <Text style={styles.title}>Comments:</Text>
      {comments.map((comment) => (
        <Comment key={comment.username} comment={comment} />
      ))}
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginBottom: 60,
  },
  title: {
    fontFamily: "Inter_500Medium",
  },
});

export default Comments;
