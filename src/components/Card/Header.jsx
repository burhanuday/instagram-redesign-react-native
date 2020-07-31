import React from "react";
import { StyleSheet, Image, View } from "react-native";
import { useTheme, Text } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Header = ({ name, avatar, time }) => {
  const { colors } = useTheme();

  return (
    <View style={[styles.row, styles.spaceBetween]}>
      <View style={[styles.row]}>
        <Image
          style={styles.avatar}
          source={{
            uri: avatar,
          }}
        />
        <View style={styles.headerContent}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
      </View>

      <View>
        <MaterialCommunityIcons name="dots-vertical" size={24} color={colors.onSurface} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    fontFamily: "Inter_500Medium",
    fontWeight: "bold",
    fontSize: 16,
  },
  time: {
    fontSize: 12,
    opacity: 0.5,
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerContent: {
    marginLeft: 10,
  },
  spaceBetween: {
    justifyContent: "space-between",
  },
});

export default Header;
