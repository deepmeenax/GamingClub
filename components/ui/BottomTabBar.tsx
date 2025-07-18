import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter, useSegments } from 'expo-router';
import { Colors } from '../../constants/Colors';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

const TABS = [
  { name: 'Home', icon: (focused: boolean) => <Ionicons name="home" size={28} color={focused ? Colors.neonCyan : Colors.text} style={focused ? styles.glow : undefined} />, route: '/' },
  { name: 'Games', icon: (focused: boolean) => <MaterialIcons name="casino" size={28} color={focused ? Colors.neonPink : Colors.text} style={focused ? styles.glow : undefined} />, route: '/explore' },
  { name: 'Wallet', icon: (focused: boolean) => <FontAwesome5 name="wallet" size={26} color={focused ? Colors.neonBlue : Colors.text} style={focused ? styles.glow : undefined} />, route: '/wallet' },
  { name: 'Profile', icon: (focused: boolean) => <Ionicons name="person" size={28} color={focused ? Colors.neonYellow : Colors.text} style={focused ? styles.glow : undefined} />, route: '/profile' },
];

export default function BottomTabBar() {
  const router = useRouter();
  const segments = useSegments();
  const current = '/' + (segments[2] || '');

  return (
    <View style={styles.container}>
      {TABS.map(tab => {
        const focused = current === tab.route || (tab.route === '/' && current === '/');
        return (
          <TouchableOpacity
            key={tab.name}
            style={styles.tab}
            onPress={() => router.replace(tab.route)}
            activeOpacity={0.8}
          >
            {tab.icon(focused)}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.card,
    borderTopWidth: 1.5,
    borderTopColor: Colors.neonCyan,
    paddingVertical: 8,
    justifyContent: 'space-around',
    alignItems: 'center',
    shadowColor: Colors.neonCyan,
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.5,
    shadowRadius: 16,
    elevation: 16,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
  },
  glow: {
    textShadowColor: Colors.neonCyan,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 12,
  },
}); 