import React from "react";
// Firestore
import { getTrees } from "../firebase/firebase-firestore";
// Views
import { View, SafeAreaView } from "react-native";
import TreeList from "./TreeList";
import MapScreen from "./MapScreen";
import { ModalView } from "./ModalView";
import { MenuFooter } from "./MenuFooter";
import TreeView from "./TreeView";

export default class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      trees: [],
      searchTextInput: "",
      loading: true,
      selectedTab: "list",
      modalShown: false,
      selectedTree: {},
    };

    getTrees()
      .then((treesList) => {
        this.setState({ trees: [...treesList], loading: false });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  treePressed = (tree) => {
    this.setState({ selectedTree: tree }, () => {
      this.setState({ modalShown: true });
    });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.state.selectedTab === "list" ? <SafeAreaView /> : null}
        {this.state.selectedTab === "list" ? (
          <TreeList
            trees={this.state.trees}
            loading={this.state.loading}
            rowPressed={(tree) => {
              this.treePressed(tree);
            }}
          />
        ) : (
          <MapScreen
            trees={this.state.trees}
            mapPinPressed={(tree) => {
              this.treePressed(tree);
            }}
          />
        )}
        <MenuFooter
          isList={this.state.selectedTab === "list"}
          listTapped={() => {
            this.setState({
              selectedTab: "list",
            });
          }}
          menuTapped={() => {
            this.setState({
              selectedTab: "map",
            });
          }}
        />

        <SafeAreaView
          style={{
            backgroundColor: "#f8f8f9",
          }}
        />

        <ModalView
          title={"Tree Info"}
          backText={"Done"}
          visible={this.state.modalShown}
          close={() => {
            this.setState({
              modalShown: false,
            });
          }}
          tree={this.state.selectedTree}
          content={<TreeView tree={this.state.selectedTree} />}
        />
      </View>
    );
  }
}
