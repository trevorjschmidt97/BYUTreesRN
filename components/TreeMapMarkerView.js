import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { Marker } from "react-native-maps";

export default TreeMapMarkerView = (props) => {
  return (
    <Marker
      key={props.tree.id}
      coordinate={{
        latitude: Number(props.tree.Location.Latitude),
        longitude: Number(props.tree.Location.Longitude),
      }}
      tappable={true}
      onPress={props.treePressed}
    >
      <Image
        style={{
          width: 50,
          height: 50,
          borderRadius: 25,
          borderColor: "grey",
          borderWidth: 2,
        }}
        source={{
          uri:
            props.tree.Images[0]?.ImageType !== 69
              ? "https://treetour.byu.edu/" + props.tree.Images[0]?.ThumbnailURL
              : props.tree.Images[0]?.ThumbnailURL ??
                "https://engineering.fb.com/wp-content/uploads/2016/04/yearinreview.jpg",
        }}
      />
    </Marker>
  );
};
