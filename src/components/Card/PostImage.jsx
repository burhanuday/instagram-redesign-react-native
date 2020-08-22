import React, { useState } from "react";
import { StyleSheet, View, Platform } from "react-native";
import Carousel, { ParallaxImage, Pagination } from "react-native-snap-carousel";

const renderItem = ({ item, index }, parallaxProps) => {
  return (
    <View style={styles.item}>
      <ParallaxImage
        source={{ uri: item }}
        containerStyle={styles.postImageContainer}
        style={styles.postImage}
        parallaxFactor={0.4}
        {...parallaxProps}
      />
    </View>
  );
};

const PostImage = ({ url }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <View style={styles.postImageContainer}>
      <Carousel
        data={url}
        renderItem={renderItem}
        sliderWidth={300}
        itemWidth={300}
        hasParallaxImages={true}
        onSnapToItem={(index) => setActiveSlide(index)}
      />
      <Pagination
        dotsLength={url.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.dotStyle}
        inactiveDotStyle={styles.inactiveDotStyle}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  postImage: {
    height: 300,
    borderRadius: 12,
    width: 300,
    ...StyleSheet.absoluteFillObject,
  },
  postImageContainer: {
    marginTop: 10,
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    borderRadius: 8,
  },
  item: {
    width: 300,
    height: 300,
  },
  dotStyle: {
    width: 5,
    height: 5,
    borderRadius: 3,
    marginHorizontal: 0,
    backgroundColor: "rgba(255, 255, 255, 0.92)",
  },
  inactiveDotStyle: {},
  paginationContainer: {
    margin: 0,
    padding: 0,
  },
});

export default PostImage;
