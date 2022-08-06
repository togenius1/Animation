import React, {useRef, useState} from 'react';
import {Animated, StyleSheet, View, Text, Pressable} from 'react-native';

const App = () => {
  const catValue = useRef(new Animated.Value(0)).current;
  const tagsValue = useRef(new Animated.Value(0)).current;
  const dateValue = useRef(new Animated.Value(0)).current;

  const [cateYPos, setCateYPos] = useState(0);
  const [tagsYPos, setTagsYPos] = useState(0);
  const [dateYPos, setDateYPos] = useState(0);

  // console.log('cateYPos ', cateYPos);
  // console.log('tagsYPos ', tagsYPos);
  // console.log('dateYPos ', dateYPos);

  function moveCateTab() {
    // UP
    if (cateYPos === 0 && tagsYPos === 0 && dateYPos === 0) {
      moveCateHandler();
      setCateYPos(-100);
      return;
    }
    // DOWN
    if (cateYPos === -100 && tagsYPos === 0 && dateYPos === 0) {
      moveCateHandler();
      setCateYPos(0);
      return;
    }
    // DOWN
    if (cateYPos === -100 && tagsYPos === -100 && dateYPos === 0) {
      moveTagsHandler();
      setTagsYPos(0);
      return;
    }
    // DOWN
    if (cateYPos === -100 && tagsYPos === -100 && dateYPos === -100) {
      // moveCateHandler();
      // moveTagsHandler();
      // moveDateHandler();
      moveCateAndTagsAndDateHandler();
      setCateYPos(0);
      setTagsYPos(0);
      setDateYPos(0);
      return;
    }
  }

  function moveTagsTab() {
    // UP
    if (cateYPos === 0 && tagsYPos === 0 && dateYPos === 0) {
      // moveTagsHandler();
      // moveCateHandler();
      moveCateAndTagsHandler();
      setCateYPos(-100);
      setTagsYPos(-100);
      return;
    }
    // UP
    if (cateYPos === -100 && tagsYPos === 0 && dateYPos === 0) {
      // moveTagsHandler();
      // moveDateHandler();
      moveTagsAndDateHandler();
      setTagsYPos(-100);
      setDateYPos(-100);
      return;
    }
    // DOWN
    if (cateYPos === -100 && tagsYPos === -100 && dateYPos === 0) {
      // moveTagsHandler();
      // moveCateHandler();
      moveCateAndTagsHandler();
      setTagsYPos(0);
      setCateYPos(0);
      return;
    }
    // DOWN
    if (cateYPos === -100 && tagsYPos === -100 && dateYPos === -100) {
      moveDateHandler();
      setDateYPos(0);
    }
  }

  function moveDateTab() {
    // UP
    if (dateYPos === 0 && tagsYPos === 0 && cateYPos === 0) {
      // moveDateHandler();
      // moveTagsHandler();
      // moveCateHandler();
      moveCateAndTagsAndDateHandler();
      setDateYPos(-100);
      setTagsYPos(-100);
      setCateYPos(-100);
      return;
    }
    // UP
    if (dateYPos === 0 && tagsYPos === 0 && cateYPos === -100) {
      // moveDateHandler();
      // moveTagsHandler();
      moveTagsAndDateHandler();
      setDateYPos(-100);
      setTagsYPos(-100);
      return;
    }
    // UP
    if (dateYPos === 0 && tagsYPos === -100 && cateYPos === -100) {
      moveDateHandler();
      setDateYPos(-100);
      return;
    }
    // DOWN
    if (dateYPos === -100 && tagsYPos === -100 && cateYPos === -100) {
      // moveDateHandler();
      // moveTagsHandler();
      // moveCateHandler();
      moveCateAndTagsAndDateHandler();
      setDateYPos(0);
      setTagsYPos(0);
      setCateYPos(0);
      return;
    }
  }

  function moveCateHandler() {
    Animated.timing(catValue, {
      toValue: 1,
      duration: 100,
      useNativeDriver: false,
    }).start();
  }

  function moveTagsHandler() {
    Animated.timing(tagsValue, {
      toValue: 1,
      duration: 100,
      useNativeDriver: false,
    }).start();
  }

  function moveDateHandler() {
    Animated.timing(dateValue, {
      toValue: 1,
      duration: 100,
      useNativeDriver: false,
    }).start();
  }

  function moveCateAndTagsHandler() {
    return Animated.parallel([
      Animated.timing(catValue, {
        toValue: 1,
        duration: 100,
        useNativeDriver: false,
      }),
      Animated.timing(tagsValue, {
        toValue: 1,
        duration: 100,
        useNativeDriver: false,
      }),
    ]).start();
  }

  function moveTagsAndDateHandler() {
    return Animated.parallel([
      Animated.timing(tagsValue, {
        toValue: 1,
        duration: 100,
        useNativeDriver: false,
      }),
      Animated.timing(dateValue, {
        toValue: 1,
        duration: 100,
        useNativeDriver: false,
      }),
    ]).start();
  }

  function moveCateAndTagsAndDateHandler() {
    return Animated.parallel([
      Animated.timing(catValue, {
        toValue: 1,
        duration: 100,
        useNativeDriver: false,
      }),
      Animated.timing(tagsValue, {
        toValue: 1,
        duration: 100,
        useNativeDriver: false,
      }),
      Animated.timing(dateValue, {
        toValue: 1,
        duration: 100,
        useNativeDriver: false,
      }),
    ]).start();
  }

  return (
    <View>
      <View>
        <Animated.View
          style={[
            {
              transform: [
                {
                  translateY: catValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, cateYPos],
                  }),
                },
              ],
            },
            // value1.getLayout(),
          ]}>
          <Pressable
            onPress={moveCateTab}
            style={({pressed}) => pressed && styles.pressed}>
            <View style={styles.category}>
              <View style={{backgroundColor: 'green'}}>
                <Text>Category</Text>
              </View>
              <View>
                <Text>Category1</Text>
                <Text>Category1</Text>
                <Text>Category1</Text>
              </View>
            </View>
          </Pressable>
        </Animated.View>
        <Animated.View
          style={[
            {
              transform: [
                {
                  translateY: tagsValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, tagsYPos],
                  }),
                },
              ],
            },
            // value1.getLayout(),
          ]}>
          <Pressable
            onPress={moveTagsTab}
            style={({pressed}) => pressed && styles.pressed}>
            <View style={styles.tags}>
              <View style={{backgroundColor: 'red'}}>
                <Text>Tags</Text>
              </View>
              <View>
                <Text>Tags1</Text>
                <Text>Tags1</Text>
                <Text>Tags1</Text>
              </View>
            </View>
          </Pressable>
        </Animated.View>
        <Animated.View
          style={[
            {
              transform: [
                {
                  translateY: dateValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, dateYPos],
                  }),
                },
              ],
            },
            // value1.getLayout(),
          ]}>
          <Pressable
            onPress={moveDateTab}
            style={({pressed}) => pressed && styles.pressed}>
            <View style={styles.date}>
              <View style={{backgroundColor: 'lightblue'}}>
                <Text>Date</Text>
              </View>
              <View>
                <Text>Date1</Text>
                <Text>Date1</Text>
                <Text>Date1</Text>
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
