import React from "react";
import { StyleSheet, StatusBar, FlatList } from "react-native";
import { Surface } from "react-native-paper";
import Card from "@components/Card";

import Header from "@components/Header";

const posts = [1, 2, 3, 4, 5];

export default function Home() {
  return (
    <Surface style={[styles.container, { paddingTop: StatusBar.currentHeight }]}>
      <Header />

      <FlatList
        data={posts}
        renderItem={({ item }) => <Card />}
        keyExtractor={(item) => `${item}key`}
      />
      {/* <Card /> */}
    </Surface>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
