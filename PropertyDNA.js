import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const PropertyDNA = ({ navigation }) => {
  // Mock data for property DNA
  const propertyData = {
    id: 'PROP-789456',
    location: 'Jakarta, Indonesia',
    area: '1,250 m²',
    polygon: '8 vertices',
    owner: 'PT. Tanah Abadi',
    registrationDate: '2023-05-15',
    lastUpdate: '2023-11-20',
    anchorHealth: 'Excellent',
    boundaryIntegrity: 'Verified',
  };

  const legalHistory = [
    { date: '2023-11-20', event: 'Boundary Verification', status: 'Completed' },
    { date: '2023-08-15', event: 'Ownership Transfer', status: 'Completed' },
    { date: '2023-05-15', event: 'Initial Registration', status: 'Completed' },
    { date: '2022-12-03', event: 'Land Survey', status: 'Completed' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Property DNA</Text>
        <Text style={styles.subtitle}>Digital land fingerprint</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.dnaVisual}>
          <View style={styles.polygonContainer}>
            <View style={styles.polygon}></View>
            <Text style={styles.polygonLabel}>Land Boundary Polygon</Text>
          </View>
          <View style={styles.dnaCode}>
            <Text style={styles.dnaCodeText}>DNA: 7A9F-4C2B-8E1D-5H6J-3K9L</Text>
          </View>
        </View>

        <View style={styles.detailSection}>
          <Text style={styles.sectionTitle}>Property Information</Text>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Property ID:</Text>
            <Text style={styles.detailValue}>{propertyData.id}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Location:</Text>
            <Text style={styles.detailValue}>{propertyData.location}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Area:</Text>
            <Text style={styles.detailValue}>{propertyData.area}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Polygon:</Text>
            <Text style={styles.detailValue}>{propertyData.polygon}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Owner:</Text>
            <Text style={styles.detailValue}>{propertyData.owner}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Registration Date:</Text>
            <Text style={styles.detailValue}>{propertyData.registrationDate}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Last Update:</Text>
            <Text style={styles.detailValue}>{propertyData.lastUpdate}</Text>
          </View>
        </View>

        <View style={styles.statusSection}>
          <View style={styles.statusRow}>
            <Text style={styles.statusLabel}>Anchor Health:</Text>
            <View style={[styles.statusBadge, styles.healthExcellent]}>
              <Text style={styles.statusText}>{propertyData.anchorHealth}</Text>
            </View>
          </View>
          <View style={styles.statusRow}>
            <Text style={styles.statusLabel}>Boundary Integrity:</Text>
            <View style={[styles.statusBadge, styles.integrityVerified]}>
              <Text style={styles.statusText}>{propertyData.boundaryIntegrity}</Text>
            </View>
          </View>
        </View>

        <View style={styles.detailSection}>
          <Text style={styles.sectionTitle}>Legal History</Text>
          {legalHistory.map((item, index) => (
            <View key={index} style={styles.historyRow}>
              <Text style={styles.historyDate}>{item.date}</Text>
              <Text style={styles.historyEvent}>{item.event}</Text>
              <View style={[styles.statusBadge, styles.statusCompleted]}>
                <Text style={styles.statusText}>{item.status}</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.actionButtons}>
          <TouchableOpacity 
            style={[styles.button, styles.primaryButton]}
            onPress={() => navigation.navigate('Marketplace')}
          >
            <Text style={styles.buttonText}>View in Marketplace</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.button, styles.secondaryButton]}
            onPress={() => navigation.navigate('BoundaryChecker')}
          >
            <Text style={styles.buttonText}>Boundary Integrity Check</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.button, styles.outlineButton]}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.outlineButtonText}>Back</Text>
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
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
    marginTop: 5,
  },
  content: {
    padding: 20,
  },
  dnaVisual: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  polygonContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  polygon: {
    width: 150,
    height: 150,
    backgroundColor: '#e0f7fa',
    borderRadius: 10,
    transform: [{ rotate: '45deg' }],
    marginBottom: 10,
  },
  polygonLabel: {
    fontSize: 16,
    color: '#333333',
    fontWeight: 'bold',
  },
  dnaCode: {
    backgroundColor: '#003366', // BTN blue color
    padding: 10,
    borderRadius: 5,
  },
  dnaCodeText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
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
  statusSection: {
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
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  statusLabel: {
    flex: 1,
    fontSize: 16,
    color: '#666666',
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
  healthExcellent: {
    backgroundColor: '#008000', // Green
  },
  integrityVerified: {
    backgroundColor: '#008000', // Green
  },
  statusCompleted: {
    backgroundColor: '#008000', // Green
  },
  statusText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  historyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
  },
  historyDate: {
    width: 100,
    fontSize: 14,
    color: '#666666',
  },
  historyEvent: {
    flex: 1,
    fontSize: 14,
    color: '#333333',
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

export default PropertyDNA;