import React, { useState } from "react";
import { View } from "react-native";
import ImageList from "./ImageList";

const ImageGallery = () => {
  const [images] = useState([
    "https://static.wikia.nocookie.net/youtubepedia/images/e/e1/F7YXd7IXoAAk-Tf.png/revision/latest/scale-to-width-down/340?cb=20240222104039&path-prefix=es",
    "https://yt3.googleusercontent.com/-BkqN1Zf56h0JMIcVLC_gip1vdaWJvGcoIYDTsn1L1Belv66Ya5JT0xf7IkHVb2rWQjm3i-Zwss=s900-c-k-c0x00ffffff-no-rj",
    "https://cdn.7tv.app/emote/613937fcf7977b64f644c0d2/4x.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2EEbcc8b56EFFUId38CEk3j61cfbIDiDS5Q&s",
  ]);

  return (
    <View>
      <ImageList images={images} />
    </View>
  );
};

export default ImageGallery;
