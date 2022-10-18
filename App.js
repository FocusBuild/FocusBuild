import React, {Component}  from "react";
import { Button, Text, View } from "react-native";
import Timer from './Timer'

class App extends Component {
  render () {
    return (
      <View clasName ='App'>
        <Timer startCount = '1000'/>
      </View>
    )
  }
}