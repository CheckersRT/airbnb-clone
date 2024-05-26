import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { categories } from "@/lib/categories";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

const ExploreHeader = () => {
  return (
    <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.actionRow}>
            <Link href={"/(modals)/booking"}>Booking
            </Link>
            <TouchableOpacity>
                <Text>Filter</Text>
            </TouchableOpacity>
          </View>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ff00ff",
    height: 130,
  },
  actionRow: {
    flexDirection: "row",
  }
});

export default ExploreHeader;
