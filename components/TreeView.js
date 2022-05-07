import React from "react";
import { View, Image, Text, ScrollView, TouchableOpacity } from "react-native";
import MapView from "react-native-maps";
import HTMLView from "react-native-htmlview";
import { ModalView } from "./ModalView";
import { Ionicons } from "@expo/vector-icons";
import ImagesScreen from "./ImagesScreen";
import HtmlView from "react-native-htmlview/HTMLView";

export default class TreeView extends React.Component {
  constructor(props) {
    super();
    this.props = props;

    this.state = {
      showAbout: true,
      showLocation: false,
      showType: false,
      showLandscape: false,
      showPests: false,
      showImages: false,
    };
  }

  Section = (props) => {
    return (
      <View>
        <TouchableOpacity onPress={props.onPress}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: 10,
            }}
          >
            <Text style={{ fontSize: 20 }}>{props.sectionName}</Text>
            <Ionicons
              name={props.currentState ? "chevron-down" : "chevron-up"}
              size={27}
              color={"#007aff"}
            />
          </View>
        </TouchableOpacity>
        {props.currentState ? (
          <HTMLView value={props.content} addLineBreaks={false} />
        ) : null}
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "#efeff0",
            marginHorizontal: 10,
          }}
        />
      </View>
    );
  };

  landscapeDescription = () => {
    var htmlString =
      "<B>Design Features:</B> " + this.props.tree.Landscape.DesignFeatures;
    htmlString +=
      "<B>Flower Color:</B> " + this.props.tree.Landscape.FlowerColor;
    htmlString += "<B>Flower Time:</B> " + this.props.tree.Landscape.FlowerTime;
    htmlString += "<B>Form:</B> " + this.props.tree.Landscape.Form;
    htmlString +=
      "<B>Hardiness Zones:</B> " + this.props.tree.Landscape.HardinessZones;
    htmlString += "<B>Leaf Color:</B> " + this.props.tree.Landscape.LeafColor;
    htmlString += "<B>Leaf Type:</B> " + this.props.tree.Landscape.LeafType;
    htmlString +=
      "<B>Light Preferences:</B> " + this.props.tree.Landscape.LightPreferences;
    htmlString += "<B>Mature Size:</B> " + this.props.tree.Landscape.MatureSize;
    htmlString += "<B>PH:</B> " + this.props.tree.Landscape.PH;
    htmlString +=
      "<B>Soil Moisture:</B> " + this.props.tree.Landscape.SoilMoisture;
    htmlString +=
      "<B>Special Features:</B> " + this.props.tree.Landscape.SpecialFeatures;
    htmlString += "<B>Texture:</B> " + this.props.tree.Landscape.Texture;
    return htmlString;
  };

  pests = () => {
    var htmlString = "";

    if (this.props.tree.Pests != null) {
      this.props.tree.Pests.forEach((pest, index, arr) => {
        htmlString += "<B>" + pest.CommonName + ":</B><br/>";
        htmlString +=
          "<I>Scientific Name:</I> " + pest.ScientificName + "<br/>";
        htmlString += "<I>Treatment:</I> " + pest.Treatment;
        htmlString += "<I>Prevention:</I> " + pest.Prevention;
        htmlString +=
          "<I>Other Info:</I> " + pest.OtherInfo + "<br/>" + "<br/>";
      });
    }

    return htmlString;
  };

  render() {
    return (
      <ScrollView style={{}}>
        <View style={{ marginBottom: 110 }}>
          <MapView
            style={{ width: "100%", height: 175, position: "relative" }}
            region={{
              latitude: Number(this.props.tree.Location.Latitude),
              longitude: Number(this.props.tree.Location.Longitude),
              latitudeDelta: 0.002,
              longitudeDelta: 0.002,
            }}
          />
          <View style={{ position: "absolute", alignSelf: "center", top: 75 }}>
            <TouchableOpacity
              onPress={() => {
                this.setState({ showImages: true });
              }}
            >
              <Image
                style={{
                  width: 200,
                  height: 200,
                  borderRadius: 100,
                  borderColor: "white",
                  borderWidth: 3,
                  shadowRadius: 100,
                  shadowColor: "black",
                }}
                source={{
                  uri:
                    this.props.tree.Images[0]?.ImageType !== 69
                      ? "https://treetour.byu.edu/" +
                        this.props.tree.Images[0]?.ThumbnailURL
                      : this.props.tree.Images[0]?.ThumbnailURL ??
                        "https://engineering.fb.com/wp-content/uploads/2016/04/yearinreview.jpg",
                }}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ paddingLeft: 15 }}>
          {/* <Text
          style={{
            fontWeight: "bold",
            fontSize: 24,
            paddingLeft: 15,
          }}
        >
          {this.props.tree.CommonName}
        </Text> */}
          {/* <Text style={{ paddingLeft: 15, color: "grey" }}>
          {this.props.tree.ScientificName} ({this.props.tree.Family})
        </Text> */}
          <HTMLView
            value={"<h3>" + this.props.tree.CommonName + "</h3>"}
            addLineBreaks={false}
          />
          <HTMLView
            value={
              this.props.tree.ScientificName +
              " (" +
              this.props.tree.Family +
              ")"
            }
            addLineBreaks={false}
          />
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "#efeff0",
            marginTop: 10,
            marginHorizontal: 10,
          }}
        ></View>

        <View style={{ paddingHorizontal: 10 }}>
          {/* About  */}
          <this.Section
            currentState={this.state.showAbout}
            onPress={() => {
              var currentState = this.state.showAbout;
              this.setState({ showAbout: !currentState });
            }}
            sectionName={"About " + this.props.tree.CommonName + ":"}
            content={this.props.tree.Culture}
          />
          {/* Location */}
          <this.Section
            currentState={this.state.showLocation}
            onPress={() => {
              const prev = this.state.showLocation;
              this.setState({ showLocation: !prev });
            }}
            sectionName={"Location Description:"}
            content={this.props.tree.LocationDescription}
          />
          {/* Type */}
          <this.Section
            currentState={this.state.showType}
            onPress={() => {
              const prev = this.state.showType;
              this.setState({ showType: !prev });
            }}
            sectionName={"Type Description:"}
            content={this.props.tree.TypeDescription}
          />
          {/* Landscape */}
          <this.Section
            currentState={this.state.showLandscape}
            onPress={() => {
              const prev = this.state.showLandscape;
              this.setState({ showLandscape: !prev });
            }}
            sectionName={"Landscape Description:"}
            content={this.landscapeDescription()}
          />
          {/* Pests */}
          {this.props.tree.Pests != null ? (
            <this.Section
              currentState={this.state.showPests}
              onPress={() => {
                const prev = this.state.showPests;
                this.setState({ showPests: !prev });
              }}
              sectionName={"Pests:"}
              content={this.pests()}
            />
          ) : null}

          {/* Images */}
          <TouchableOpacity
            onPress={() => {
              this.setState({ showImages: true });
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingVertical: 10,
              }}
            >
              <Text style={{ fontSize: 20 }}>Images:</Text>
              <Ionicons name={"chevron-forward"} size={27} color={"#007aff"} />
            </View>
          </TouchableOpacity>
        </View>
        <ModalView
          title={"Images"}
          backText={"Back"}
          visible={this.state.showImages}
          close={() => {
            this.setState({
              showImages: false,
            });
          }}
          content={
            <ImagesScreen
              images={this.images()}
              close={() => {
                this.setState({ showImages: false });
              }}
            />
          }
        />
      </ScrollView>
    );
  }

  images = () => {
    return this.props.tree.Images?.map((image) => {
      var url =
        image.ImageType !== 69
          ? "https://treetour.byu.edu/" + image.URL
          : image.URL ??
            "https://engineering.fb.com/wp-content/uploads/2016/04/yearinreview.jpg";

      return { uri: url };
    });
  };
}
