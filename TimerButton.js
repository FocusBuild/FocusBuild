
import { Button, Text, View } from "react-native";
import React, {Component}  from "react";
import Timer from './Timer'


class TimerButton extends Component {
    state = { isRunning: false };
    render() {
      return (
        <View>
          <Button onPress= {() => { this.setState({ isRunning: true }); }}
          title= {
            this.state.isRunning ? "terminate" : "build" } />
        </View>
      )
    }
  }
  export default TimerButton;