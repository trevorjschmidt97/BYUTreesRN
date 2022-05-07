import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default TabItem = (props) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Ionicons
        name={props.imgName}
        size={27}
        color={props.isSelected ? "#007aff" : "#959696"}
      />
      <Text
        style={{
          fontSize: 12,
          color: props.isSelected ? "#007aff" : "#959696",
        }}
      >
        {props.title}
      </Text>
    </View>
  );
};
