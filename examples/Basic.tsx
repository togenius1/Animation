import React, {useRef} from 'react';
import {Animated, StyleSheet, TouchableOpacity, View, Text} from 'react-native';

const App = () => {
  function moveBall() {}

  return (
    <View>
      <View>
        <View
          style={{
            width: 100,
            height: 100,
            borderRadius: 100 / 2,
            backgroundColor: 'red',
          }}></View>
      </View>
      <TouchableOpacity onPress={moveBall}>
        <Text>Hey Click me</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
