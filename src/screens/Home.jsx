import React from "react";
import { StyleSheet, StatusBar } from "react-native";
import { Surface } from "react-native-paper";
import Card from "@components/Card";

import Header from "@components/Header";

export default function App() {
  return (
    <Surface style={[styles.container, { paddingTop: StatusBar.currentHeight }]}>
      <Header />
      <Card />
    </Surface>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
