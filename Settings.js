import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Switch,
  TouchableOpacity,
} from 'react-native';
import CustomHeader from './components/CustomHeader';

const Settings = ({ navigation }) => {
  const [notifications, setNotifications] = useState(true);
  const [location, setLocation] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const settingsSections = [
    {
      title: 'Account',
      items: [
        { id: 1, title: 'Edit Profile', screen: 'EditProfile' },
        { id: 2, title: 'Change Password', screen: 'ChangePassword' },
        { id: 3, title: 'Payment Methods', screen: 'PaymentMethods' },
      ]
    },
    {
      title: 'Preferences',
      items: [
        { id: 4, title: 'Language', screen: 'Language' },
        { id: 5, title: 'Currency', screen: 'Currency' },
        { id: 6, title: 'Region', screen: 'Region' },
      ]
    },
    {
      title: 'Security',
      items: [
        { id: 7, title: 'Two-Factor Authentication', screen: 'TwoFactorAuth' },
        { id: 8, title: 'Login History', screen: 'LoginHistory' },
      ]
    }
  ];

  // Define submenu items for the header
  const headerMenuItems = [
    { title: 'Help', onPress: () => console.log('Help') },
    { title: 'Feedback', onPress: () => console.log('Feedback') },
  ];

  return (
    <View style={styles.container}>
      <CustomHeader 
        title="Settings" 
        onBack={() => navigation.goBack()} 
        showMenu={true}
        menuItems={headerMenuItems}
      />
      
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.toggleSection}>
          <View style={styles.toggleItem}>
            <Text style={styles.toggleText}>Enable Notifications</Text>
            <Switch
              value={notifications}
              onValueChange={setNotifications}
              trackColor={{ false: '#767577', true: '#003366' }}
              thumbColor={notifications ? '#ffffff' : '#f4f3f4'}
            />
          </View>
          
          <View style={styles.toggleItem}>
            <Text style={styles.toggleText}>Location Services</Text>
            <Switch
              value={location}
              onValueChange={setLocation}
              trackColor={{ false: '#767577', true: '#003366' }}
              thumbColor={location ? '#ffffff' : '#f4f3f4'}
            />
          </View>
          
          <View style={styles.toggleItem}>
            <Text style={styles.toggleText}>Dark Mode</Text>
            <Switch
              value={darkMode}
              onValueChange={setDarkMode}
              trackColor={{ false: '#767577', true: '#003366' }}
              thumbColor={darkMode ? '#ffffff' : '#f4f3f4'}
            />
          </View>
        </View>

        {settingsSections.map((section) => (
          <View key={section.title} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            {section.items.map((item) => (
              <TouchableOpacity 
                key={item.id}
                style={styles.menuItem}
                onPress={() => {
                  // Handle navigation to setting screens
                }}
              >
                <Text style={styles.menuText}>{item.title}</Text>
                <Text style={styles.arrow}>→</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About</Text>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Terms of Service</Text>
            <Text style={styles.arrow}>→</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Privacy Policy</Text>
            <Text style={styles.arrow}>→</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.menuItem, styles.lastMenuItem]}>
            <Text style={styles.menuText}>Version 1.0.0</Text>
          </TouchableOpacity>
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
    paddingBottom: 30, // Add extra padding at bottom to prevent overlap
  },
  toggleSection: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    // Add shadow for depth
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  toggleItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  toggleText: {
    fontSize: 16,
    color: '#333333',
    flex: 1, // Allow text to take available space
    marginRight: 10, // Add margin to prevent overlap with switch
  },
  section: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginBottom: 20,
    // Add shadow for depth
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
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  lastMenuItem: {
    borderBottomWidth: 0, // Remove border for last item
  },
  menuText: {
    fontSize: 16,
    color: '#333333',
  },
  arrow: {
    fontSize: 18,
    color: '#999999',
  },
});

export default Settings;