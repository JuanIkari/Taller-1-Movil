import React from "react";
import { View, Button } from "react-native";

const ThemeSwitcher = ({ onToggleTheme }) => {
  return (
    <View>
      <Button title="Cambiar Tema" onPress={onToggleTheme} />
    </View>
  );
};

export default ThemeSwitcher;
