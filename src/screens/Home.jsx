import React from "react";
import { StyleSheet, StatusBar, FlatList } from "react-native";
import { Surface } from "react-native-paper";
import Card from "@components/Card";

import Header from "@components/Header";

export default function Home() {
  return (
    <Surface style={[styles.container, { paddingTop: StatusBar.currentHeight }]}>
      <Header />

      <FlatList
        data={new Array(3).map((item, index) => index)}
        renderItem={({ item }) => <Card key={item} />}
        keyExtractor={(item) => item}
      />
    </Surface>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
