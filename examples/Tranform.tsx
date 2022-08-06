import React, {useRef, useState} from 'react';
import {Animated, StyleSheet, TouchableOpacity, View, Text} from 'react-native';

const App = () => {
  const leftValue = useState(new Animated.Value(0))[0];

  function moveBall() {
    Animated.timing(leftValue, {
      toValue: 500,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  }

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Animated.View
          style={[
            {
              width: 100,
              height: 100,
              borderRadius: 100 / 2,
              transform: [
                {
                  translateX: leftValue,
                },
              ],
              backgroundColor: 'red',
            },
          ]}
        />
        <TouchableOpacity onPress={moveBall}>
          <Text>Move me</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
