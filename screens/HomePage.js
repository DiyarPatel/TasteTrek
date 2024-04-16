import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Home from "@/app/page"; // Assuming this is the correct path to your Home component

export default function HomePage() {
  return (
    <View style={styles.container}>
      <Text>HomePage</Text>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
