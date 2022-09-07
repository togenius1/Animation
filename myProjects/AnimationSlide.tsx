import {
  Animated,
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

type Props = {
  translateYValue: Animated.Value;
  yPos: number;
  headerLabel: string;
  styleContainer: object;
  styleHeaderContainer: any;
  styleHeaderText: any;
  onPress(): void;
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const AnimationSlide = ({
  translateYValue,
  yPos,
  onPress,
  headerLabel,
  styleContainer,
  styleHeaderContainer,
  styleHeaderText,
}: Props) => {
  return (
    <View>
      <Animated.View
        style={[
          {
            transform: [
              {
                translateX: translateYValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, yPos],
                }),
              },
            ],
          },
        ]}>
        <Pressable
          onPress={onPress}
          style={({pressed}) => pressed && styles.pressed}>
          <View style={[styles.container, styleContainer]}>
            <View style={[styles.headerContainer, styleHeaderContainer]}>
              <Text style={[styles.headerText, styleHeaderText]}>
                {headerLabel}
              </Text>
            </View>
            <View style={styles.listContainer}>
              <Text>Category1</Text>
              <Text>Category1</Text>
              <Text>Category1</Text>
            </View>
          </View>
        </Pressable>
      </Animated.View>
    </View>
  );
};

const TabContainerHeight = windowHeight / 2;

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    position: 'absolute',
    right: 0,
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'green',
    height: 25,
    borderRadius: 5,
    width: windowWidth,

    position: 'absolute',
    right: -windowWidth / 2,
  },
  listContainer: {
    width: windowWidth,
    // height: windowHeight/4,
    backgroundColor: '#f7e09c',

    position: 'absolute',
    left: 10,
    top: 25,
  },
  headerText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  pressed: {
    opacity: 0.75,
  },
});

export default AnimationSlide;
