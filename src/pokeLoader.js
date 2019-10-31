import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

class PokeLoader extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Image
          source={{
            uri:
              "http://media.tenor.com/images/39d6060576a516f1dd437eafccafbdb1/tenor.gif"
          }}
          style={styles.img}
        />
        <View style={styles.text}>
          <Text style={styles.textStuff}>
            Search Pokemon by Name and Number
          </Text>

          <Text style={styles.textStuff}>
            Click the Search icon to Find the Pokemon
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    height: 400,
    width: 400,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    justifyContent: "center",
    alignItems: "center"
  },
  textStuff: {
    color: "#000000",
    fontSize: 18
  }
});

export default PokeLoader;
