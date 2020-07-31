import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "react-native-paper";

const Story = ({ index, story }) => {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, index === 0 ? { marginLeft: 10 } : null]}>
      <Image
        style={styles.avatar}
        source={{
          uri: story.avatar,
        }}
      />
      {index === 0 && (
        <MaterialCommunityIcons
          name="plus-circle"
          size={24}
          color="black"
          style={styles.plusIcon}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },
  container: {
    padding: 5,
  },
  plusIcon: {
    position: "absolute",
    right: 0,
    bottom: 0,
    backgroundColor: "white",
    borderRadius: 12,
  },
});

export default Story;
