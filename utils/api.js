import AsyncStorage from '@react-native-async-storage/async-storage';

// Base API URL - in production this would be your backend URL
const BASE_URL = 'http://localhost:5000/api';

// Helper function to make API requests
const apiRequest = async (endpoint, options = {}) => {
  try {
    const url = `${BASE_URL}${endpoint}`;
    
    // Get token from storage
    const token = await AsyncStorage.getItem('token');
    
    // Default headers
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    };
    
    // Add authorization header if token exists
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    
    // Merge options with defaults
    const config = {
      headers,
      ...options,
    };
    
    const response = await fetch(url, config);
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'API request failed');
    }
    
    return data;
  } catch (error) {
    console.error('API request error:', error);
    throw error;
  }
};

// Auth API functions
export const authAPI = {
  sendOTP: async (phone) => {
    return apiRequest('/auth/send-otp', {
      method: 'POST',
      body: JSON.stringify({ phone }),
    });
  },
  
  verifyOTP: async (phone, otp) => {
    return apiRequest('/auth/verify-otp', {
      method: 'POST',
      body: JSON.stringify({ phone, otp }),
    });
  },
  
  getProfile: async () => {
    return apiRequest('/auth/profile');
  },
};

// Property API functions
export const propertyAPI = {
  getProperties: async (params = {}) => {
    const queryParams = new URLSearchParams(params).toString();
    const endpoint = `/properties${queryParams ? `?${queryParams}` : ''}`;
    return apiRequest(endpoint);
  },
  
  getPropertyById: async (id) => {
    return apiRequest(`/properties/${id}`);
  },
  
  createProperty: async (propertyData) => {
    return apiRequest('/properties', {
      method: 'POST',
      body: JSON.stringify(propertyData),
    });
  },
  
  updateProperty: async (id, propertyData) => {
    return apiRequest(`/properties/${id}`, {
      method: 'PUT',
      body: JSON.stringify(propertyData),
    });
  },
  
  deleteProperty: async (id) => {
    return apiRequest(`/properties/${id}`, {
      method: 'DELETE',
    });
  },
  
  getUserProperties: async () => {
    return apiRequest('/properties/user/my-properties');
  },
};

export default apiRequest;