import React from "react";
import { View, Text, Image } from "react-native";
import HTMLView from "react-native-htmlview";

export default TreeListItemView = (props) => {
  return (
    <View
      style={{
        height: 100,
        borderBottomColor: "#E9E9E9",
        borderBottomWidth: 0.5,
        alignItems: "flex-start",
        justifyContent: "center",
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <Image
          style={{
            width: 80,
            height: 80,
            marginLeft: 15,
            borderRadius: 40,
            borderColor: "grey",
            borderWidth: 3,
          }}
          source={{
            uri:
              props.tree.Images[0]?.ImageType !== 69
                ? "https://treetour.byu.edu/" +
                  props.tree.Images[0]?.ThumbnailURL
                : props.tree.Images[0]?.ThumbnailURL ??
                  "https://engineering.fb.com/wp-content/uploads/2016/04/yearinreview.jpg",
          }}
        />
        <View
          style={{
            marginLeft: 15,
            justifyContent: "center",
          }}
        >
          <HTMLView
            value={"<h4>" + props.tree.CommonName + "</h4>"}
            addLineBreaks={false}
          />
          <HTMLView
            value={
              "<h6>" +
              props.tree.ScientificName +
              " (" +
              props.tree.Family +
              ")</h6>"
            }
            addLineBreaks={false}
          />
          {/* <Text style={{ fontSize: 12, color: "grey" }}>
          
            {props.tree.ScientificName + " (" + props.tree.Family + ")"}
          </Text> */}
        </View>
      </View>
    </View>
  );
};
