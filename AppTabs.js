import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CameraScanner from './CameraScanner';
import CertificateDetails from './CertificateDetails';
import PropertyDNA from './PropertyDNA';
import Marketplace from './Marketplace';
import PropertyDetails from './PropertyDetails';
import ShadowTransfer from './ShadowTransfer';
import LegalTimeline from './LegalTimeline';
import BoundaryChecker from './BoundaryChecker';
import Profile from './Profile';
import Settings from './Settings';
import HelpSupport from './HelpSupport';
import Dashboard from './Dashboard';

// Create navigators
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Home Stack Navigator - Contains all the main app screens except Marketplace
const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f0fff0',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 3,
        },
        headerTintColor: '#003366',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        cardStyle: {
          backgroundColor: '#f0fff0',
        },
      }}
    >
      <Stack.Screen 
        name="Dashboard" 
        component={Dashboard} 
        options={{ title: 'LANDGOLD Dashboard' }}
      />
      <Stack.Screen 
        name="CameraScanner" 
        component={CameraScanner} 
        options={{ title: 'Certificate Scanner' }}
      />
      <Stack.Screen 
        name="CertificateDetails" 
        component={CertificateDetails} 
        options={{ title: 'Certificate Details' }}
      />
      <Stack.Screen 
        name="PropertyDNA" 
        component={PropertyDNA} 
        options={{ title: 'Property DNA' }}
      />
      <Stack.Screen 
        name="PropertyDetails" 
        component={PropertyDetails} 
        options={{ title: 'Property Details' }}
      />
      <Stack.Screen 
        name="ShadowTransfer" 
        component={ShadowTransfer} 
        options={{ title: 'Shadow Transfer' }}
      />
      <Stack.Screen 
        name="LegalTimeline" 
        component={LegalTimeline} 
        options={{ title: 'Legal Timeline' }}
      />
      <Stack.Screen 
        name="BoundaryChecker" 
        component={BoundaryChecker} 
        options={{ title: 'Boundary Checker' }}
      />
      <Stack.Screen 
        name="Profile" 
        component={Profile} 
        options={{ title: 'Profile' }}
      />
      <Stack.Screen 
        name="Settings" 
        component={Settings} 
        options={{ title: 'Settings' }}
      />
      <Stack.Screen 
        name="HelpSupport" 
        component={HelpSupport} 
        options={{ title: 'Help & Support' }}
      />
    </Stack.Navigator>
  );
};

// Marketplace Stack Navigator - Only contains Marketplace related screens
const MarketplaceStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f0fff0',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 3,
        },
        headerTintColor: '#003366',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        cardStyle: {
          backgroundColor: '#f0fff0',
        },
      }}
    >
      <Stack.Screen 
        name="Marketplace" 
        component={Marketplace} 
        options={{ title: 'Secure Marketplace' }}
      />
      <Stack.Screen 
        name="PropertyDetails" 
        component={PropertyDetails} 
        options={{ title: 'Property Details' }}
      />
    </Stack.Navigator>
  );
};

// Main Tab Navigator - Separate Home and Marketplace
const AppTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#003366',
        tabBarInactiveTintColor: '#666666',
        tabBarStyle: {
          backgroundColor: '#ffffff',
          borderTopWidth: 1,
          borderTopColor: '#e0e0e0',
          paddingBottom: 5,
          paddingTop: 5,
          height: 60,
        },
        headerShown: false,
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeStack} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
        name="Marketplace" 
        component={MarketplaceStack} 
        options={{
          tabBarLabel: 'Marketplace',
          tabBarIcon: ({ color, size }) => (
            <Icon name="store" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppTabs;