import React from "react";
import { StyleSheet, Image, View } from "react-native";
import { useTheme, Text } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Header = () => {
  const { colors } = useTheme();

  return (
    <View style={[styles.row, styles.spaceBetween]}>
      <View style={[styles.row]}>
        <Image
          style={styles.avatar}
          source={{
            uri:
              "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
          }}
        />
        <View style={styles.headerContent}>
          <Text style={styles.name}>Sam Martin</Text>
          <Text style={styles.time}>5 min ago</Text>
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
    height: 50,
    width: 50,
    borderRadius: 25,
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
