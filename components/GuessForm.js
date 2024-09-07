import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

const GuessForm = ({ correctAnswer }) => {
  const [guess, setGuess] = useState("");
  const [result, setResult] = useState("");

  const funcRiddle = () => {
    if (guess === correctAnswer) {
      setResult("Correcto");
    } else {
      setResult("Incorrecto, intenta de nuevo.");
    }
  };

  return (
    <View>
      <Text>Oro parece, plata no es. ¿Qué es?</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
        }}
        placeholder="responder"
        value={guess}
        onChangeText={setGuess}
      />
      <Button title="Enviar" onPress={funcRiddle} />
      {result ? <Text>{result}</Text> : null}
    </View>
  );
};

export default GuessForm;
