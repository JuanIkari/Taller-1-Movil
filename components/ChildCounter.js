import React from "react";
import { View, Text, Button } from "react-native";

const ChildCounter = ({ count, incrementCount }) => {
  return (
    <View>
      <Text>Contador: {count}</Text>
      <Button title="Incrementar" onPress={incrementCount} />
    </View>
  );
};

export default ChildCounter;
