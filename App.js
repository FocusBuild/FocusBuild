import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Dimensions,Button} from 'react-native';

const App = () => {
  const [secondsLeft, setsecondsLeft]= useState(3601); //currently hardcoded. should be inputable.
  const [timerOn, setTimerOn] = useState(false);
  var counter = 0;
  var timeleft = 60;
  setInterval(timeIt, 1000); //calls timeIt every second, which increases the counter.


  useEffect(() => {
    if(timerOn) timeIt();

    else //stop timer 

    return () => {
      //stop time timer
    }
  }, [timerOn]);

  const timeIt = () => {
    counter + 1;
    

    //run  timer
  }

  const clockify = () => {
    let hours = Math.floor(secondsLeft / 60 / 60);
    let mins = Math.floor((secondsLeft / 60) % 60);
    let seconds = Math.floor(secondsLeft % 60);

    let displayHours = hours < 10  ?  "0" + hours : hours;   
    let displayMinutes = mins < 10  ? "0" + mins : mins;
    let displaySeconds = seconds < 10  ? "0" + seconds : seconds;

    return {
      displayHours,
      displayMinutes,
      displaySeconds,
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.time}> counter </Text>
      <Button title = "Build" onPress={() => setTimerOn((current) => !current)} > </Button>
    </View>
  );
};

// {clockify().displayHours} Hours {clockify().displayMinutes} Minutes {clockify().displaySeconds} Seconds

const styles = StyleSheet.create ({
  container: {
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,

  },
  time: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 30,
  }

});

export default App;
 
