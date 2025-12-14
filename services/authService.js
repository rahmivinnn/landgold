import AsyncStorage from '@react-native-async-storage/async-storage';
import { authAPI } from '../utils/api';

class AuthService {
  static async login(phone) {
    try {
      const response = await authAPI.sendOTP(phone);
      return response;
    } catch (error) {
      throw new Error(error.message || 'Failed to send OTP');
    }
  }

  static async verifyOTP(phone, otp) {
    try {
      const response = await authAPI.verifyOTP(phone, otp);
      
      if (response.success) {
        // Save token to storage
        await AsyncStorage.setItem('token', response.token);
        return response;
      } else {
        throw new Error(response.message || 'Invalid OTP');
      }
    } catch (error) {
      throw new Error(error.message || 'Failed to verify OTP');
    }
  }

  static async logout() {
    try {
      await AsyncStorage.removeItem('token');
      return { success: true, message: 'Logged out successfully' };
    } catch (error) {
      throw new Error(error.message || 'Failed to logout');
    }
  }

  static async getToken() {
    try {
      return await AsyncStorage.getItem('token');
    } catch (error) {
      return null;
    }
  }

  static async isAuthenticated() {
    const token = await this.getToken();
    return !!token;
  }
}

export default AuthService;