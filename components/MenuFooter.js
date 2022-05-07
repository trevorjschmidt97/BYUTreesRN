import React from "react";
import { View, TouchableOpacity } from "react-native";
import TabItem from "./TabItem";

export const MenuFooter = (props) => {
  return (
    <View
      style={{
        height: 55,
        flexDirection: "row",
        borderTopWidth: 0.5,
        borderTopColor: "#E9E9E9",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f8f8f9",
      }}
    >
      <TouchableOpacity style={{ flex: 1 }} onPress={props.listTapped}>
        <TabItem title="List" imgName="list" isSelected={props.isList} />
      </TouchableOpacity>

      <TouchableOpacity style={{ flex: 1 }} onPress={props.menuTapped}>
        <TabItem title="Map" imgName="map" isSelected={!props.isList} />
      </TouchableOpacity>
    </View>
  );
};
