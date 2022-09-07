import React, {useRef, useState} from 'react';
import {Animated, StyleSheet, View, Text, Pressable} from 'react-native';

import AnimationTab from './AnimationTab';
import {GlobalStyles} from './styles';

const FourTabs = () => {
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

  // Handler Function
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
      {/* Category Tab */}
      <AnimationTab
        onPress={moveCateTab}
        translateYValue={catValue}
        yPos={cateYPos}
        headerLabel="Category"
        styleContainer={{marginTop: 675}}
        styleHeaderContainer={{
          backgroundColor: GlobalStyles.colorShades.shade1,
        }}
        styleHeaderText={{color: GlobalStyles.colorFontShades.fontShade1}}
      />
      {/* Tags Tab */}
      <AnimationTab
        onPress={moveTagsTab}
        translateYValue={tagsValue}
        yPos={tagsYPos}
        headerLabel="Tags"
        styleContainer={{marginTop: 700}}
        styleHeaderContainer={{
          backgroundColor: GlobalStyles.colorShades.shade2,
        }}
        styleHeaderText={{color: GlobalStyles.colorFontShades.fontShade2}}
      />
      {/* Date Tab */}
      <AnimationTab
        onPress={moveDateTab}
        translateYValue={dateValue}
        yPos={dateYPos}
        headerLabel="Date"
        styleContainer={{marginTop: 725}}
        styleHeaderContainer={{
          backgroundColor: GlobalStyles.colorShades.shade3,
        }}
        styleHeaderText={{color: GlobalStyles.colorFontShades.fontShade3}}
      />
      {/* Account Tab */}
      <AnimationTab
        onPress={moveAccountTab}
        translateYValue={accountValue}
        yPos={accountYPos}
        headerLabel="Account"
        styleContainer={{marginTop: 750}}
        styleHeaderContainer={{
          backgroundColor: GlobalStyles.colorShades.shade4,
        }}
        styleHeaderText={{color: GlobalStyles.colorFontShades.fontShade4}}
      />
    </View>
  );
};

export default FourTabs;

const styles = StyleSheet.create({});
