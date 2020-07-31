import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";

const Story = ({ index, story }) => {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, index === 0 ? { marginLeft: 10 } : null]}>
      <LinearGradient
        // Button Linear Gradient
        colors={
          !story.viewed
            ? ["#F58529", "#FEDA77", "#DD2A7B", "#8134AF", "#515BD4"]
            : ["transparent", "transparent"]
        }
        style={styles.gradient}
      >
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
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  gradient: {
    height: 76,
    width: 76,
    borderRadius: 38,
    justifyContent: "center",
    alignItems: "center",
  },
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
