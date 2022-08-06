// https://eveningkid.medium.com/interpolation-with-react-native-animations-853e467fe5c1
// https://www.youtube.com/watch?v=ybcL8e6ImSo

import React, {useEffect, useRef} from 'react';
import {Animated} from 'react-native';
export default () => {
  const translation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(translation, {
      toValue: 100,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <Animated.View
      style={{
        width: 100,
        height: 100,
        backgroundColor: translation.interpolate({
          inputRange: [0, 100],
          outputRange: ['orange', 'blue'],
        }),
        opacity: translation.interpolate({
          inputRange: [25, 50, 100],
          outputRange: [0, 1, 0],
          extrapolate: 'clamp',
        }),
        transform: [
          {translateX: translation},
          {
            rotate: translation.interpolate({
              inputRange: [0, 100],
              outputRange: ['0deg', '360deg'],
            }),
          },
        ],
      }}
    />
  );
};

// opacity: translation.interpolate({
//   inputRange: [0, 100],
//   outputRange: [0, 1],
// }),

// opacity: translation.interpolate({
//   inputRange: [0, 50, 100],
//   outputRange: [0, 1, 0],
// }),

// transform: [
//   { translateX: translation },
//   {
//     rotate: translation.interpolate({
//       inputRange: [0, 100],
//       outputRange: ['0deg', '360deg'],
//     }),
//   },
// ],

// transform: [
//   { translateX: translation },
//   {
//     rotate: translation.interpolate({
//       inputRange: [0, 100],
//       outputRange: ['0deg', '360deg'],
//     }),
//   },
// ],

// backgroundColor: translation.interpolate({
//   inputRange: [0, 100],
//   outputRange: ['orange', 'blue'],
// }),
