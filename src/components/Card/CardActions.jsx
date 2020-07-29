import React from "react";
import { StyleSheet, View } from "react-native";
import { useTheme, Text } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CardActions = () => {
  const { colors } = useTheme();

  return (
    <View style={[styles.actionsContainer, styles.spaceBetween]}>
      <View style={styles.row}>
        <View style={styles.action}>
          <MaterialCommunityIcons name="heart-outline" size={24} color={colors.onSurface} />
          <Text style={styles.actionText}>2,545</Text>
        </View>
        <View style={styles.action}>
          <MaterialCommunityIcons name="message-text-outline" size={24} color={colors.onSurface} />
          <Text style={styles.actionText}>361</Text>
        </View>
      </View>

      <View style={[styles.action, { marginRight: 0 }]}>
        <MaterialCommunityIcons name="bookmark-outline" size={24} color={colors.onSurface} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  spaceBetween: {
    justifyContent: "space-between",
  },

  actionsContainer: {
    marginTop: 15,
    flexDirection: "row",
  },
  action: {
    marginRight: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  actionText: {
    fontSize: 14,
    marginLeft: 5,
    fontFamily: "Inter_500Medium",
  },
});

export default CardActions;
