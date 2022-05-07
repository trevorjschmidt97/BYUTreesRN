import React from "react";
import { View, Text, TextInput, SafeAreaView } from "react-native";

export default MenuHeader = (props) => {
  return (
    <View>
      <View
        style={{
          height: 70,
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 35,
            marginLeft: 10,
            marginTop: 10,
            fontWeight: "bold",
          }}
        >
          BYU Trees
        </Text>
      </View>
      <View
        style={{
          height: 35,
          flexDirection: "row",
          marginHorizontal: 10,
        }}
      >
        <TextInput
          onChangeText={(newText) => {
            props.onChangeText(newText);
          }}
          style={{
            flex: 1,
            backgroundColor: "#ECECEC",
            paddingLeft: 7,
            borderRadius: 10,
          }}
          placeholder="🔍  Search"
          placeholderTextColor="grey"
        />
      </View>
    </View>
  );
};
