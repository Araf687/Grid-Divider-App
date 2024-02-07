import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Grid from "./Grid";

const Rectangle = ({w,h,gridBoxColor,rectangleBg}) => {
  // Dimensions of the larger rectangle
  const W = Math.floor(Dimensions.get("window").width) - 10; // Width
  const H = 200; // Height

  const calculateTotalNumberOfBoxes = (
    rectangleHeight,
    rectangleWidth,
    boxHeight,
    boxWidth,
    borderWidth
  ) => {
    const totalBorderWidth = 2 * borderWidth;
    const numberOfBoxHeight = Math.floor(rectangleHeight / boxHeight);
    const numberOfBoxWidth = Math.floor(rectangleWidth / boxWidth);
    const totalBoxes = numberOfBoxHeight * numberOfBoxWidth;
    const boxArray=[];
    console.log(numberOfBoxHeight, numberOfBoxWidth, totalBoxes);
    for(i=0;i<totalBoxes;i++){
      boxArray.push(<Grid height={boxHeight} width={boxWidth} bg={gridBoxColor} key={i}/>)
    }
    return boxArray;
  };
  
  // Create an array to store the smaller boxes
  const boxes =calculateTotalNumberOfBoxes(H, W, h, w, 1);

  return (
    <View style={[styles.rectangle,{backgroundColor:rectangleBg}]} id="canvas">
      {boxes}
    </View>
  );
};

const styles = StyleSheet.create({
  rectangle: {
    width: Dimensions.get("window").width - 10,
    height: 200,
    borderWidth:1,
    
    flexDirection: "row", // Horizontal arrangement of boxes
    flexWrap: "wrap", // Allow boxes to wrap to the next line
  },
});

export default Rectangle;
