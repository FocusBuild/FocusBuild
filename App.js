import React, {Component}  from "react";
import { Button, Text, View } from "react-native";
import Timer from './Timer'
import TimerButton from './TimerButton'


class App extends Component {
  render () {
    return (
      <View clasName ='App'>
        <Timer startCount = '53'/>
        <TimerButton></TimerButton>
      </View>
    )
  }
}

export default App;