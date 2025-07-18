import React from 'react';
import { View, Image, StyleSheet, ViewStyle, ImageSourcePropType } from 'react-native';
import { Colors } from '../../constants/Colors';

interface GlowingAvatarProps {
  source: ImageSourcePropType;
  size?: number;
  glowColor?: string;
  style?: ViewStyle;
  locked?: boolean;
}

export default function GlowingAvatar({ source, size = 64, glowColor = Colors.neonCyan, style, locked }: GlowingAvatarProps) {
  return (
    <View style={[styles.glow, { shadowColor: glowColor, width: size + 16, height: size + 16 }, style]}>
      <Image
        source={source}
        style={{ width: size, height: size, borderRadius: size / 2, opacity: locked ? 0.5 : 1 }}
        resizeMode="cover"
      />
      {locked && <View style={[styles.locked, { width: size, height: size, borderRadius: size / 2 }]} />}
    </View>
  );
}

const styles = StyleSheet.create({
  glow: {
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.9,
    shadowRadius: 18,
    elevation: 12,
    backgroundColor: 'transparent',
    margin: 4,
  },
  locked: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); 