import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';

const BoundaryChecker = ({ navigation }) => {
  const [checking, setChecking] = useState(false);
  const [result, setResult] = useState(null);

  const runBoundaryCheck = () => {
    setChecking(true);
    
    // Simulate boundary checking process
    setTimeout(() => {
      setChecking(false);
      
      // Randomly generate a result for demonstration
      const results = [
        {
          status: 'pass',
          title: 'Boundary Integrity Verified',
          message: 'All boundaries are valid and conform to legal requirements.',
          details: [
            '✓ No overlapping boundaries detected',
            '✓ All lines conform to legal standards',
            '✓ No polygon anomalies found',
            '✓ Shape complies with regulations'
          ]
        },
        {
          status: 'fail',
          title: 'Boundary Issues Detected',
          message: 'Property boundaries have issues that prevent sale.',
          details: [
            '✗ Overlapping boundaries with adjacent property',
            '✗ Illegal boundary line detected',
            '✗ Polygon anomaly identified',
            '✗ Shape violates local regulations'
          ]
        }
      ];
      
      const randomResult = results[Math.floor(Math.random() * results.length)];
      setResult(randomResult);
      
      if (randomResult.status === 'fail') {
        Alert.alert(
          'Boundary Issues Detected',
          'This property has boundary issues that prevent it from being sold. Please consult a land surveyor.',
          [{ text: 'OK' }]
        );
      }
    }, 3000);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Boundary Integrity Checker</Text>
        <Text style={styles.subtitle}>Verify land boundaries against legal requirements</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>What We Check</Text>
          <Text style={styles.infoText}>• Land boundary overlaps</Text>
          <Text style={styles.infoText}>• Illegal lines</Text>
          <Text style={styles.infoText}>• Polygon anomalies</Text>
          <Text style={styles.infoText}>• Out-of-law shapes</Text>
        </View>

        {!checking && !result && (
          <TouchableOpacity 
            style={[styles.button, styles.primaryButton]}
            onPress={runBoundaryCheck}
          >
            <Text style={styles.buttonText}>Run Boundary Check</Text>
          </TouchableOpacity>
        )}

        {checking && (
          <View style={styles.checkingContainer}>
            <Text style={styles.checkingText}>Analyzing property boundaries...</Text>
            <View style={styles.loadingIndicator}></View>
          </View>
        )}

        {result && (
          <View style={[styles.resultContainer, 
            result.status === 'pass' ? styles.resultPass : styles.resultFail]}>
            <Text style={styles.resultTitle}>{result.title}</Text>
            <Text style={styles.resultMessage}>{result.message}</Text>
            
            <View style={styles.detailsContainer}>
              {result.details.map((detail, index) => (
                <Text key={index} style={styles.detailText}>{detail}</Text>
              ))}
            </View>
            
            {result.status === 'pass' ? (
              <TouchableOpacity 
                style={[styles.button, styles.successButton]}
                onPress={() => navigation.navigate('Marketplace')}
              >
                <Text style={styles.buttonText}>View in Marketplace</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity 
                style={[styles.button, styles.warningButton]}
                onPress={() => navigation.navigate('PropertyDNA')}
              >
                <Text style={styles.buttonText}>View Property DNA</Text>
              </TouchableOpacity>
            )}
          </View>
        )}

        <TouchableOpacity 
          style={[styles.button, styles.outlineButton]}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.outlineButtonText}>Back</Text>
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
  infoBox: {
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
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 5,
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
  successButton: {
    backgroundColor: '#008000', // Green
  },
  warningButton: {
    backgroundColor: '#FF8C00', // Orange
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
  checkingContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 30,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  checkingText: {
    fontSize: 18,
    color: '#333333',
    marginBottom: 20,
  },
  loadingIndicator: {
    height: 50,
    width: 50,
    backgroundColor: '#e0f7fa',
    borderRadius: 25,
  },
  resultContainer: {
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
  resultPass: {
    borderLeftWidth: 5,
    borderLeftColor: '#008000', // Green
  },
  resultFail: {
    borderLeftWidth: 5,
    borderLeftColor: '#FF0000', // Red
  },
  resultTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 10,
  },
  resultMessage: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 20,
    lineHeight: 24,
  },
  detailsContainer: {
    marginBottom: 20,
  },
  detailText: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 8,
  },
});

export default BoundaryChecker;