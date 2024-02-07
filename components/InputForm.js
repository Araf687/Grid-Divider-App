import React, { useState } from "react";
import { Dimensions, StyleSheet, Text, TextInput, View } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import SearchableDropDown from "react-native-searchable-dropdown";

export default InputForm = ({
  gridBoxColor,
  rectangleBg,
  gridHeight,
  gridWidth,
  setGridWidth,
  setGridHeight,
  widthOptions,
  heightOptions,
  setGridBoxColor,
  setRectangleBg
}) => {
  return (
    <View style={styles.root}>
      <Text
        style={{
          textAlign: "center",
          fontSize: 16,
          fontWeight: 600,
          marginVertical: 10,
        }}
      >
        Grid Rectangle Input
      </Text>
      <View>
        <Text>Rectangle Background color</Text>
        <TextInput
          placeholder={"Color name or code"}
          style={styles.searchInput}
          onChangeText={(value) => setRectangleBg(value)}
          defaultValue={rectangleBg}
        />
      </View>
      <View style={{marginTop:10,marginBottom:5}}>
        <Text>Grid Box Background color</Text>
        <TextInput
          placeholder={"Color name or code"}
          style={styles.searchInput}
          onChangeText={(value) => setGridBoxColor(value)}
          defaultValue={gridBoxColor}
        />
      </View>
      {heightOptions.length > 0 && widthOptions.length > 0 && (
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 2, padding: 5 }}>
            <Text>Grid Height</Text>
            <SelectList
              setSelected={(key) => {
                setGridHeight(key);
              }}
              data={heightOptions}
              save="key"
              boxStyles={{
                backgroundColor: "#f2f8fd",
                borderColor: "#e5ebf1",
                borderRadius: 5,
              }}
              placeholder={"Select Height"}
              defaultOption={{ key: gridHeight, value:  gridHeight+"px" }}
            />
          </View>
          <View style={{ flex: 2, padding: 5 }}>
            <Text>Grid Width</Text>
            <SelectList
              setSelected={(key) => {
                setGridWidth(key);
              }}
              data={widthOptions}
              boxStyles={{
                backgroundColor: "#f2f8fd",
                borderColor: "#e5ebf1",
                borderRadius: 5,
              }}
              placeholder={"Select Width"}
              defaultOption={{ key: gridWidth, value:  gridWidth+"px" }}
            />
          </View>
        </View>
      )}
 
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    marginTop: 10,
    marginHorizontal: 2,
    backgroundColor: "white",
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal:10,
    minHeight: 500,
    borderWidth:1,
    borderColor:'lightgrey'
  },
  searchInput: {
    backgroundColor: '#ccdcef',
    paddingHorizontal: 10,
    borderRadius: 5,
    height: 40,
    color: 'black',
    width: '100%',
    marginBottom: 5,
    fontSize: 16,
  },
});
