import React from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';
import { Colors } from '../../constants/Colors';

interface GlowingTextProps extends TextProps {
  color?: string;
  glowColor?: string;
  children: React.ReactNode;
}

export default function GlowingText({ color = Colors.neonCyan, glowColor, style, children, ...props }: GlowingTextProps) {
  return (
    <Text
      style={[
        styles.text,
        { color, textShadowColor: glowColor || color },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 12,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
}); 