import React, {useRef, useState} from 'react';
import {Animated, StyleSheet, View, PanResponder} from 'react-native';

const App = () => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        });
      },
      // onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}], {
      //   useNativeDriver: false,
      // }),
      onPanResponderMove: (_, gesture) => {
        // console.log('ARGS', {...args[1]});
        pan.x.setValue(gesture.dx);
        pan.y.setValue(gesture.dy);
      },
      onPanResponderRelease: () => {
        console.log({...pan.x}, 'BEFORE');
        pan.flattenOffset();
        console.log({...pan.x}, 'AFTER');
      },
    }),
  ).current;

  return (
    <View style={{flex: 1}}>
      <Animated.View
        style={[
          {
            width: 100,
            height: 100,
            borderRadius: 100 / 2,
            backgroundColor: 'red',
            transform: [{translateX: pan.x}, {translateY: pan.y}],
          },
          // pan.getLayout(),
        ]}
        {...panResponder.panHandlers}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
