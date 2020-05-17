/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo, useRef } from 'react';
import { Text, SafeAreaView, View, Animated } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import { useMessageLogs } from '../../../utils/hooks/useMessageLogs';
import createStyles from '../../../styles/base';
import logStyles from './styles';
import { animateFade, animateTranslate } from '../../../utils/animations';

const styles = createStyles(logStyles);

const LogMessages = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateAnim = useRef(new Animated.Value(0)).current;
  const { translateXAndFadeOut } = animateTranslate(translateAnim, fadeAnim);
  const { fadeIn } = animateFade();
  const { logType, logMessages, clearMessages } = useMessageLogs();

  const memoizedLogs = useMemo(() => {
    const messageElements = logMessages.map((message, index) => {
      const itemKey = `error_${index}`;
      return (
        message && (
          <GestureRecognizer
            key={itemKey}
            onSwipeLeft={() => {
              translateXAndFadeOut(() => clearMessages());
            }}
          >
            <View style={[styles.wrapperMessage, styles[`${logType}Bg`], styles.logMessage]}>
              <Text style={[styles.text, styles[logType]]}>{message}</Text>
            </View>
          </GestureRecognizer>
        )
      );
    });
    return messageElements;
  }, [logMessages]);

  fadeIn(memoizedLogs.length > 0, fadeAnim);

  return (
    memoizedLogs.length > 0 && (
      <SafeAreaView style={styles.logs}>
        <Animated.View
          style={[
            styles.animation,
            {
              opacity: fadeAnim,
              transform: [
                {
                  translateX: translateAnim,
                },
              ],
            },
          ]}
        >
          {memoizedLogs}
        </Animated.View>
      </SafeAreaView>
    )
  );
};

export default LogMessages;
