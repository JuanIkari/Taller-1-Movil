import React, { useState } from "react";
import { View } from "react-native";
import ChildCounter from "./ChildCounter";

const ParentCounter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <View>
      <ChildCounter count={count} incrementCount={incrementCount} />
    </View>
  );
};

export default ParentCounter;
