import React, { useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import Rectangle from "../components/Rectangle";
import InputForm from "../components/InputForm";

function MainScreen() {
  // states
  const [gridHeight, setGridHeight] = useState(20);
  const [gridWidth, setGridWidth] = useState(30);
  const [gridBoxColor, setGridBoxColor] = useState("#63acf0");
  const [rectangleBg, setRectangleBg] = useState("#f6f9fa");

  // height options for grid rectangles
  const heightOptions = Array.from(
    { length: 300 },
    (_, index) => index + 1
  ).map((value) => {
    return { key: value, value: value + " px" };
  });

  // width options for grid rectangles
  const widthOptions = Array.from(
    { length: Math.floor(Dimensions.get("window").width - 10) },
    (_, index) => index + 1
  ).map((value) => {
    return { key: value, value: value + " px" };
  });

  return (
    <View style={styles.root}>
      <Text style={styles.screenHeading}>Rectangle Divider App</Text>
      <Rectangle
        h={gridHeight}
        w={gridWidth}
        gridBoxColor={gridBoxColor}
        rectangleBg={rectangleBg}
      />
      <InputForm

        setGridHeight={setGridHeight}
        setGridWidth={setGridWidth}
        heightOptions={heightOptions}
        widthOptions={widthOptions}
        setGridBoxColor={setGridBoxColor}
        setRectangleBg={setRectangleBg}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  root: {
    padding: 5,
    marginTop: 35,
    backgroundColor: "#ecf2f7",
    height: Dimensions.get("window").height,
  },
  screenHeading: {
    marginBottom: 5,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default MainScreen;
