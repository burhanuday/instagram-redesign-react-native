import React from "react";
import { Surface, Text } from "react-native-paper";
import { StyleSheet, StatusBar, ScrollView } from "react-native";
import Card from "@components/Card";
import Comments from "@components/Card/Comments";

export default function PostDetail() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
      <Surface style={[styles.container, { paddingTop: StatusBar.currentHeight }]}>
        <Card />
        <Comments />
      </Surface>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  // scroll: {
  //   flex: 1,
  // },
  container: {
    flex: 1,
  },
});
