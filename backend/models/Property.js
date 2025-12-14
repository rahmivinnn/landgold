const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  currency: {
    type: String,
    default: 'IDR'
  },
  location: {
    address: String,
    city: String,
    province: String,
    country: String,
    coordinates: {
      lat: Number,
      lng: Number
    }
  },
  area: {
    size: Number,
    unit: {
      type: String,
      default: 'sqm'
    }
  },
  images: [{
    url: String,
    caption: String
  }],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  verified: {
    type: Boolean,
    default: false
  },
  certificate: {
    number: String,
    issuedDate: Date,
    expiryDate: Date,
    authority: String
  },
  status: {
    type: String,
    enum: ['available', 'under_offer', 'sold'],
    default: 'available'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Property', propertySchema);