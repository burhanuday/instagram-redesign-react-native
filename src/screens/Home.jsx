import React from "react";
import { StyleSheet, StatusBar, FlatList } from "react-native";
import { Surface } from "react-native-paper";

import Card from "@components/Card";
import Story from "@components/Story";
import Header from "@components/Header";

const posts = [1, 2, 3, 4, 5];

const Posts = () => (
  <FlatList
    data={posts}
    renderItem={({ item }) => <Card openScreen={true} />}
    keyExtractor={(item) => `${item}key`}
  />
);

export default function Home() {
  return (
    <Surface style={[styles.container, { paddingTop: StatusBar.currentHeight }]}>
      <Header />

      <FlatList
        showsHorizontalScrollIndicator={false}
        data={posts}
        horizontal={true}
        renderItem={({ item, index }) => <Story index={index} />}
        keyExtractor={(item) => `${item}key`}
      />

      <Posts />
    </Surface>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
