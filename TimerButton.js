
import { Button, Text, View } from "react-native";
import React, {Component}  from "react";


class TimerButton extends Component {
    state = { isRunning: false };
    render() {
      return (
        <View>
          <Button onPress= {() => { this.setState({ Running: false }); }}
          title= {
            this.state.isRunning ? "terminate" : "build" } />
        </View>
      )
    }
  }
  export default TimerButton



  