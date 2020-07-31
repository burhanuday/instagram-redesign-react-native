import React from "react";
import { Surface, useTheme } from "react-native-paper";
import { StyleSheet, StatusBar, ScrollView, TextInput } from "react-native";
import Card from "@components/Card";
import Comments from "@components/Card/Comments";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function PostDetail({ route }) {
  const { colors } = useTheme();
  const { post } = route.params;

  return (
    <Surface style={[styles.container, { paddingTop: StatusBar.currentHeight }]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Card post={post} openScreen={false} />
        <Comments comments={post.comments} />
      </ScrollView>
      <Surface style={[styles.commentBox]}>
        <TextInput
          style={[styles.commentInput, { color: colors.onSurface }]}
          placeholder="Type comment"
        />
        <MaterialCommunityIcons name="send" size={22} color={colors.onSurface} />
      </Surface>
    </Surface>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  commentBox: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginBottom: 3,
  },
  commentInput: {
    flex: 1,
  },
});
