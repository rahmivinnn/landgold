import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const LegalTimeline = ({ navigation }) => {
  // Mock legal history data
  const legalHistory = [
    {
      id: 1,
      date: '2023-11-15',
      title: 'Recent Sale',
      description: 'Property sold from PT. Tanah Abadi to PT. Investa Jaya',
      type: 'sale',
    },
    {
      id: 2,
      date: '2023-05-20',
      title: 'Name Change',
      description: 'Certificate name updated to reflect new owner details',
      type: 'name-change',
    },
    {
      id: 3,
      date: '2022-12-10',
      title: 'Land Survey',
      description: 'Boundary survey completed and verified on blockchain',
      type: 'survey',
    },
    {
      id: 4,
      date: '2022-08-05',
      title: 'Initial Registration',
      description: 'Property first registered on Phantom Anchor blockchain',
      type: 'registration',
    },
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'sale': return '#008000'; // Green
      case 'name-change': return '#FF8C00'; // Orange
      case 'survey': return '#0000FF'; // Blue
      case 'registration': return '#800080'; // Purple
      default: return '#666666'; // Gray
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Legal Status Timeline</Text>
        <Text style={styles.subtitle}>Complete history of property transactions</Text>
      </View>

      <View style={styles.timelineContainer}>
        {legalHistory.map((event, index) => (
          <View key={event.id} style={styles.timelineItem}>
            {index !== legalHistory.length - 1 && (
              <View style={styles.timelineLine} />
            )}
            <View style={[styles.timelineDot, { backgroundColor: getTypeColor(event.type) }]} />
            <View style={styles.timelineContent}>
              <Text style={styles.eventDate}>{event.date}</Text>
              <Text style={styles.eventTitle}>{event.title}</Text>
              <Text style={styles.eventDescription}>{event.description}</Text>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.legendContainer}>
        <Text style={styles.legendTitle}>Legend</Text>
        <View style={styles.legendItem}>
          <View style={[styles.legendColor, { backgroundColor: '#008000' }]} />
          <Text style={styles.legendText}>Sale</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendColor, { backgroundColor: '#FF8C00' }]} />
          <Text style={styles.legendText}>Name Change</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendColor, { backgroundColor: '#0000FF' }]} />
          <Text style={styles.legendText}>Survey</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendColor, { backgroundColor: '#800080' }]} />
          <Text style={styles.legendText}>Registration</Text>
        </View>
      </View>

      <View style={styles.actionButtons}>
        <TouchableOpacity 
          style={[styles.button, styles.primaryButton]}
          onPress={() => navigation.navigate('PropertyDNA')}
        >
          <Text style={styles.buttonText}>View Property DNA</Text>
        </TouchableOpacity>
        
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
  },
  timelineContainer: {
    padding: 20,
  },
  timelineItem: {
    flexDirection: 'row',
    position: 'relative',
    marginBottom: 30,
  },
  timelineLine: {
    position: 'absolute',
    left: 10,
    top: 20,
    width: 2,
    height: '100%',
    backgroundColor: '#e0e0e0',
  },
  timelineDot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    zIndex: 1,
    marginTop: 5,
  },
  timelineContent: {
    flex: 1,
    marginLeft: 15,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  eventDate: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 5,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 5,
  },
  eventDescription: {
    fontSize: 16,
    color: '#666666',
    lineHeight: 22,
  },
  legendContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    margin: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  legendTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 15,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  legendColor: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    marginRight: 10,
  },
  legendText: {
    fontSize: 16,
    color: '#333333',
  },
  actionButtons: {
    padding: 20,
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

export default LegalTimeline;