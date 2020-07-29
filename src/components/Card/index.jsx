import React from "react";
import { StyleSheet } from "react-native";
import { Card } from "react-native-paper";

import Header from "./Header";
import PostImage from "./PostImage";
import CardActions from "./CardActions";

const Post = () => {
  return (
    <Card style={styles.card} elevation={20}>
      <Header />
      <PostImage />
      <CardActions />
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
});

export default Post;
