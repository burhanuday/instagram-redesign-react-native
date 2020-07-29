import React from "react";
import { StyleSheet, StatusBar, Image, View } from "react-native";
import { Surface, useTheme, Text } from "react-native-paper";
import Card from "@components/Card";

import Header from "@components/Header";

export default function App() {
  const { colors } = useTheme();

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
