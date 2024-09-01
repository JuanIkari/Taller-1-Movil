import React from "react";
import { Text } from "react-native";

const UserDetails = (props) => {
  return (
    <Text>
      Nombre: {props.name} {"\n"}
      Edad: {props.edad} {"\n"}
      Ocupación: {props.ocupacion}
    </Text>
  );
};

export default UserDetails;
