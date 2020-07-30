import React from "react";
import { StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import Header from "./Header";
import PostImage from "./PostImage";
import CardActions from "./CardActions";
import Caption from "./Caption";

const Post = () => {
  const navigation = useNavigation();

  return (
    <Card onPress={() => navigation.push("PostDetail")} style={styles.card} elevation={20}>
      <Header />
      <PostImage />
      <CardActions />
      <Caption />
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginVertical: 10,
  },
});

export default Post;
