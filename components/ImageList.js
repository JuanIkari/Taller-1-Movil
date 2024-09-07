import React from "react";
import { Image, FlatList } from "react-native";

const ImageList = ({ images }) => {
  return (
    <FlatList
      data={images}
      renderItem={({ item }) => (
        <Image
          source={{ uri: item }}
          style={{ width: 100, height: 100, margin: 10 }}
        />
      )}
    />
  );
};

export default ImageList;
