import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps, ViewStyle } from 'react-native';
import { Colors } from '../../constants/Colors';

interface GlowingButtonProps extends TouchableOpacityProps {
  title: string;
  color?: string;
  glowColor?: string;
  style?: ViewStyle;
}

export default function GlowingButton({ title, color = Colors.neonCyan, glowColor, style, ...props }: GlowingButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, { shadowColor: glowColor || color, borderColor: color }, style]}
      activeOpacity={0.85}
      {...props}
    >
      <Text style={[styles.text, { color }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.card,
    borderRadius: 16,
    borderWidth: 2,
    paddingVertical: 12,
    paddingHorizontal: 28,
    alignItems: 'center',
    marginVertical: 8,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 16,
    elevation: 8,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: 1,
    textShadowColor: Colors.neonCyan,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
  },
}); 