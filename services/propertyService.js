import { propertyAPI } from '../utils/api';

class PropertyService {
  static async getAllProperties(params = {}) {
    try {
      const response = await propertyAPI.getProperties(params);
      return response;
    } catch (error) {
      throw new Error(error.message || 'Failed to fetch properties');
    }
  }

  static async getPropertyById(id) {
    try {
      const response = await propertyAPI.getPropertyById(id);
      return response;
    } catch (error) {
      throw new Error(error.message || 'Failed to fetch property');
    }
  }

  static async createProperty(propertyData) {
    try {
      const response = await propertyAPI.createProperty(propertyData);
      return response;
    } catch (error) {
      throw new Error(error.message || 'Failed to create property');
    }
  }

  static async updateProperty(id, propertyData) {
    try {
      const response = await propertyAPI.updateProperty(id, propertyData);
      return response;
    } catch (error) {
      throw new Error(error.message || 'Failed to update property');
    }
  }

  static async deleteProperty(id) {
    try {
      const response = await propertyAPI.deleteProperty(id);
      return response;
    } catch (error) {
      throw new Error(error.message || 'Failed to delete property');
    }
  }

  static async getUserProperties() {
    try {
      const response = await propertyAPI.getUserProperties();
      return response;
    } catch (error) {
      throw new Error(error.message || 'Failed to fetch user properties');
    }
  }
}

export default PropertyService;