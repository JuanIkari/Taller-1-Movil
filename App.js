import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Greeting from "./components/Greeting";
import UserDetails from "./components/UserDetails";
import Task from "./components/Task";
import ToggleText from "./components/ToggleText";

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        {/*<Greeting name="pancho" />*/}
        {/*<UserDetails name="pancho" edad="25" ocupacion="programador" />*/}
        {/*<Task task={{ title: "Tarea 1", completed: true }} />*/}
        {/*<ToggleText />*/}
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
