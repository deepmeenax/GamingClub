import React from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import GlowingText from '../../components/ui/GlowingText';
import GlowingButton from '../../components/ui/GlowingButton';
import { Colors } from '../../constants/Colors';

const { width } = Dimensions.get('window');

export default function WalletScreen() {
  return (
    <View style={styles.container}>
      {/* 3D Coin Illustration (placeholder) */}
      <Image source={require('../../assets/images/partial-react-logo.png')} style={styles.coin} />
      {/* Neon Balance */}
      <View style={styles.balancePanel}>
        <GlowingText color={Colors.neonCyan} style={styles.balanceLabel}>Balance</GlowingText>
        <GlowingText color={Colors.neonYellow} style={styles.balanceAmount}>₹ 12,500.00</GlowingText>
      </View>
      {/* Actions */}
      <View style={styles.actionsRow}>
        <GlowingButton title="Add Money" color={Colors.neonCyan} style={styles.actionBtn} />
        <GlowingButton title="Withdraw" color={Colors.neonPink} style={styles.actionBtn} />
      </View>
      <GlowingButton title="Transaction History" color={Colors.neonBlue} style={styles.actionBtnFull} />
      {/* Transaction History (placeholder) */}
      <View style={styles.historyPanel}>
        <GlowingText color={Colors.text} style={styles.historyTitle}>Recent Transactions</GlowingText>
        <GlowingText color={Colors.neonCyan} style={styles.historyItem}>+ ₹2,000  (Added)</GlowingText>
        <GlowingText color={Colors.neonPink} style={styles.historyItem}>- ₹500  (Withdrawn)</GlowingText>
        <GlowingText color={Colors.neonBlue} style={styles.historyItem}>+ ₹1,000  (Bonus)</GlowingText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: 'center',
    paddingTop: 32,
  },
  coin: {
    width: 90,
    height: 90,
    marginBottom: 12,
    opacity: 0.7,
    shadowColor: Colors.neonYellow,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.7,
    shadowRadius: 18,
    elevation: 12,
  },
  balancePanel: {
    backgroundColor: Colors.card,
    borderRadius: 20,
    paddingVertical: 18,
    paddingHorizontal: 36,
    alignItems: 'center',
    marginBottom: 18,
    borderWidth: 2,
    borderColor: Colors.neonCyan,
    shadowColor: Colors.neonCyan,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 16,
    elevation: 10,
  },
  balanceLabel: {
    fontSize: 18,
    marginBottom: 4,
  },
  balanceAmount: {
    fontSize: 32,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width - 48,
    marginBottom: 10,
  },
  actionBtn: {
    flex: 1,
    marginHorizontal: 6,
  },
  actionBtnFull: {
    width: width - 48,
    marginBottom: 18,
  },
  historyPanel: {
    backgroundColor: Colors.card,
    borderRadius: 16,
    padding: 16,
    width: width - 48,
    borderWidth: 1.5,
    borderColor: Colors.neonBlue,
    marginTop: 8,
  },
  historyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  historyItem: {
    fontSize: 15,
    marginBottom: 4,
  },
}); 