import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <Text>pero tio</Text>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  safeArea: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
