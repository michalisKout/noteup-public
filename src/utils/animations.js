import { Animated } from 'react-native';

export const animateFade = () => {
  const fadeIn = (shouldFade, fadeAnimRef) => {
    if (shouldFade) {
      Animated.timing(fadeAnimRef, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  };

  const removeElevate = (elevationAnimRef, onComplete) => {
    Animated.timing(elevationAnimRef, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(() => onComplete());
  };

  return {
    fadeIn,
    removeElevate,
  };
};

export const animateTranslate = (translateAnimRef, fadeAnimRef) => {
  const fadeOut = Animated.timing(fadeAnimRef, {
    toValue: 0,
    duration: 500,
    useNativeDriver: true,
  });
  const translateX = Animated.timing(translateAnimRef, {
    toValue: -100,
    duration: 500,
    useNativeDriver: true,
  });

  const translateXAndFadeOut = (onComplete) => {
    Animated.parallel([translateX, fadeOut]).start(() => {
      onComplete();
    });
  };

  return {
    translateXAndFadeOut,
  };
};

export const expandInput = (inputRef) => {
  const expand = () => {
    Animated.timing(inputRef, {
      toValue: 6,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };
  const shrink = () => {
    Animated.timing(inputRef, {
      toValue: 0.6,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };

  const animate = (shouldExpand) => {
    if (shouldExpand) {
      expand();
    } else {
      shrink();
    }
  };

  return {
    animate,
  };
};
