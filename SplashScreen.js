import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Navigate to login screen after 3 seconds
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Top-left diagonal element */}
      <View style={[styles.diagonalElement, styles.topLeft]} />
      
      {/* Bottom-right diagonal element */}
      <View style={[styles.diagonalElement, styles.bottomRight]} />
      
      {/* Centered logo/text */}
      <View style={styles.centerContent}>
        <Text style={styles.logoText}>LANDGOLD</Text>
        <Text style={styles.subtitle}>Blockchain Property Marketplace</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0fff0', // Light green background per user preference
    justifyContent: 'center',
    alignItems: 'center',
  },
  diagonalElement: {
    position: 'absolute',
    width: 100,
    height: 100,
    backgroundColor: 'rgba(192, 192, 192, 0.1)',
    transform: [{ rotate: '45deg' }],
  },
  topLeft: {
    top: -50,
    left: -50,
  },
  bottomRight: {
    bottom: -50,
    right: -50,
  },
  centerContent: {
    alignItems: 'center',
  },
  logoText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#003366', // BTN blue color
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
  },
});

export default SplashScreen;