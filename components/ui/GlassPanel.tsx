import React from 'react';
import { View, StyleSheet, ViewProps } from 'react-native';
import { BlurView } from 'expo-blur';
import { Colors } from '../../constants/Colors';

interface GlassPanelProps extends ViewProps {
  children: React.ReactNode;
  borderColor?: string;
  blurIntensity?: number;
}

export default function GlassPanel({ children, style, borderColor = Colors.neonCyan, blurIntensity = 40, ...props }: GlassPanelProps) {
  return (
    <View style={[styles.container, { borderColor }, style]} {...props}>
      <BlurView intensity={blurIntensity} tint="dark" style={StyleSheet.absoluteFill} />
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.glass,
    borderRadius: 20,
    borderWidth: 2,
    overflow: 'hidden',
    borderColor: Colors.neonCyan,
    shadowColor: Colors.neonCyan,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.7,
    shadowRadius: 16,
    elevation: 10,
  },
}); 