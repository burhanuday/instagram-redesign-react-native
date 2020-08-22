import React from "react";
import { StyleSheet, Image, View } from "react-native";
import Carousel from "react-native-snap-carousel";

const renderItem = ({ item, index }) => (
  <Image
    style={styles.postImage}
    source={{
      uri: item,
    }}
  />
);

const PostImage = ({ url }) => {
  return (
    <View style={styles.postImageContainer}>
      <Carousel data={url} renderItem={renderItem} sliderWidth={300} itemWidth={300} />
    </View>
  );
};

const styles = StyleSheet.create({
  postImage: {
    height: 300,
    borderRadius: 12,
    width: 300,
  },
  postImageContainer: {
    marginTop: 20,
    flexDirection: "row",
  },
});

export default PostImage;
