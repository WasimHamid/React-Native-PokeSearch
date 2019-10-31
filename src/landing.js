import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Button } from "native-base";

var myBackground = require("../assets/icons/landing.jpeg");

class Landing extends React.Component {
  render() {
    return (
      <View>
        <Image source={myBackground} />
        <View style={styles.container}>
          <View style={styles.viewStyle}>
            <Text style={styles.titleStyle}>Welcome to PokeSearch</Text>
            <Button
              block={true}
              style={styles.buttonStyle}
              onPress={() => this.props.switchScreen("search")}
            >
              <Text style={styles.buttonText}>Start Searching</Text>
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center"
  },
  viewStyle: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  titleStyle: {
    fontSize: 30,
    color: "blue",
    alignItems: "center"
  },
  buttonStyle: {
    margin: 10
  },
  buttonText: {
    color: "white"
  }
});

export default Landing;
