const mongoose = require('mongoose');
const Property = require('./models/Property');
const User = require('./models/User');
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/landgold', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', async () => {
  console.log('Connected to MongoDB');
  
  try {
    // Clear existing data
    await User.deleteMany({});
    await Property.deleteMany({});
    console.log('Cleared existing data');
    
    // Create sample users
    const users = await User.insertMany([
      {
        phone: '+6281234567890',
        name: 'John Doe',
        email: 'john@example.com',
        verified: true
      },
      {
        phone: '+6281234567891',
        name: 'Jane Smith',
        email: 'jane@example.com',
        verified: true
      }
    ]);
    
    console.log('Created sample users');
    
    // Create sample properties
    const properties = await Property.insertMany([
      {
        title: 'Luxury Villa in Jakarta',
        description: 'Beautiful luxury villa in the heart of Jakarta with modern amenities',
        price: 5000000000,
        location: {
          address: 'Jl. Sudirman No. 1',
          city: 'Jakarta',
          province: 'DKI Jakarta',
          country: 'Indonesia',
          coordinates: {
            lat: -6.21462,
            lng: 106.84513
          }
        },
        area: {
          size: 800,
          unit: 'sqm'
        },
        owner: users[0]._id,
        verified: true,
        certificate: {
          number: 'LC-789456',
          issuedDate: new Date('2020-01-15'),
          expiryDate: new Date('2030-01-15'),
          authority: 'Badan Pertanahan Nasional'
        },
        status: 'available'
      },
      {
        title: 'Commercial Land in Bandung',
        description: 'Prime commercial land in central Bandung suitable for business',
        price: 2500000000,
        location: {
          address: 'Jl. Braga No. 10',
          city: 'Bandung',
          province: 'Jawa Barat',
          country: 'Indonesia',
          coordinates: {
            lat: -6.91746,
            lng: 107.61915
          }
        },
        area: {
          size: 1200,
          unit: 'sqm'
        },
        owner: users[1]._id,
        verified: true,
        certificate: {
          number: 'CL-123789',
          issuedDate: new Date('2019-05-20'),
          expiryDate: new Date('2029-05-20'),
          authority: 'Badan Pertanahan Nasional'
        },
        status: 'available'
      },
      {
        title: 'Apartment Complex in Surabaya',
        description: 'Modern apartment complex with excellent facilities',
        price: 8000000000,
        location: {
          address: 'Jl. Tunjungan No. 50',
          city: 'Surabaya',
          province: 'Jawa Timur',
          country: 'Indonesia',
          coordinates: {
            lat: -7.25747,
            lng: 112.75209
          }
        },
        area: {
          size: 2500,
          unit: 'sqm'
        },
        owner: users[0]._id,
        verified: true,
        certificate: {
          number: 'AC-456321',
          issuedDate: new Date('2021-03-10'),
          expiryDate: new Date('2031-03-10'),
          authority: 'Badan Pertanahan Nasional'
        },
        status: 'under_offer'
      }
    ]);
    
    console.log('Created sample properties');
    console.log('Database seeding completed!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
});