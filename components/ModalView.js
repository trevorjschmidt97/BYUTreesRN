import React from "react";
import { View, Modal, TouchableOpacity, Text } from "react-native";
import TreeView from "./TreeView";

export const ModalView = (props) => {
  return (
    <Modal
      visible={props.visible}
      onRequestClose={props.close}
      presentationStyle="pageSheet"
      animationType="slide"
    >
      <View style={{ flex: 1 }}>
        <View
          style={{
            height: 55,
          }}
        >
          <TouchableOpacity onPress={props.close}>
            <Text
              style={{
                color: "#007aff",
                marginLeft: 18,
                marginTop: 18,
                fontSize: 18,
              }}
            >
              {props.backText}
            </Text>
            <View
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  marginTop: 17,
                  fontWeight: "bold",
                  fontSize: 17,
                }}
              >
                {props.title}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        {props.content}
      </View>
    </Modal>
  );
};
