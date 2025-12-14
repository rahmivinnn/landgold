import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
} from 'react-native';
import { useAuth } from './contexts/AuthContext';
import CustomButton from './components/CustomButton';
import CustomInput from './components/CustomInput';

const Login = ({ navigation }) => {
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const handleLogin = async () => {
    if (!phone) {
      Alert.alert('Error', 'Please enter your phone number');
      return;
    }

    setLoading(true);
    
    try {
      // Send OTP via service
      const response = await login(phone);
      
      if (response.success) {
        navigation.navigate('OTPVerification', { phone });
      } else {
        Alert.alert('Error', response.message || 'Failed to send OTP');
      }
    } catch (error) {
      Alert.alert('Error', error.message || 'Failed to send OTP');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>LANDGOLD</Text>
        <Text style={styles.subtitle}>Blockchain Property Marketplace</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.welcomeText}>Welcome Back</Text>
        <Text style={styles.instructions}>Enter your phone number to continue</Text>

        <CustomInput
          label="Phone Number"
          placeholder="+62 812 3456 7890"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />

        <CustomButton
          title={loading ? 'Sending OTP...' : 'Continue'}
          onPress={handleLogin}
          loading={loading}
          disabled={loading}
        />

        <View style={styles.footer}>
          <Text style={styles.footerText}>By continuing, you agree to our</Text>
          <View style={styles.links}>
            <TouchableOpacity>
              <Text style={styles.linkText}>Terms of Service</Text>
            </TouchableOpacity>
            <Text style={styles.linkSeparator}>and</Text>
            <TouchableOpacity>
              <Text style={styles.linkText}>Privacy Policy</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0fff0', // Light green background
  },
  header: {
    padding: 30,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#003366', // BTN blue color
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
    marginTop: 5,
  },
  content: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 10,
    textAlign: 'center',
  },
  instructions: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 30,
    textAlign: 'center',
  },
  footer: {
    alignItems: 'center',
    marginTop: 30,
  },
  footerText: {
    fontSize: 14,
    color: '#666666',
  },
  links: {
    flexDirection: 'row',
    marginTop: 10,
  },
  linkText: {
    color: '#003366', // BTN blue color
    fontWeight: 'bold',
  },
  linkSeparator: {
    marginHorizontal: 5,
    color: '#666666',
  },
});

export default Login;