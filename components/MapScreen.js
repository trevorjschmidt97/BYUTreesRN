import React from "react";
import MapView from "react-native-maps";
import TreeMapMarkerView from "./TreeMapMarkerView";

export default MapScreen = (props) => {
  return (
    <MapView
      style={{ flex: 1 }}
      region={{
        latitude: 40.248893,
        longitude: -111.6494446,
        latitudeDelta: 0.002972,
        longitudeDelta: 0.002457,
      }}
    >
      {props.trees.map((tree) => (
        <TreeMapMarkerView
          key={tree.id}
          tree={tree}
          treePressed={() => {
            props.mapPinPressed(tree);
          }}
        />
      ))}
    </MapView>
  );
};
