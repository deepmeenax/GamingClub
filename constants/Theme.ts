import { Colors } from './Colors';
import { StyleSheet } from 'react-native';

export const GlassStyles = StyleSheet.create({
  panel: {
    backgroundColor: Colors.glass,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: Colors.glassBorder,
    overflow: 'hidden',
    shadowColor: Colors.neonCyan,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 10,
  },
  glowingBorder: {
    borderWidth: 2,
    borderColor: Colors.neonCyan,
    shadowColor: Colors.neonCyan,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 12,
    elevation: 12,
  },
  neonText: {
    color: Colors.neonCyan,
    textShadowColor: Colors.neonCyan,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 12,
  },
  neonPinkText: {
    color: Colors.neonPink,
    textShadowColor: Colors.neonPink,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 12,
  },
  neonBlueText: {
    color: Colors.neonBlue,
    textShadowColor: Colors.neonBlue,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 12,
  },
}); 