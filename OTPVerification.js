import React, { useState, useEffect, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Alert,
} from 'react-native';
import { useAuth } from './contexts/AuthContext';
import CustomButton from './components/CustomButton';

const OTPVerification = ({ route, navigation }) => {
  const { phone } = route.params;
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(30);
  const [resending, setResending] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const { login, verifyOTP } = useAuth();

  // Timer countdown
  useEffect(() => {
    let interval = null;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer(timer => timer - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleOtpChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Auto focus to next input
    if (text && index < 5) {
      // In a real app, we would focus the next input here
    }
  };

  const handleVerify = async () => {
    const otpString = otp.join('');
    
    if (otpString.length !== 6) {
      Alert.alert('Error', 'Please enter the complete 6-digit OTP');
      return;
    }

    setVerifying(true);
    
    try {
      // Verify OTP via service
      const response = await verifyOTP(phone, otpString);
      
      if (response.success) {
        Alert.alert(
          'Success',
          'Phone number verified successfully!',
          [
            {
              text: 'OK',
              onPress: () => navigation.navigate('MainApp')
            }
          ]
        );
      } else {
        Alert.alert('Error', response.message || 'Invalid OTP. Please try again.');
      }
    } catch (error) {
      Alert.alert('Error', error.message || 'Failed to verify OTP');
    } finally {
      setVerifying(false);
    }
  };

  const handleResendOTP = async () => {
    if (timer > 0 && !resending) return;
    
    setResending(true);
    setTimer(30);
    
    try {
      // Resend OTP via service
      const response = await login(phone);
      
      if (response.success) {
        Alert.alert('Success', 'OTP has been resent to your phone number');
      } else {
        Alert.alert('Error', response.message || 'Failed to resend OTP');
      }
    } catch (error) {
      Alert.alert('Error', error.message || 'Failed to resend OTP');
    } finally {
      setResending(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Verify Phone</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.instructions}>
          Enter the 6-digit code sent to {phone}
        </Text>

        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              style={styles.otpInput}
              value={digit}
              onChangeText={(text) => handleOtpChange(text, index)}
              keyboardType="number-pad"
              maxLength={1}
              selectTextOnFocus
            />
          ))}
        </View>

        <CustomButton
          title={verifying ? 'Verifying...' : 'Verify'}
          onPress={handleVerify}
          loading={verifying}
          disabled={verifying}
        />

        <View style={styles.resendContainer}>
          <Text style={styles.resendText}>
            {timer > 0 
              ? `Resend OTP in ${timer} seconds` 
              : "Didn't receive the code?"}
          </Text>
          
          <CustomButton
            title="Resend OTP"
            onPress={handleResendOTP}
            variant="outline"
            disabled={timer > 0 && !resending}
          />
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
    fontSize: 24,
    fontWeight: 'bold',
    color: '#003366', // BTN blue color
  },
  content: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
  },
  instructions: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 30,
    textAlign: 'center',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: '#f5f5f5',
  },
  button: {
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  primaryButton: {
    backgroundColor: '#003366', // BTN blue color
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resendContainer: {
    alignItems: 'center',
  },
  resendText: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 10,
  },
  resendLink: {
    fontSize: 16,
    color: '#003366', // BTN blue color
    fontWeight: 'bold',
  },
  disabledLink: {
    opacity: 0.5,
  },
  disabledText: {
    color: '#999999',
  },
  disabledButton: {
    backgroundColor: '#cccccc',
  },
});

export default OTPVerification;