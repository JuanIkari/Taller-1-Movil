import React, { useState } from "react";
import { View, Text, Button } from "react-native";

const ToggleText = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <View>
      <Button
        title={visible ? "Ocultar texto" : "Mostrar texto"}
        onPress={toggleVisibility}
      />

      {visible && <Text>pancho</Text>}
    </View>
  );
};

export default ToggleText;
