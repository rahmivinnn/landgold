import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';

const ShadowTransfer = ({ navigation }) => {
  const [buyerPhone, setBuyerPhone] = useState('');
  const [notaryId, setNotaryId] = useState('');
  const [transferStep, setTransferStep] = useState('request'); // request, approve, validate, complete

  const handleRequestTransfer = () => {
    if (!buyerPhone) {
      Alert.alert('Error', 'Please enter buyer phone number');
      return;
    }
    
    // In a real app, this would send a request to the buyer
    setTransferStep('approve');
    Alert.alert(
      'Transfer Request Sent',
      `Transfer request sent to ${buyerPhone}. Waiting for approval.`,
      [{ text: 'OK' }]
    );
  };

  const handleApproveTransfer = () => {
    setTransferStep('validate');
    Alert.alert(
      'Transfer Approved',
      'You have approved this transfer. Waiting for notary validation.',
      [{ text: 'OK' }]
    );
  };

  const handleValidateTransfer = () => {
    if (!notaryId) {
      Alert.alert('Error', 'Please enter notary ID');
      return;
    }
    
    setTransferStep('complete');
    // In a real app, this would connect to the blockchain
    Alert.alert(
      'Transfer Validated',
      'Notary has validated the transfer. Blockchain update in progress...',
      [{ text: 'OK' }]
    );
    
    // Simulate blockchain update completion
    setTimeout(() => {
      Alert.alert(
        'Transfer Complete',
        'Ownership transferred successfully! Certificate updated on blockchain.',
        [
          {
            text: 'View Certificate',
            onPress: () => navigation.navigate('CertificateDetails', { 
              result: 'Authentic',
              certificateData: 'TRANSFER-CERT-789456'
            })
          },
          {
            text: 'Done',
            onPress: () => navigation.goBack()
          }
        ]
      );
    }, 3000);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Shadow Transfer</Text>
        <Text style={styles.subtitle}>Secure ownership transfer without document exchange</Text>
      </View>

      <View style={styles.content}>
        {transferStep === 'request' && (
          <View style={styles.stepContainer}>
            <Text style={styles.stepTitle}>Step 1: Request Transfer</Text>
            <Text style={styles.stepDescription}>
              Enter buyer's phone number to send transfer request
            </Text>
            
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Buyer's Phone Number</Text>
              <TextInput
                style={styles.input}
                placeholder="+62 812 3456 7890"
                value={buyerPhone}
                onChangeText={setBuyerPhone}
                keyboardType="phone-pad"
              />
            </View>
            
            <TouchableOpacity 
              style={[styles.button, styles.primaryButton]}
              onPress={handleRequestTransfer}
            >
              <Text style={styles.buttonText}>Send Transfer Request</Text>
            </TouchableOpacity>
          </View>
        )}

        {transferStep === 'approve' && (
          <View style={styles.stepContainer}>
            <Text style={styles.stepTitle}>Step 2: Approve Transfer</Text>
            <Text style={styles.stepDescription}>
              Buyer has received the transfer request. Waiting for their approval.
            </Text>
            
            <View style={styles.statusContainer}>
              <Text style={styles.statusText}>Buyer: {buyerPhone}</Text>
              <Text style={styles.statusPending}>Pending Approval</Text>
            </View>
            
            <TouchableOpacity 
              style={[styles.button, styles.secondaryButton]}
              onPress={handleApproveTransfer}
            >
              <Text style={styles.buttonText}>Approve Transfer</Text>
            </TouchableOpacity>
          </View>
        )}

        {transferStep === 'validate' && (
          <View style={styles.stepContainer}>
            <Text style={styles.stepTitle}>Step 3: Notary Validation</Text>
            <Text style={styles.stepDescription}>
              Both parties have approved. Now waiting for notary validation.
            </Text>
            
            <View style={styles.statusContainer}>
              <Text style={styles.statusText}>Seller: Approved</Text>
              <Text style={styles.statusText}>Buyer: Approved</Text>
              <Text style={styles.statusPending}>Notary: Pending</Text>
            </View>
            
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Notary ID</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter notary identification"
                value={notaryId}
                onChangeText={setNotaryId}
              />
            </View>
            
            <TouchableOpacity 
              style={[styles.button, styles.thirdButton]}
              onPress={handleValidateTransfer}
            >
              <Text style={styles.buttonText}>Validate Transfer</Text>
            </TouchableOpacity>
          </View>
        )}

        {transferStep === 'complete' && (
          <View style={styles.stepContainer}>
            <Text style={styles.stepTitle}>Transfer in Progress</Text>
            <Text style={styles.stepDescription}>
              Blockchain update initiated. This may take a few moments.
            </Text>
            
            <View style={styles.statusContainer}>
              <Text style={styles.statusText}>Seller: Approved</Text>
              <Text style={styles.statusText}>Buyer: Approved</Text>
              <Text style={styles.statusText}>Notary: Validated</Text>
              <Text style={styles.statusProcessing}>Blockchain: Updating...</Text>
            </View>
            
            <View style={styles.loadingIndicator}></View>
          </View>
        )}

        <TouchableOpacity 
          style={[styles.button, styles.outlineButton]}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.outlineButtonText}>Cancel Transfer</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0fff0', // Light green background
  },
  header: {
    padding: 20,
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
  subtitle: {
    fontSize: 16,
    color: '#666666',
    marginTop: 5,
    textAlign: 'center',
  },
  content: {
    padding: 20,
  },
  stepContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  stepTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 10,
  },
  stepDescription: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 20,
    lineHeight: 24,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#f5f5f5',
  },
  button: {
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  primaryButton: {
    backgroundColor: '#003366', // BTN blue color
  },
  secondaryButton: {
    backgroundColor: '#008000', // Green color
  },
  thirdButton: {
    backgroundColor: '#800080', // Purple color
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#C80606', // BTN red color
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  outlineButtonText: {
    color: '#C80606', // BTN red color
    fontSize: 16,
    fontWeight: 'bold',
  },
  statusContainer: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  statusText: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 5,
  },
  statusPending: {
    fontSize: 16,
    color: '#FF8C00', // Orange color
    fontWeight: 'bold',
    marginBottom: 5,
  },
  statusProcessing: {
    fontSize: 16,
    color: '#003366', // BTN blue color
    fontWeight: 'bold',
  },
  loadingIndicator: {
    height: 50,
    backgroundColor: '#e0f7fa',
    borderRadius: 10,
    marginBottom: 20,
  },
});

export default ShadowTransfer;