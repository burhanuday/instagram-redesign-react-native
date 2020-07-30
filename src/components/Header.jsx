import React from "react";
import { View, StyleSheet } from "react-native";
import { useTheme, Surface } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Header = () => {
  const { colors } = useTheme();

  return (
    <Surface style={styles.container}>
      <MaterialCommunityIcons name="instagram" size={32} color={colors.onSurface} />
      <View style={styles.actions}>
        <MaterialCommunityIcons
          style={styles.action}
          name="youtube-tv"
          size={30}
          color={colors.onSurface}
        />
        <MaterialCommunityIcons
          style={styles.action}
          name="send"
          size={30}
          color={colors.onSurface}
        />
      </View>
    </Surface>
  );
};

const styles = StyleSheet.create({
  container: {
    // height: 30,
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    marginLeft: 10,
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
  },
  action: {
    marginLeft: 15,
  },
});

export default Header;
