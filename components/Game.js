import React, { useState } from "react";
import { View } from "react-native";
import GuessForm from "./GuessForm";

const Game = () => {
  const [correctAnswer] = useState("plátano");

  return (
    <View>
      <GuessForm correctAnswer={correctAnswer} />
    </View>
  );
};

export default Game;
