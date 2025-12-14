import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const PropertyDetails = ({ route, navigation }) => {
  const { property } = route.params;

  const propertyDetails = {
    description: 'Whispering Pines Lakeview Estate offers serene, luxury living with breathtaking lake views, surrounded by towering pines and peaceful natural beauty.',
    agent: {
      name: 'Budiono Siregar',
      verified: true,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    },
    features: [
      'Security 24/7',
      'Clean Water',
      'Electricity', 
      'Road Access',
      'Near School',
      'Near Hospital'
    ],
    legalStatus: 'Clean Certificate',
    lastVerified: '15 Nov 2024',
    boundaryIntegrity: 'Verified',
    anchorHealth: 'Excellent',
    images: [
      property.image,
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400',
      'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=400'
    ]
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#4CAF50" barStyle="light-content" />
      
      {/* Header with Image */}
      <View style={styles.imageContainer}>
        <Image 
          source={{ uri: property.image }}
          style={styles.headerImage}
          resizeMode="cover"
        />
        <View style={styles.headerOverlay}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Icon name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.shareButton}>
            <Icon name="share" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Property Info Card */}
        <View style={styles.propertyCard}>
          <Text style={styles.propertyTitle}>{property.title}</Text>
          <View style={styles.locationRow}>
            <Icon name="location-on" size={16} color="#666" />
            <Text style={styles.propertyLocation}>{property.location}</Text>
          </View>
          
          <View style={styles.ratingRow}>
            <Icon name="star" size={16} color="#FFD700" />
            <Text style={styles.ratingText}>{property.rating} Rating ({property.reviews} review)</Text>
          </View>
          
          <View style={styles.propertySpecs}>
            <View style={styles.specItem}>
              <Icon name="square-foot" size={16} color="#666" />
              <Text style={styles.specText}>{property.sqft} sqft</Text>
            </View>
            <View style={styles.specItem}>
              <Icon name="hotel" size={16} color="#666" />
              <Text style={styles.specText}>{property.beds} Bedroom</Text>
            </View>
            <View style={styles.specItem}>
              <Icon name="bathtub" size={16} color="#666" />
              <Text style={styles.specText}>{property.baths} Bathroom</Text>
            </View>
          </View>
          
          {/* Agent Info */}
          <View style={styles.agentSection}>
            <Text style={styles.agentLabel}>Agent</Text>
            <View style={styles.agentInfo}>
              <Image 
                source={{ uri: propertyDetails.agent.avatar }}
                style={styles.agentAvatar}
              />
              <View style={styles.agentDetails}>
                <Text style={styles.agentName}>{propertyDetails.agent.name}</Text>
                {propertyDetails.agent.verified && (
                  <View style={styles.verifiedBadge}>
                    <Icon name="verified" size={12} color="#4CAF50" />
                  </View>
                )}
              </View>
              <TouchableOpacity style={styles.callButton}>
                <Icon name="phone" size={16} color="#4CAF50" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.messageButton}>
                <Icon name="message" size={16} color="#4CAF50" />
              </TouchableOpacity>
            </View>
          </View>
          
          {/* Description */}
          <View style={styles.descriptionSection}>
            <Text style={styles.sectionTitle}>Description</Text>
            <Text style={styles.description}>{propertyDetails.description}</Text>
            <TouchableOpacity>
              <Text style={styles.readMore}>Read More</Text>
            </TouchableOpacity>
          </View>
          
          {/* See on maps */}
          <TouchableOpacity style={styles.mapButton}>
            <Text style={styles.mapButtonText}>See on maps</Text>
            <Icon name="keyboard-arrow-right" size={16} color="#666" />
          </TouchableOpacity>
        </View>
        
        {/* Price and Buy Button */}
        <View style={styles.priceSection}>
          <View style={styles.priceInfo}>
            <Text style={styles.priceLabel}>Price</Text>
            <Text style={styles.price}>{property.price}</Text>
          </View>
          <TouchableOpacity style={styles.buyButton}>
            <Text style={styles.buyButtonText}>Buy Now</Text>
          </TouchableOpacity>
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
        <TouchableOpacity style={styles.navItem}>
          <Icon name="person" size={24} color="#ccc" />
          <Text style={styles.navText}>Account</Text>
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
  imageContainer: {
    position: 'relative',
    height: 300,
  },
  headerImage: {
    width: '100%',
    height: '100%',
  },
  headerOverlay: {
    position: 'absolute',
    top: 40,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shareButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    marginTop: -20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#fff',
  },
  propertyCard: {
    padding: 20,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  propertyTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  propertyLocation: {
    fontSize: 14,
    color: '#666',
    marginLeft: 4,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  ratingText: {
    fontSize: 12,
    color: '#666',
    marginLeft: 4,
  },
  propertySpecs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
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
  agentSection: {
    marginBottom: 20,
  },
  agentLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  agentInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  agentAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  agentDetails: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  agentName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginRight: 5,
  },
  verifiedBadge: {
    // Icon styling handled inline
  },
  callButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  messageButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  descriptionSection: {
    marginBottom: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 8,
  },
  readMore: {
    fontSize: 14,
    color: '#4CAF50',
    fontWeight: '500',
  },
  mapButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
  },
  mapButtonText: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  priceSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  priceInfo: {
    flex: 1,
  },
  priceLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 2,
  },
  price: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
  },
  buyButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 25,
    paddingHorizontal: 30,
    paddingVertical: 12,
  },
  buyButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
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
  navText: {
    fontSize: 10,
    color: '#ccc',
    marginTop: 2,
  },
});

export default PropertyDetails;