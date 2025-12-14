const express = require('express');
const { 
  getProperties, 
  getPropertyById, 
  createProperty, 
  updateProperty, 
  deleteProperty,
  getUserProperties
} = require('../controllers/propertyController');
const { protect } = require('../middleware/auth');

const router = express.Router();

// Public routes
router.get('/', getProperties);
router.get('/:id', getPropertyById);

// Protected routes
router.route('/')
  .post(protect, createProperty);

router.route('/user/my-properties')
  .get(protect, getUserProperties);

router.route('/:id')
  .put(protect, updateProperty)
  .delete(protect, deleteProperty);

module.exports = router;