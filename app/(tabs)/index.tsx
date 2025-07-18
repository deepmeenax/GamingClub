import React from 'react';
import { View, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';
import GlowingText from '../../components/ui/GlowingText';
import GlassPanel from '../../components/ui/GlassPanel';
import GlowingAvatar from '../../components/ui/GlowingAvatar';
import NeonNoticeBoard from '../../components/ui/NeonNoticeBoard';
import { Colors } from '../../constants/Colors';

const { width } = Dimensions.get('window');

const features = [
  { icon: require('../../assets/images/partial-react-logo.png'), title: 'Safe & Secure', color: Colors.neonCyan },
  { icon: require('../../assets/images/react-logo.png'), title: '100% Real Money', color: Colors.neonPink },
  { icon: require('../../assets/images/splash-icon.png'), title: 'Daily Bonuses', color: Colors.neonBlue },
];

const gamesPreview = [
  { icon: require('../../assets/images/icon.png'), name: 'Poker', locked: true },
  { icon: require('../../assets/images/favicon.png'), name: 'Roulette', locked: true },
  { icon: require('../../assets/images/adaptive-icon.png'), name: 'Blackjack', locked: true },
];

const winnerImgs = [
  require('../../assets/images/react-logo@2x.png'),
  require('../../assets/images/react-logo@3x.png'),
];

const noticeMessages = [
  '🎉 Big Win! User123 won ₹50,000 in Poker!',
  '💰 Daily Bonus: Claim your free coins now!',
  '🚀 New games launching soon! Stay tuned.',
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 120 }} showsVerticalScrollIndicator={false}>
        {/* Banner */}
        <View style={styles.bannerWrap}>
          <GlowingText color={Colors.neonCyan} glowColor={Colors.neonPink} style={styles.banner}>
            Welcome to Gaming Club
          </GlowingText>
        </View>
        {/* Features */}
        <View style={styles.featuresRow}>
          {features.map((f, i) => (
            <GlassPanel key={i} style={[styles.featureCard, { borderColor: f.color }]}> 
              <GlowingAvatar source={f.icon} size={48} glowColor={f.color} />
              <GlowingText color={f.color} style={styles.featureText}>{f.title}</GlowingText>
            </GlassPanel>
          ))}
        </View>
        {/* Games Preview */}
        <View style={styles.section}>
          <GlowingText color={Colors.neonBlue} style={styles.sectionTitle}>Games Preview</GlowingText>
          <View style={styles.gamesRow}>
            {gamesPreview.map((g, i) => (
              <GlassPanel key={i} style={styles.gameCard}>
                <GlowingAvatar source={g.icon} size={56} locked={g.locked} />
                <GlowingText color={Colors.text} style={{ fontSize: 16, marginTop: 4 }}>{g.name}</GlowingText>
                <GlowingText color={Colors.neonPink} style={{ fontSize: 12, marginTop: 2 }}>Coming Soon</GlowingText>
              </GlassPanel>
            ))}
          </View>
        </View>
        {/* Winners Illustration */}
        <View style={styles.winnersRow}>
          {winnerImgs.map((img, i) => (
            <Image key={i} source={img} style={styles.winnerImg} />
          ))}
        </View>
        {/* Notice Board */}
        <NeonNoticeBoard messages={noticeMessages} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingTop: 24,
  },
  bannerWrap: {
    alignItems: 'center',
    marginBottom: 18,
  },
  banner: {
    fontSize: 28,
    fontWeight: 'bold',
    letterSpacing: 2,
    textAlign: 'center',
    marginTop: 8,
  },
  featuresRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 18,
  },
  featureCard: {
    width: width / 3.2,
    alignItems: 'center',
    paddingVertical: 16,
    marginHorizontal: 4,
  },
  featureText: {
    fontSize: 14,
    marginTop: 8,
    textAlign: 'center',
  },
  section: {
    marginTop: 10,
    marginBottom: 8,
    paddingHorizontal: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  gamesRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  gameCard: {
    width: width / 3.3,
    alignItems: 'center',
    paddingVertical: 14,
    marginHorizontal: 4,
  },
  winnersRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 18,
  },
  winnerImg: {
    width: 54,
    height: 54,
    borderRadius: 27,
    marginHorizontal: 8,
    borderWidth: 2,
    borderColor: Colors.neonCyan,
    shadowColor: Colors.neonCyan,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.7,
    shadowRadius: 10,
    elevation: 8,
  },
});
