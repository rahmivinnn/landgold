import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const CustomHeader = ({ title, onBack, showBack = true, showMenu = false, menuItems = [] }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleMenuItemPress = (item) => {
    setMenuVisible(false);
    if (item.onPress) {
      item.onPress();
    }
  };

  return (
    <View style={styles.headerContainer}>
      <View style={styles.header}>
        {showBack && (
          <TouchableOpacity onPress={onBack} style={styles.backButton}>
            <Text style={styles.backText}>←</Text>
          </TouchableOpacity>
        )}
        <Text style={styles.title}>{title}</Text>
        {showMenu && (
          <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
            <Text style={styles.menuText}>⋮</Text>
          </TouchableOpacity>
        )}
        {!showMenu && <View style={styles.placeholder} />}
      </View>

      {menuVisible && (
        <>
          <TouchableOpacity 
            style={styles.overlay} 
            onPress={() => setMenuVisible(false)}
            activeOpacity={1}
          />
          <View style={styles.dropdownMenu}>
            {menuItems.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.menuItem,
                  index === menuItems.length - 1 && styles.lastMenuItem
                ]}
                onPress={() => handleMenuItemPress(item)}
              >
                <Text style={styles.menuItemText}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    zIndex: 100, // Ensure header stays above other content
    elevation: 10, // Android elevation
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    // Add shadow for better visual separation
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  backButton: {
    padding: 10,
    zIndex: 10, // Ensure back button is clickable
  },
  backText: {
    fontSize: 24,
    color: '#003366', // BTN blue color
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#003366', // BTN blue color
    textAlign: 'center',
    flex: 1,
    marginHorizontal: 10,
  },
  menuButton: {
    padding: 10,
    zIndex: 10, // Ensure menu button is clickable
  },
  menuText: {
    fontSize: 24,
    color: '#003366', // BTN blue color
  },
  placeholder: {
    width: 40, // To balance the layout
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'transparent',
    zIndex: 999,
  },
  dropdownMenu: {
    position: 'absolute',
    right: 15,
    top: 70,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    paddingVertical: 4,
    minWidth: 150,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    zIndex: 1000,
  },
  menuItem: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: '#e5e7eb',
  },
  lastMenuItem: {
    borderBottomWidth: 0,
  },
  menuItemText: {
    fontSize: 14,
    color: '#374151',
  },
});

export default CustomHeader;