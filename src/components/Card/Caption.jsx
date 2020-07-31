import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { Text } from "react-native-paper";

const Caption = ({ caption, username }) => {
  return (
    <View style={styles.container}>
      <Text>
        <Text style={styles.username}>{username} </Text>
        {caption}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 7,
  },
  username: {
    fontWeight: "bold",
  },
});

export default Caption;
