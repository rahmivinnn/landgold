import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Alert,
  RefreshControl,
  TextInput,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropertyService from './services/propertyService';

const Marketplace = ({ navigation }) => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      setLoading(true);
      // Generate modern property listings
      const mockProperties = Array.from({ length: 50 }, (_, i) => ({
        id: `${i + 1}`,
        title: `${['Whispering Pines Lakeview Estate', 'Modern Downtown Loft', 'Sunset Hills Villa', 'Oceanview Penthouse', 'Garden City Townhouse'][i % 5]}`,
        price: `$${(Math.floor(Math.random() * 900) + 100).toLocaleString()},000`,
        location: `${['9101 Sunset Blvd', '2847 Oak Street', '1523 Pine Avenue', '4567 Lake Drive', '8901 Garden Way'][i % 5]}, ${['Los Angeles', 'San Francisco', 'Seattle', 'Portland', 'Denver'][i % 5]}, CA ${90000 + i}`,
        beds: Math.floor(Math.random() * 5) + 1,
        baths: Math.floor(Math.random() * 4) + 1,
        sqft: `${(Math.floor(Math.random() * 5000) + 1000).toLocaleString()}`,
        rating: (4.0 + Math.random() * 1).toFixed(1),
        reviews: Math.floor(Math.random() * 200) + 23,
        image: `https://images.unsplash.com/photo-${1564013799919 + (i * 100)}?w=400&h=300&fit=crop`,
        verified: i % 3 !== 0,
        forSale: i % 4 !== 3,
        agent: {
          name: ['Budiono Siregar', 'Sarah Johnson', 'Michael Chen', 'Emma Davis', 'James Wilson'][i % 5],
          avatar: `https://images.unsplash.com/photo-${1507003211169 + (i * 50)}?w=100&h=100&fit=crop&crop=face`
        }
      }));
      setProperties(mockProperties);
    } catch (error) {
      Alert.alert('Error', 'Failed to load properties');
    } finally {
      setLoading(false);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchProperties();
    setRefreshing(false);
  };

  const renderProperty = ({ item }) => (
    <TouchableOpacity 
      style={styles.propertyCard}
      onPress={() => navigation.navigate('PropertyDetails', { property: item })}
    >
      <View style={styles.imageContainer}>
        <Image 
          source={{ uri: item.image }}
          style={styles.propertyImage}
          resizeMode="cover"
        />
        <View style={styles.saleTag}>
          <Text style={styles.saleText}>{item.forSale ? 'For Sale' : 'For Rent'}</Text>
        </View>
      </View>
      
      <View style={styles.propertyInfo}>
        <Text style={styles.propertyTitle} numberOfLines={1}>{item.title}</Text>
        <Text style={styles.propertyPrice}>{item.price}</Text>
        
        <View style={styles.locationRow}>
          <Icon name="location-on" size={14} color="#666" />
          <Text style={styles.propertyLocation} numberOfLines={1}>{item.location}</Text>
        </View>
        
        <View style={styles.propertySpecs}>
          <View style={styles.specItem}>
            <Icon name="hotel" size={16} color="#666" />
            <Text style={styles.specText}>{item.beds} Bed</Text>
          </View>
          <View style={styles.specItem}>
            <Icon name="bathtub" size={16} color="#666" />
            <Text style={styles.specText}>{item.baths} Bath</Text>
          </View>
          <View style={styles.specItem}>
            <Icon name="square-foot" size={16} color="#666" />
            <Text style={styles.specText}>{item.sqft} sqft</Text>
          </View>
        </View>
        
        <View style={styles.ratingRow}>
          <View style={styles.rating}>
            <Icon name="star" size={14} color="#FFD700" />
            <Text style={styles.ratingText}>{item.rating} Rating ({item.reviews} review)</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#4CAF50" barStyle="light-content" />
      
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View style={styles.userInfo}>
            <Text style={styles.greeting}>Good Morning</Text>
            <Text style={styles.userName}>Budiono Siregar</Text>
          </View>
          <TouchableOpacity style={styles.notificationButton}>
            <Icon name="notifications" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
        
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Icon name="search" size={20} color="#666" style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search"
              placeholderTextColor="#999"
            />
          </View>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>Villa</Text>
            <Icon name="keyboard-arrow-down" size={16} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterIconButton}>
            <Icon name="tune" size={20} color="#4CAF50" />
          </TouchableOpacity>
        </View>
        
        <View style={styles.categoryTabs}>
          <TouchableOpacity style={[styles.categoryTab, styles.activeTab]}>
            <Icon name="home" size={20} color="#4CAF50" />
            <Text style={[styles.categoryText, styles.activeTabText]}>House</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryTab}>
            <Icon name="apartment" size={20} color="#666" />
            <Text style={styles.categoryText}>Villa</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryTab}>
            <Icon name="business" size={20} color="#666" />
            <Text style={styles.categoryText}>Apart...</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryTab}>
            <Icon name="hotel" size={20} color="#666" />
            <Text style={styles.categoryText}>Hotel</Text>
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity style={styles.allCategoryButton}>
          <Text style={styles.allCategoryText}>All Category</Text>
          <Icon name="keyboard-arrow-right" size={16} color="#666" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={properties}
        renderItem={renderProperty}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.propertyList}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#4CAF50',
    paddingTop: 40,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  userInfo: {
    flex: 1,
  },
  greeting: {
    color: '#fff',
    fontSize: 14,
    opacity: 0.9,
  },
  userName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 2,
  },
  notificationButton: {
    padding: 8,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    gap: 10,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 15,
    height: 45,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    gap: 4,
  },
  filterText: {
    color: '#666',
    fontSize: 14,
  },
  filterIconButton: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,
  },
  categoryTabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  categoryTab: {
    alignItems: 'center',
    padding: 10,
    minWidth: 60,
  },
  activeTab: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 15,
  },
  categoryText: {
    color: '#fff',
    fontSize: 12,
    marginTop: 4,
    opacity: 0.7,
  },
  activeTabText: {
    opacity: 1,
    fontWeight: '600',
  },
  allCategoryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 10,
    padding: 12,
  },
  allCategoryText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  propertyList: {
    padding: 15,
    paddingBottom: 20,
  },
  propertyCard: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    overflow: 'hidden',
  },
  imageContainer: {
    position: 'relative',
  },
  propertyImage: {
    width: '100%',
    height: 200,
    backgroundColor: '#f0f0f0',
  },
  saleTag: {
    position: 'absolute',
    top: 15,
    left: 15,
    backgroundColor: '#4CAF50',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  saleText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  propertyInfo: {
    padding: 15,
  },
  propertyTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  propertyPrice: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
    marginBottom: 8,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  propertyLocation: {
    fontSize: 14,
    color: '#666',
    marginLeft: 4,
    flex: 1,
  },
  propertySpecs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  specItem: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  specText: {
    fontSize: 12,
    color: '#666',
    marginLeft: 4,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 12,
    color: '#666',
    marginLeft: 4,
  },
});

export default Marketplace;