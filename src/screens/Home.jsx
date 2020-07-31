import React from "react";
import { StyleSheet, StatusBar, FlatList } from "react-native";
import { Surface } from "react-native-paper";

import Card from "@components/Card";
import Stories from "@components/Story";
import Header from "@components/Header";

import { posts } from "../mock/posts";

const Posts = () => (
  <FlatList
    data={posts}
    renderItem={({ item }) => <Card openScreen={true} post={item} />}
    keyExtractor={(item) => `${item.id}key`}
  />
);

export default function Home() {
  return (
    <Surface style={[styles.container, { paddingTop: StatusBar.currentHeight }]}>
      <Header />

      <Stories />

      <Posts />
    </Surface>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
