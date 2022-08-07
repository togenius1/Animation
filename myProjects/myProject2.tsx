import React, {useRef} from 'react';
import {Animated, StyleSheet, View, Text, Pressable} from 'react-native';

const App = () => {
  const catValue = useRef(new Animated.Value(0)).current;
  const tagsValue = useRef(new Animated.Value(0)).current;
  const dateValue = useRef(new Animated.Value(0)).current;

  // Modify useRef --> cateValue.setValue(-300);

  function moveCateHandler() {
    Animated.timing(catValue, {
      toValue: -100,
      duration: 50,
      useNativeDriver: false,
    }).start();
  }

  function moveTagsHandler() {
    Animated.timing(tagsValue, {
      toValue: -100,
      duration: 50,
      useNativeDriver: false,
    }).start();
  }

  function moveDateHandler() {
    Animated.timing(dateValue, {
      toValue: -100,
      duration: 50,
      useNativeDriver: false,
    }).start();
  }
  return (
    <View>
      <View>
        <Animated.View
          style={[
            {transform: [{translateY: catValue}]},
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
            {transform: [{translateY: tagsValue}]},
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
            {transform: [{translateY: dateValue}]},
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
