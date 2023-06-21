import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function StoreScreen() {
    return (
        <View style={styles.container}>
            <Text>Store Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#A2A2A2"
    }
})