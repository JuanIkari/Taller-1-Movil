import React from "react";
import { Button, View, Alert } from "react-native";

const AlertButton = ({ showAlert }) => {
  return (
    <View>
      <Button title="Mostar Alerta" onPress={showAlert} />
    </View>
  );
};

export default AlertButton;
