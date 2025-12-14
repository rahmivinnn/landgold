const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Generate JWT token
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET || 'landgold_secret', {
    expiresIn: '30d'
  });
};

// Send OTP (simulated)
exports.sendOTP = async (req, res) => {
  try {
    const { phone } = req.body;
    
    if (!phone) {
      return res.status(400).json({ 
        success: false, 
        message: 'Phone number is required' 
      });
    }

    // In a real app, you would send an actual OTP via SMS
    // For now, we'll simulate this
    res.status(200).json({
      success: true,
      message: 'OTP sent successfully',
      phone
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

// Verify OTP
exports.verifyOTP = async (req, res) => {
  try {
    const { phone, otp } = req.body;
    
    if (!phone || !otp) {
      return res.status(400).json({ 
        success: false, 
        message: 'Phone number and OTP are required' 
      });
    }

    // In a real app, you would verify the actual OTP
    // For simulation, we accept any 6-digit OTP
    if (otp.length !== 6 || isNaN(otp)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Invalid OTP format' 
      });
    }

    // Find or create user
    let user = await User.findOne({ phone });
    
    if (!user) {
      user = await User.create({
        phone,
        name: `User ${phone.slice(-4)}`, // Simple name based on phone
        verified: true
      });
    } else {
      user.verified = true;
      user.lastLogin = Date.now();
      await user.save();
    }

    // Generate token
    const token = generateToken(user._id);

    res.status(200).json({
      success: true,
      message: 'Authentication successful',
      token,
      user: {
        id: user._id,
        phone: user.phone,
        name: user.name,
        verified: user.verified
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

// Get user profile
exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-__v');
    
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    res.status(200).json({
      success: true,
      user
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};