import React from "react";
import { StyleSheet, Image, View } from "react-native";

const PostImage = ({ url }) => {
  return (
    <View style={styles.postImageContainer}>
      <Image
        style={styles.postImage}
        source={{
          uri: url,
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
