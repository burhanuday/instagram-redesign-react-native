import React from "react";
import { FlatList, View, StyleSheet } from "react-native";

import Story from "./Story";

import { stories } from "../../mock/stories";

const Stories = () => {
  return (
    <View>
      <FlatList
        style={styles.container}
        showsHorizontalScrollIndicator={false}
        data={stories}
        horizontal={true}
        renderItem={({ item, index }) => <Story story={item} index={index} />}
        keyExtractor={(item) => `${item.id}key`}
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
