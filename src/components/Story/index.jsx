import React from "react";
import { FlatList, View, StyleSheet } from "react-native";

import Story from "./Story";

const posts = [1, 2, 3, 4, 5];

const Stories = () => {
  return (
    <View>
      <FlatList
        style={styles.container}
        showsHorizontalScrollIndicator={false}
        data={posts}
        horizontal={true}
        renderItem={({ item, index }) => <Story index={index} />}
        keyExtractor={(item) => `${item}key`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
  },
});

export default Stories;
