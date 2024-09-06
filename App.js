import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Alert } from "react-native";
import Greeting from "./components/Greeting";
import UserDetails from "./components/UserDetails";
import Task from "./components/Task";
import ToggleText from "./components/ToggleText";
import DynamicForm from "./components/DynamicForm";
import ClickCounter from "./components/ClickCounter";
import RegistrationForm from "./components/RegistrationForm";
import ThemeSwitcher from "./components/ThemeSwitcher";
import AlertButton from "./components/AlertButton";
import { useState } from "react";

export default function App() {
  //formulario de registro
  const [userData, setUserData] = useState(null);
  const Register = (data) => {
    setUserData(data);
  };

  //tema
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  const dynamicStyles =
    theme === "light" ? styles.lightTheme : styles.darkTheme;

  //alerta
  const showAlert = () => {
    Alert.alert("🚨 ALERTA 🚨");
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        {/* <Greeting name="pancho" /> */}
        {/* <UserDetails name="pancho" edad="25" ocupacion="programador" /> */}
        {/* <Task task={{ title: "Tarea 1", completed: true }} /> */}
        {/* <ToggleText /> */}
        {/* <DynamicForm /> */}
        {/* <ClickCounter /> */}
        {/*<RegistrationForm onRegister={Register} />
        {userData && (
          <View style={{ marginTop: 20 }}>
            <Text>Nombre: {userData.name}</Text>
            <Text>Correo electrónico: {userData.email}</Text>
            <Text>Contraseña: {userData.password}</Text>
          </View>
        )}*/}
        {/*<View style={[styles.container, dynamicStyles]}>
          <Text style={dynamicStyles.text}>Tema actual: {theme}</Text>
          <ThemeSwitcher onToggleTheme={toggleTheme} />
        </View>*/}
        <AlertButton showAlert={showAlert} />
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

  lightTheme: {
    width: "100%",
    backgroundColor: "#ffffff",
    text: {
      color: "#000000",
    },
  },

  darkTheme: {
    width: "100%",
    backgroundColor: "#333333",
    text: {
      color: "#ffffff",
    },
  },
});
