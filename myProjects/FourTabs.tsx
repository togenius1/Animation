import React, {useRef, useState} from 'react';
import {Animated, StyleSheet, View, Text, Pressable} from 'react-native';

const App = () => {
  const catValue = useRef(new Animated.Value(0)).current;
  const tagsValue = useRef(new Animated.Value(0)).current;
  const dateValue = useRef(new Animated.Value(0)).current;
  const accountValue = useRef(new Animated.Value(0)).current;

  const [cateYPos, setCateYPos] = useState(0);
  const [tagsYPos, setTagsYPos] = useState(0);
  const [dateYPos, setDateYPos] = useState(0);
  const [accountYPos, setAccountYPos] = useState(0);

  const yPos = -100;
  const duration = 50;

  console.log('cateYPos ', cateYPos);
  console.log('tagsYPos ', tagsYPos);
  console.log('dateYPos ', dateYPos);
  console.log('accountYPos ', accountYPos);

  function moveCateTab() {
    // UP
    if (
      cateYPos === 0 &&
      tagsYPos === 0 &&
      dateYPos === 0 &&
      accountYPos === 0
    ) {
      moveCateHandler();
      setCateYPos(yPos);
      return;
    }
    // DOWN
    if (
      cateYPos === yPos &&
      tagsYPos === 0 &&
      dateYPos === 0 &&
      accountYPos === 0
    ) {
      moveCateHandler();
      setCateYPos(0);
      return;
    }
    // DOWN
    if (
      cateYPos === yPos &&
      tagsYPos === yPos &&
      dateYPos === 0 &&
      accountYPos === 0
    ) {
      moveTagsHandler();
      setTagsYPos(0);
      return;
    }
    // DOWN
    if (
      cateYPos === yPos &&
      tagsYPos === yPos &&
      dateYPos === yPos &&
      accountYPos === 0
    ) {
      moveTagsAndDateHandler();
      setTagsYPos(0);
      setDateYPos(0);
      return;
    }
    // DOWN
    if (
      cateYPos === yPos &&
      tagsYPos === yPos &&
      dateYPos === yPos &&
      accountYPos === yPos
    ) {
      moveTagsAndDateAndAccountHandler();
      setTagsYPos(0);
      setDateYPos(0);
      setAccountYPos(0);
      return;
    }
  }

  function moveTagsTab() {
    // UP
    if (
      cateYPos === 0 &&
      tagsYPos === 0 &&
      dateYPos === 0 &&
      accountYPos === 0
    ) {
      moveCateAndTagsHandler();
      setCateYPos(yPos);
      setTagsYPos(yPos);
      return;
    }
    // UP
    if (
      cateYPos === yPos &&
      tagsYPos === 0 &&
      dateYPos === 0 &&
      accountYPos === 0
    ) {
      moveTagsHandler();
      setTagsYPos(yPos);
      return;
    }
    // DOWN
    if (
      cateYPos === yPos &&
      tagsYPos === yPos &&
      dateYPos === 0 &&
      accountYPos === 0
    ) {
      moveCateAndTagsHandler();
      setCateYPos(0);
      setTagsYPos(0);
      return;
    }
    // DOWN
    if (
      cateYPos === yPos &&
      tagsYPos === yPos &&
      dateYPos === yPos &&
      accountYPos === 0
    ) {
      moveDateHandler();
      // setCateYPos(0);
      // setTagsYPos(0);
      setDateYPos(0);
    }
    // DOWN
    if (
      cateYPos === yPos &&
      tagsYPos === yPos &&
      dateYPos === yPos &&
      accountYPos === yPos
    ) {
      moveDateAndAccountHandler();
      setDateYPos(0);
      setAccountYPos(0);
    }
  }

  function moveDateTab() {
    // UP
    if (
      cateYPos === 0 &&
      tagsYPos === 0 &&
      dateYPos === 0 &&
      accountYPos === 0
    ) {
      moveCateAndTagsAndDateHandler();
      setCateYPos(yPos);
      setTagsYPos(yPos);
      setDateYPos(yPos);
      return;
    }
    // UP
    if (
      cateYPos === yPos &&
      tagsYPos === 0 &&
      dateYPos === 0 &&
      accountYPos === 0
    ) {
      moveTagsAndDateHandler();
      setTagsYPos(yPos);
      setDateYPos(yPos);
      return;
    }
    // UP
    if (
      cateYPos === yPos &&
      tagsYPos === yPos &&
      dateYPos === 0 &&
      accountYPos === 0
    ) {
      moveDateHandler();
      setDateYPos(yPos);
      return;
    }
    // UP
    if (
      cateYPos === yPos &&
      tagsYPos === yPos &&
      dateYPos === yPos &&
      accountYPos === 0
    ) {
      moveCateAndTagsAndDateHandler();
      setCateYPos(0);
      setTagsYPos(0);
      setDateYPos(0);
      return;
    }
    // DOWN
    if (
      dateYPos === yPos &&
      tagsYPos === yPos &&
      cateYPos === yPos &&
      accountYPos === yPos
    ) {
      moveAccountHandler();
      // setCateYPos(0);
      // setTagsYPos(0);
      // setDateYPos(0);
      setAccountYPos(0);
      return;
    }
  }

  function moveAccountTab() {
    // UP
    if (
      cateYPos === 0 &&
      tagsYPos === 0 &&
      dateYPos === 0 &&
      accountYPos === 0
    ) {
      moveCateAndTagsAndDateAndAccountHandler();
      setCateYPos(yPos);
      setTagsYPos(yPos);
      setDateYPos(yPos);
      setAccountYPos(yPos);
      return;
    }
    // UP
    if (
      cateYPos === yPos &&
      tagsYPos === 0 &&
      dateYPos === 0 &&
      accountYPos === 0
    ) {
      moveTagsAndDateAndAccountHandler();
      setTagsYPos(yPos);
      setDateYPos(yPos);
      setAccountYPos(yPos);
      return;
    }
    // UP
    if (
      cateYPos === yPos &&
      tagsYPos === yPos &&
      dateYPos === 0 &&
      accountYPos === 0
    ) {
      moveDateAndAccountHandler();
      setDateYPos(yPos);
      setAccountYPos(yPos);
      return;
    }
    // UP
    if (
      cateYPos === yPos &&
      tagsYPos === yPos &&
      dateYPos === yPos &&
      accountYPos === 0
    ) {
      moveAccountHandler();
      setAccountYPos(yPos);
      return;
    }
    // DOWN
    if (
      cateYPos === yPos &&
      tagsYPos === yPos &&
      dateYPos === yPos &&
      accountYPos === yPos
    ) {
      moveCateAndTagsAndDateAndAccountHandler();
      setCateYPos(0);
      setTagsYPos(0);
      setDateYPos(0);
      setAccountYPos(0);
      return;
    }
  }

  function moveCateHandler() {
    Animated.timing(catValue, {
      toValue: 1,
      duration: duration,
      useNativeDriver: false,
    }).start();
  }

  function moveTagsHandler() {
    Animated.timing(tagsValue, {
      toValue: 1,
      duration: duration,
      useNativeDriver: false,
    }).start();
  }

  function moveDateHandler() {
    Animated.timing(dateValue, {
      toValue: 1,
      duration: duration,
      useNativeDriver: false,
    }).start();
  }

  function moveAccountHandler() {
    Animated.timing(accountValue, {
      toValue: 1,
      duration: duration,
      useNativeDriver: false,
    }).start();
  }

  function moveCateAndTagsHandler() {
    return Animated.parallel([
      Animated.timing(catValue, {
        toValue: 1,
        duration: duration,
        useNativeDriver: false,
      }),
      Animated.timing(tagsValue, {
        toValue: 1,
        duration: duration,
        useNativeDriver: false,
      }),
    ]).start();
  }

  function moveDateAndAccountHandler() {
    return Animated.parallel([
      Animated.timing(dateValue, {
        toValue: 1,
        duration: duration,
        useNativeDriver: false,
      }),
      Animated.timing(accountValue, {
        toValue: 1,
        duration: duration,
        useNativeDriver: false,
      }),
    ]).start();
  }

  function moveTagsAndDateHandler() {
    return Animated.parallel([
      Animated.timing(tagsValue, {
        toValue: 1,
        duration: duration,
        useNativeDriver: false,
      }),
      Animated.timing(dateValue, {
        toValue: 1,
        duration: duration,
        useNativeDriver: false,
      }),
    ]).start();
  }

  function moveTagsAndDateAndAccountHandler() {
    return Animated.parallel([
      Animated.timing(tagsValue, {
        toValue: 1,
        duration: duration,
        useNativeDriver: false,
      }),
      Animated.timing(dateValue, {
        toValue: 1,
        duration: duration,
        useNativeDriver: false,
      }),
      Animated.timing(accountValue, {
        toValue: 1,
        duration: duration,
        useNativeDriver: false,
      }),
    ]).start();
  }

  function moveCateAndTagsAndDateHandler() {
    return Animated.parallel([
      Animated.timing(catValue, {
        toValue: 1,
        duration: duration,
        useNativeDriver: false,
      }),
      Animated.timing(tagsValue, {
        toValue: 1,
        duration: duration,
        useNativeDriver: false,
      }),
      Animated.timing(dateValue, {
        toValue: 1,
        duration: duration,
        useNativeDriver: false,
      }),
    ]).start();
  }

  function moveCateAndTagsAndDateAndAccountHandler() {
    return Animated.parallel([
      Animated.timing(catValue, {
        toValue: 1,
        duration: duration,
        useNativeDriver: false,
      }),
      Animated.timing(tagsValue, {
        toValue: 1,
        duration: duration,
        useNativeDriver: false,
      }),
      Animated.timing(dateValue, {
        toValue: 1,
        duration: duration,
        useNativeDriver: false,
      }),
      Animated.timing(accountValue, {
        toValue: 1,
        duration: duration,
        useNativeDriver: false,
      }),
    ]).start();
  }

  //
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
          ]}>
          <Pressable
            onPress={moveCateTab}
            style={({pressed}) => pressed && styles.pressed}>
            <View style={styles.categoryContainer}>
              <View style={styles.cateHeaderContainer}>
                <Text style={styles.headerText}>Category</Text>
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
          ]}>
          <Pressable
            onPress={moveTagsTab}
            style={({pressed}) => pressed && styles.pressed}>
            <View style={styles.tagsContainer}>
              <View style={styles.tagsHeaderContainer}>
                <Text style={styles.headerText}>Tags</Text>
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
          ]}>
          <Pressable
            onPress={moveDateTab}
            style={({pressed}) => pressed && styles.pressed}>
            <View style={styles.dateContainer}>
              <View style={styles.dateHeaderContainer}>
                <Text style={styles.headerText}>Date</Text>
              </View>
              <View>
                <Text>Date1</Text>
                <Text>Date1</Text>
                <Text>Date1</Text>
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
                    outputRange: [0, accountYPos],
                  }),
                },
              ],
            },
          ]}>
          <Pressable
            onPress={moveAccountTab}
            style={({pressed}) => pressed && styles.pressed}>
            <View style={styles.accountContainer}>
              <View style={styles.accountHeaderContainer}>
                <Text style={styles.headerText}>Account</Text>
              </View>
              <View>
                <Text>Account1</Text>
                <Text>Account2</Text>
                <Text>Account3</Text>
              </View>
            </View>
          </Pressable>
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    width: '100%',
    height: 250,
    backgroundColor: 'white',
    marginTop: 675,
    position: 'absolute',
  },
  cateHeaderContainer: {
    justifyContent: 'center',
    backgroundColor: 'green',
    height: 25,
  },
  tagsContainer: {
    width: '100%',
    height: 250,
    backgroundColor: 'white',
    marginTop: 700,
    position: 'absolute',
  },
  tagsHeaderContainer: {
    justifyContent: 'center',
    backgroundColor: 'orange',
    height: 25,
  },
  dateContainer: {
    width: '100%',
    height: 250,
    backgroundColor: 'white',
    marginTop: 725,
    position: 'absolute',
  },
  dateHeaderContainer: {
    justifyContent: 'center',
    backgroundColor: 'lightblue',
    height: 25,
  },
  accountContainer: {
    width: '100%',
    height: 250,
    backgroundColor: 'white',
    marginTop: 750,
    position: 'absolute',
  },
  accountHeaderContainer: {
    justifyContent: 'center',
    backgroundColor: 'grey',
    height: 25,
  },
  headerText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  pressed: {
    opacity: 0.75,
  },
});

export default App;
