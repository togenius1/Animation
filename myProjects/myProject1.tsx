import React, {useRef} from 'react';
import {Animated, StyleSheet, View, Text, Pressable} from 'react-native';

const App = () => {
  const catValue = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
  const tagsValue = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
  const dateValue = useRef(new Animated.ValueXY({x: 0, y: 0})).current;

  function moveCateHandler() {
    Animated.timing(catValue, {
      toValue: {x: 0, y: -100},
      duration: 50,
      useNativeDriver: false,
    }).start();
  }

  function moveTagsHandler() {
    Animated.timing(tagsValue, {
      toValue: {x: 0, y: -100},
      duration: 50,
      useNativeDriver: false,
    }).start();
  }

  function moveDateHandler() {
    Animated.timing(dateValue, {
      toValue: {x: 0, y: -100},
      duration: 50,
      useNativeDriver: false,
    }).start();
  }
  return (
    <View>
      <View>
        <Animated.View
          style={[
            {transform: [{translateX: catValue.x}, {translateY: catValue.y}]},
            // value1.getLayout(),
          ]}>
          <Pressable
            onPress={moveCateHandler}
            style={({pressed}) => pressed && styles.pressed}>
            <View style={[styles.category]}>
              <View style={{backgroundColor: 'green'}}>
                <Text>Category</Text>
              </View>
              <View>
                <Text>Item1</Text>
                <Text>Item1</Text>
                <Text>Item1</Text>
              </View>
            </View>
          </Pressable>
        </Animated.View>
        <Animated.View
          style={[
            {transform: [{translateX: tagsValue.x}, {translateY: tagsValue.y}]},
            // value1.getLayout(),
          ]}>
          <Pressable
            onPress={moveTagsHandler}
            style={({pressed}) => pressed && styles.pressed}>
            <View style={styles.tags}>
              <View style={{backgroundColor: 'red'}}>
                <Text>Tags</Text>
              </View>
              <View>
                <Text>Item1</Text>
                <Text>Item1</Text>
                <Text>Item1</Text>
              </View>
            </View>
          </Pressable>
        </Animated.View>
        <Animated.View
          style={[
            {transform: [{translateX: dateValue.x}, {translateY: dateValue.y}]},
            // value1.getLayout(),
          ]}>
          <Pressable
            onPress={moveDateHandler}
            style={({pressed}) => pressed && styles.pressed}>
            <View style={styles.date}>
              <View style={{backgroundColor: 'lightblue'}}>
                <Text>Date</Text>
              </View>
              <View>
                <Text>Item1</Text>
                <Text>Item1</Text>
                <Text>Item1</Text>
              </View>
            </View>
          </Pressable>
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  category: {
    width: '100%',
    height: 250,
    backgroundColor: 'white',
    marginTop: 685,
    position: 'absolute',
  },
  tags: {
    width: '100%',
    height: 250,
    backgroundColor: 'white',
    marginTop: 702,
    position: 'absolute',
  },
  date: {
    width: '100%',
    height: 250,
    backgroundColor: 'white',
    marginTop: 719,
    position: 'absolute',
  },
  pressed: {
    opacity: 0.75,
  },
});

export default App;
