import React from 'react';
import { View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import GlowingText from '../../components/ui/GlowingText';
import GlassPanel from '../../components/ui/GlassPanel';
import GlowingAvatar from '../../components/ui/GlowingAvatar';
import { Colors } from '../../constants/Colors';

const { width } = Dimensions.get('window');

const games = [
  { icon: require('../../assets/images/icon.png'), name: 'Poker', locked: true },
  { icon: require('../../assets/images/favicon.png'), name: 'Roulette', locked: true },
  { icon: require('../../assets/images/adaptive-icon.png'), name: 'Blackjack', locked: true },
  { icon: require('../../assets/images/partial-react-logo.png'), name: 'Teen Patti', locked: true },
  { icon: require('../../assets/images/react-logo.png'), name: 'Baccarat', locked: true },
  { icon: require('../../assets/images/splash-icon.png'), name: 'Slots', locked: true },
];

export default function GamesScreen() {
  return (
    <View style={styles.container}>
      <GlowingText color={Colors.neonPink} style={styles.heading}>All Games</GlowingText>
      <ScrollView contentContainerStyle={styles.grid} showsVerticalScrollIndicator={false}>
        {games.map((g, i) => (
          <GlassPanel key={i} style={styles.card}>
            <GlowingAvatar source={g.icon} size={60} locked={g.locked} />
            <GlowingText color={Colors.text} style={styles.cardTitle}>{g.name}</GlowingText>
            <GlowingText color={Colors.neonPink} style={styles.comingSoon}>Coming Soon</GlowingText>
          </GlassPanel>
        ))}
      </ScrollView>
    </View>
  );
}

const CARD_SIZE = width / 2.3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingTop: 32,
    paddingHorizontal: 8,
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 18,
    letterSpacing: 2,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingBottom: 120,
  },
  card: {
    width: CARD_SIZE,
    alignItems: 'center',
    marginBottom: 18,
    paddingVertical: 18,
  },
  cardTitle: {
    fontSize: 18,
    marginTop: 8,
    fontWeight: 'bold',
  },
  comingSoon: {
    fontSize: 13,
    marginTop: 2,
  },
});
