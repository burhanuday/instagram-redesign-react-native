import React from "react";
import { StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Card } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import Header from "./Header";
import PostImage from "./PostImage";
import CardActions from "./CardActions";
import Caption from "./Caption";

const Post = ({ openScreen, post }) => {
  const navigation = useNavigation();
  return (
    // <TouchableWithoutFeedback
    //   onPress={() =>
    //     openScreen
    //       ? navigation.push("PostDetail", {
    //           post: post,
    //         })
    //       : null
    //   }
    // >
    <>
      <Card style={styles.card} elevation={5}>
        <Header name={post.name} avatar={post.avatar} time={post.time_posted} />
        <PostImage url={post.url} />
        <CardActions likeCount={post.likeCount} commentCount={post.commentCount} />
        <Caption caption={post.caption} username={post.username} />
      </Card>
    </>
    // </TouchableWithoutFeedback>
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
