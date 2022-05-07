import React from "react";
import { FlatList, TouchableOpacity, View, Text } from "react-native";
import MenuHeader from "./MenuHeader";
import TreeListItemView from "./TreeListItemView";

export default class TreeList extends React.Component {
  constructor(props) {
    super();
    this.props = props;

    this.state = {
      searchTextInput: "",
    };
  }

  data = () => {
    return this.state.searchTextInput === ""
      ? this.props.trees
      : this.props.trees.filter(
          (tree) =>
            tree.CommonName.toUpperCase().indexOf(
              this.state.searchTextInput.toUpperCase()
            ) !== -1
        );
  };

  emptyComponent = () => {
    return (
      <View
        style={{
          marginTop: 50,
          alignItems: "center",
        }}
      >
        <Text style={{ fontWeight: "bold" }}>
          {this.props.loading ? "Loading Trees..." : "No Trees With That Name"}
        </Text>
      </View>
    );
  };

  render() {
    return (
      <FlatList
        style={{ marginTop: 10 }}
        data={this.data()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              this.props.rowPressed(item);
            }}
          >
            <TreeListItemView tree={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <MenuHeader
            onChangeText={(newText) => {
              this.setState({ searchTextInput: newText });
            }}
          />
        }
        ListEmptyComponent={this.emptyComponent}
      />
    );
  }

  //         data={
  //           this.state.searchTextInput === ""
  //             ? this.state.trees
  //             : this.state.trees.filter(
  //                 (item) =>
  //                   item.CommonName.toUpperCase().indexOf(
  //                     this.state.searchTextInput.toUpperCase()
  //                   ) !== -1
  //               )
  //         }
}
