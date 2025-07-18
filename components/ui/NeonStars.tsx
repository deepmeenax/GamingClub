import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors } from '../../constants/Colors';
import { MaterialIcons } from '@expo/vector-icons';

interface NeonStarsProps {
  count?: number;
  size?: number;
}

export default function NeonStars({ count = 5, size = 22 }: NeonStarsProps) {
  return (
    <View style={styles.row}>
      {Array.from({ length: count }).map((_, i) => (
        <MaterialIcons
          key={i}
          name="star"
          size={size}
          color={Colors.neonYellow}
          style={styles.star}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  star: {
    textShadowColor: Colors.neonYellow,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
    marginHorizontal: 2,
  },
}); 