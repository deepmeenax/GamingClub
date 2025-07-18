import React, { useRef, useEffect } from 'react';
import { Animated, View, StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../constants/Colors';
import GlowingText from './GlowingText';

const { width } = Dimensions.get('window');

interface NeonNoticeBoardProps {
  messages: string[];
  speed?: number; // pixels per second
}

export default function NeonNoticeBoard({ messages, speed = 60 }: NeonNoticeBoardProps) {
  const scrollAnim = useRef(new Animated.Value(width)).current;
  const message = messages.join('   ✦   ');

  useEffect(() => {
    const animate = () => {
      scrollAnim.setValue(width);
      Animated.timing(scrollAnim, {
        toValue: -message.length * 12,
        duration: ((width + message.length * 12) / speed) * 1000,
        useNativeDriver: true,
        easing: Animated.Easing.linear,
      }).start(() => animate());
    };
    animate();
  }, [message, scrollAnim, speed]);

  return (
    <View style={styles.container}>
      <Animated.View style={{ transform: [{ translateX: scrollAnim }] }}>
        <GlowingText color={Colors.neonYellow} glowColor={Colors.neonPink} style={styles.text}>
          {message}
        </GlowingText>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 36,
    backgroundColor: Colors.card,
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1.5,
    borderColor: Colors.neonPink,
    marginVertical: 8,
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    paddingHorizontal: 16,
    fontWeight: 'bold',
  },
}); 