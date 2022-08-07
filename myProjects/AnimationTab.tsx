import {Animated, Pressable, StyleSheet, Text, View} from 'react-native';
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

const AnimationTab = ({
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
                translateY: translateYValue.interpolate({
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
            <View>
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

export default AnimationTab;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 250,
    backgroundColor: 'white',
    // marginTop: 675,
    position: 'absolute',
  },
  headerContainer: {
    justifyContent: 'center',
    backgroundColor: 'green',
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
