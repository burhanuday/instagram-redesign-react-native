import React from "react";
import { StyleSheet, Image, View } from "react-native";

const PostImage = () => {
  return (
    <View style={styles.postImageContainer}>
      <Image
        style={styles.postImage}
        source={{
          uri:
            "https://images.unsplash.com/photo-1531195885961-a9b8963b5551?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80",
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  postImage: {
    height: 300,
    borderRadius: 12,
  },
  postImageContainer: {
    marginTop: 20,
  },
});

export default PostImage;
