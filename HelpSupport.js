import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import CustomHeader from './components/CustomHeader';

const HelpSupport = ({ navigation }) => {
  const faqItems = [
    {
      id: 1,
      question: 'How do I verify a property certificate?',
      answer: 'Use the "Scan Certificate" feature in the app to scan the QR code or barcode on the certificate. The app will automatically verify its authenticity through the blockchain.'
    },
    {
      id: 2,
      question: 'What should I do if a property shows boundary issues?',
      answer: 'If a property shows boundary issues, it cannot be sold until resolved. Contact a licensed land surveyor to correct the boundaries and update the records on the blockchain.'
    },
    {
      id: 3,
      question: 'How secure is my personal information?',
      answer: 'Your personal information is encrypted and stored securely. We follow industry-standard security practices to protect your data. Only necessary information is shared during transactions.'
    },
    {
      id: 4,
      question: 'Can I transfer property ownership digitally?',
      answer: 'Yes, through our "Shadow Transfer" feature. Both parties and a notary can digitally approve the transfer, which is then recorded on the blockchain without exchanging physical documents.'
    },
    {
      id: 5,
      question: 'What does "Ghosted Copy" mean?',
      answer: 'A "Ghosted Copy" indicates that the certificate is an illegal duplicate that was attempted to be forged on other platforms. These copies are permanently flagged and cannot be used in any transactions.'
    }
  ];

  const supportOptions = [
    { id: 1, title: 'Contact Support', action: 'contact' },
    { id: 2, title: 'Report a Problem', action: 'report' },
    { id: 3, title: 'User Guide', action: 'guide' },
    { id: 4, title: 'Community Forum', action: 'forum' },
  ];

  return (
    <View style={styles.container}>
      <CustomHeader 
        title="Help & Support" 
        onBack={() => navigation.goBack()} 
      />
      
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>
          {faqItems.map((item) => (
            <View key={item.id} style={styles.faqItem}>
              <Text style={styles.question}>{item.question}</Text>
              <Text style={styles.answer}>{item.answer}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Support Options</Text>
          {supportOptions.map((option) => (
            <TouchableOpacity 
              key={option.id}
              style={styles.supportItem}
              onPress={() => {
                // Handle support options
              }}
            >
              <Text style={styles.supportText}>{option.title}</Text>
              <Text style={styles.arrow}>→</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.contactSection}>
          <Text style={styles.contactTitle}>Contact Information</Text>
          <Text style={styles.contactText}>Email: support@landgold.app</Text>
          <Text style={styles.contactText}>Phone: +62 21 1234 5678</Text>
          <Text style={styles.contactText}>Hours: Monday - Friday, 9:00 AM - 6:00 PM</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0fff0', // Light green background
  },
  content: {
    padding: 20,
  },
  section: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
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
    padding: 15,
    paddingBottom: 5,
  },
  faqItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  question: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 5,
  },
  answer: {
    fontSize: 14,
    color: '#666666',
    lineHeight: 20,
  },
  supportItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  supportText: {
    fontSize: 16,
    color: '#333333',
  },
  contactSection: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 10,
  },
  contactText: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 5,
  },
  arrow: {
    fontSize: 18,
    color: '#999999',
  },
});

export default HelpSupport;