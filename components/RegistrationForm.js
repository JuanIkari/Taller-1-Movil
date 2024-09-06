import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";

const RegistrationForm = ({ onRegister }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Nombre" value={name} onChangeText={setName} />

      <TextInput
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Button
        title="Registrarse"
        onPress={() => onRegister({ name, email, password })}
      />
    </View>
  );
};

export default RegistrationForm;
