import React from 'react';
import { View, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import GlowingText from '../../components/ui/GlowingText';
import GlassPanel from '../../components/ui/GlassPanel';
import NeonStars from '../../components/ui/NeonStars';
import GlowingButton from '../../components/ui/GlowingButton';
import { Colors } from '../../constants/Colors';

const { width } = Dimensions.get('window');

const referralCode = 'GC-2024-STAR';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      {/* Avatar + Neon ID + Stars */}
      <View style={styles.profileTop}>
        <Image source={require('../../assets/images/icon.png')} style={styles.avatar} />
        <GlowingText color={Colors.neonCyan} style={styles.userId}>ID: #GC123456</GlowingText>
        <NeonStars count={5} size={22} />
      </View>
      {/* Sections */}
      <GlassPanel style={styles.sectionCard}>
        <GlowingText color={Colors.neonBlue} style={styles.sectionTitle}>My Contests</GlowingText>
        <GlowingText color={Colors.text} style={styles.sectionDesc}>No active contests. Join games to win big!</GlowingText>
      </GlassPanel>
      <GlassPanel style={styles.sectionCard}>
        <GlowingText color={Colors.neonPink} style={styles.sectionTitle}>Referral Program</GlowingText>
        <GlowingText color={Colors.text} style={styles.sectionDesc}>Refer friends & earn rewards!</GlowingText>
        {/* Referral Code Panel */}
        <GlassPanel style={styles.referralPanel} borderColor={Colors.neonYellow}>
          <GlowingText color={Colors.neonYellow} style={styles.referralCode}>{referralCode}</GlowingText>
          <GlowingButton title="Copy & Share" color={Colors.neonYellow} style={styles.copyBtn} />
        </GlassPanel>
      </GlassPanel>
      <GlassPanel style={styles.sectionCard}>
        <GlowingText color={Colors.neonCyan} style={styles.sectionTitle}>Invite Friends</GlowingText>
        <GlowingText color={Colors.text} style={styles.sectionDesc}>Share your code and invite friends to join Gaming Club!</GlowingText>
      </GlassPanel>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingTop: 32,
    alignItems: 'center',
  },
  profileTop: {
    alignItems: 'center',
    marginBottom: 18,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: Colors.neonCyan,
    marginBottom: 8,
    shadowColor: Colors.neonCyan,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.7,
    shadowRadius: 14,
    elevation: 10,
  },
  userId: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: 'bold',
  },
  sectionCard: {
    width: width - 40,
    marginBottom: 16,
    padding: 16,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  sectionDesc: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 6,
  },
  referralPanel: {
    width: '100%',
    marginTop: 10,
    marginBottom: 4,
    alignItems: 'center',
    padding: 10,
    borderWidth: 2,
    borderColor: Colors.neonYellow,
    backgroundColor: Colors.card,
  },
  referralCode: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 2,
    marginBottom: 8,
  },
  copyBtn: {
    width: '80%',
  },
}); 