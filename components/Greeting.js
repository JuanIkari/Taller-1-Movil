import React from "react";
import { Text } from "react-native";

const Greeting = (props) => {
  return <Text>Hola, {props.name}!</Text>;
};

export default Greeting;
