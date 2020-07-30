import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "react-native-paper";

const Story = ({ index }) => {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, index === 0 ? { marginLeft: 10 } : null]}>
      <Image
        style={styles.avatar}
        source={{
          uri:
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
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
    marginBottom: 10,
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
