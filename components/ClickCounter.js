import React, { useState } from "react";
import { View, Text, Button } from "react-native";

const ClickCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>llevas {count} clicks</Text>
      <Button title="click" onPress={() => setCount(count + 1)} />
    </View>
  );
};

export default ClickCounter;
