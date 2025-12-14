import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  StatusBar,
  Switch,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Profile = ({ navigation }) => {
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = React.useState(false);

  const userProfile = {
    name: 'Budiono Siregar',
    role: 'Agent Account',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    following: 232,
    followers: 232,
    totalProperty: 823,
    totalIncome: '$1,400k',
    totalViews: '83,923',
  };

  const otherInfoItems = [
    { id: 1, title: 'Notification', icon: 'notifications', hasSwitch: true, switchValue: notificationsEnabled, onSwitchChange: setNotificationsEnabled },
    { id: 2, title: 'Language', icon: 'language', hasArrow: true },
    { id: 3, title: 'Dark Mode', icon: 'dark-mode', hasSwitch: true, switchValue: darkModeEnabled, onSwitchChange: setDarkModeEnabled },
    { id: 4, title: 'Terms and Conditions of Use', icon: 'description', hasArrow: true },
    { id: 5, title: 'Protection Policy', icon: 'security', hasArrow: true },
  ];

  const financeItems = [
    { id: 1, title: 'Payment & Payout', icon: 'payment', hasArrow: true },
    { id: 2, title: 'Compare Mortgage Rates', icon: 'compare-arrows', hasArrow: true },
  ];

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#4CAF50" barStyle="light-content" />
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Profile Header */}
        <View style={styles.profileSection}>
          <View style={styles.profileHeader}>
            <Image 
              source={{ uri: userProfile.avatar }}
              style={styles.avatar}
            />
            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>{userProfile.name}</Text>
              <Text style={styles.profileRole}>{userProfile.role}</Text>
            </View>
          </View>
          
          <View style={styles.followStats}>
            <View style={styles.followItem}>
              <Text style={styles.followNumber}>{userProfile.following}</Text>
              <Text style={styles.followLabel}>Following</Text>
            </View>
            <View style={styles.followItem}>
              <Text style={styles.followNumber}>{userProfile.followers}</Text>
              <Text style={styles.followLabel}>Followers</Text>
            </View>
          </View>
          
          <View style={styles.actionButtons}>
            <TouchableOpacity style={styles.manageButton}>
              <Text style={styles.manageButtonText}>Manage Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.detailButton}>
              <Text style={styles.detailButtonText}>Detail</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <View style={styles.statIcon}>
                <Icon name="home" size={20} color="#4CAF50" />
              </View>
              <View style={styles.statInfo}>
                <Text style={styles.statNumber}>{userProfile.totalProperty}</Text>
                <Text style={styles.statLabel}>Total Property</Text>
              </View>
            </View>
            <View style={styles.statItem}>
              <View style={styles.statIcon}>
                <Icon name="attach-money" size={20} color="#4CAF50" />
              </View>
              <View style={styles.statInfo}>
                <Text style={styles.statNumber}>{userProfile.totalIncome}</Text>
                <Text style={styles.statLabel}>Total Income</Text>
              </View>
            </View>
            <View style={styles.statItem}>
              <View style={styles.statIcon}>
                <Icon name="visibility" size={20} color="#4CAF50" />
              </View>
              <View style={styles.statInfo}>
                <Text style={styles.statNumber}>{userProfile.totalViews}</Text>
                <Text style={styles.statLabel}>Total Views</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Other Information Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Other Information</Text>
          {otherInfoItems.map((item) => (
            <TouchableOpacity key={item.id} style={styles.menuItem}>
              <View style={styles.menuLeft}>
                <Icon name={item.icon} size={20} color="#666" />
                <Text style={styles.menuText}>{item.title}</Text>
              </View>
              <View style={styles.menuRight}>
                {item.hasSwitch ? (
                  <Switch
                    value={item.switchValue}
                    onValueChange={item.onSwitchChange}
                    trackColor={{ false: '#ccc', true: '#4CAF50' }}
                    thumbColor="#fff"
                  />
                ) : item.hasArrow ? (
                  <Icon name="keyboard-arrow-right" size={20} color="#666" />
                ) : null}
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Finances Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Finances</Text>
          {financeItems.map((item) => (
            <TouchableOpacity key={item.id} style={styles.menuItem}>
              <View style={styles.menuLeft}>
                <Icon name={item.icon} size={20} color="#666" />
                <Text style={styles.menuText}>{item.title}</Text>
              </View>
              <View style={styles.menuRight}>
                {item.hasArrow && (
                  <Icon name="keyboard-arrow-right" size={20} color="#666" />
                )}
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      
      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="home" size={24} color="#ccc" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="explore" size={24} color="#ccc" />
          <Text style={styles.navText}>Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="favorite-border" size={24} color="#ccc" />
          <Text style={styles.navText}>Wishlist</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navItem, styles.activeNavItem]}>
          <Icon name="person" size={24} color="#4CAF50" />
          <Text style={[styles.navText, styles.activeNavText]}>Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    flex: 1,
  },
  profileSection: {
    backgroundColor: '#4CAF50',
    paddingTop: 40,
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 2,
  },
  profileRole: {
    color: '#fff',
    fontSize: 14,
    opacity: 0.8,
  },
  followStats: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    gap: 40,
  },
  followItem: {
    alignItems: 'center',
  },
  followNumber: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  followLabel: {
    color: '#fff',
    fontSize: 12,
    opacity: 0.8,
    marginTop: 2,
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
  },
  manageButton: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingVertical: 10,
    alignItems: 'center',
  },
  manageButtonText: {
    color: '#4CAF50',
    fontSize: 14,
    fontWeight: '600',
  },
  detailButton: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  detailButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  statIcon: {
    width: 32,
    height: 32,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  statInfo: {
    flex: 1,
  },
  statNumber: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  statLabel: {
    color: '#fff',
    fontSize: 10,
    opacity: 0.8,
  },
  section: {
    backgroundColor: '#fff',
    marginTop: 15,
    paddingVertical: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  menuText: {
    fontSize: 14,
    color: '#333',
    marginLeft: 15,
  },
  menuRight: {
    alignItems: 'center',
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 5,
  },
  activeNavItem: {
    // Active state styling handled by icon and text color
  },
  navText: {
    fontSize: 10,
    color: '#ccc',
    marginTop: 2,
  },
  activeNavText: {
    color: '#4CAF50',
  },
});

export default Profile;