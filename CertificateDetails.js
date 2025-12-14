import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const CertificateDetails = ({ route, navigation }) => {
  const { result, certificateData } = route.params;

  const getResultColor = (result) => {
    switch (result) {
      case 'Authentic':
        return '#008000'; // Green
      case 'Tampered':
        return '#FF8C00'; // Orange
      case 'Ghosted Copy':
        return '#FF0000'; // Red
      case 'Legally Blocked':
        return '#800080'; // Purple
      default:
        return '#666666'; // Gray
    }
  };

  const getResultMessage = (result) => {
    switch (result) {
      case 'Authentic':
        return 'This certificate is authentic and registered on the blockchain.';
      case 'Tampered':
        return 'This certificate has been tampered with and is not valid.';
      case 'Ghosted Copy':
        return 'This is an illegal duplicate of a legitimate certificate.';
      case 'Legally Blocked':
        return 'This certificate is legally blocked due to disputes or freezes.';
      default:
        return 'Verification result unknown.';
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Certificate Verification</Text>
        <View style={[styles.resultBadge, { backgroundColor: getResultColor(result) }]}>
          <Text style={styles.resultText}>{result}</Text>
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.message}>{getResultMessage(result)}</Text>
        
        <View style={styles.detailSection}>
          <Text style={styles.sectionTitle}>Certificate Details</Text>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Status:</Text>
            <Text style={styles.detailValue}>{result}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Certificate ID:</Text>
            <Text style={styles.detailValue}>CERT-{Math.floor(Math.random() * 1000000)}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Verification Date:</Text>
            <Text style={styles.detailValue}>{new Date().toLocaleDateString()}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Blockchain:</Text>
            <Text style={styles.detailValue}>Phantom Anchor</Text>
          </View>
        </View>

        <View style={styles.actionButtons}>
          <TouchableOpacity 
            style={[styles.button, styles.primaryButton]}
            onPress={() => navigation.navigate('PropertyDNA')}
          >
            <Text style={styles.buttonText}>View Property DNA</Text>
          </TouchableOpacity>
          
          {result === 'Authentic' && (
            <TouchableOpacity 
              style={[styles.button, styles.secondaryButton]}
              onPress={() => navigation.navigate('Marketplace')}
            >
              <Text style={styles.buttonText}>View in Marketplace</Text>
            </TouchableOpacity>
          )}
          
          <TouchableOpacity 
            style={[styles.button, styles.outlineButton]}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.outlineButtonText}>Scan Another</Text>
          </TouchableOpacity>
        </View>
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
    marginBottom: 15,
  },
  resultBadge: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  resultText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    padding: 20,
  },
  message: {
    fontSize: 16,
    color: '#333333',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 24,
  },
  detailSection: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 15,
  },
  detailRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  detailLabel: {
    flex: 1,
    fontSize: 16,
    color: '#666666',
  },
  detailValue: {
    flex: 1,
    fontSize: 16,
    color: '#333333',
    fontWeight: 'bold',
    textAlign: 'right',
  },
  actionButtons: {
    marginTop: 20,
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
});

export default CertificateDetails;