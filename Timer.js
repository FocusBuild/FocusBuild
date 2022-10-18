import React, {Component}  from "react";
import { Button, Text, View } from "react-native";



class TimerButton extends Component {
  state = { isRunning: false };
  render() {
    return (
      <View>
        <Button onPress={() => { this.setState({ isRunning: true }); }}
        title= {
          this.state.isRunning ? "terminate" : "build" } />
      </View>
    )
  }
}


class Timer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 100
    }
  }
  render () {
    const {count} = this.state 
    return (
      <View>
        <Text> Current Count: {count} </Text>
      </View>
    )
  }
  // setInterval
  // clearInterval
  componentDidMount(){
    const startCount = this.props
    this.setState({
      count: startCount
    })
    this.myInterval = setInterval(() => {
      this.setState({
        count: this.state.count - 1
      })
    } , 1000)
  }
  componentWillUnmount(){
    clearInterval(this.myInterval)
  }
}
export default Timer;

// make timer a class component that gets passed the time.
// counter is what goes up by 1
// the timer state will change 
// set Interval 
// function timeIt() -- counter increases by one. set interval (timeIt, 10000)