import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

const DynamicForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [storedValue, setStoredValue] = useState("");

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
        }}
        placeholder="Ingresa texto"
        value={inputValue}
        onChangeText={(text) => setInputValue(text)}
      />

      <Button
        title="Guardar texto"
        onPress={() => setStoredValue(inputValue)}
      />

      {storedValue ? (
        <Text style={{ marginTop: 20 }}>{storedValue}</Text>
      ) : null}
    </View>
  );
};

export default DynamicForm;
