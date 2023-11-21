import {useEffect, useState, useRef} from 'react';
import {View, StyleSheet, Animated, Easing} from 'react-native';
import {Images} from '../../common/assets';
import {size} from '../../common/primitives';
import colors from '../../common/primitives/colors';

const Loading = () => {
  const rotation = useRef(new Animated.Value(0)).current;

  const interpolateRotation = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const animatedStyle = {
    transform: [{rotate: interpolateRotation}],
  };

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotation, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={animatedStyle}>
        <Images.Loading
          width={size[3]}
          height={size[3]}
          color={colors.fontColor}
          style={{
            transform: [
              {
                rotate: `${rotation}deg`,
              },
            ],
          }}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
});

export default Loading;
