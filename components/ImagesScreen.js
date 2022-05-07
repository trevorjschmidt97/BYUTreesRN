import React from "react";
import { View } from "react-native";
import ImageSwiper from "@freakycoder/react-native-image-swiper";

export default ImagesScreen = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <ImageSwiper images={props.images} />
    </View>
  );
};
