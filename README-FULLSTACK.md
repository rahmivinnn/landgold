# LandGold App - Full Stack Implementation

This is a full-stack implementation of the LandGold property marketplace mobile application with a Node.js/Express backend and React Native frontend.

## Features

### Backend (Node.js/Express)
- RESTful API architecture
- MongoDB with Mongoose for data persistence
- JWT-based authentication
- Property management system
- User management
- API documentation

### Frontend (React Native)
- Clean architecture with separation of concerns
- Context API for state management
- Reusable UI components
- Consistent design system
- API service layer
- Authentication flow (Login, OTP Verification)
- Property marketplace with search and filtering

## Project Structure

```
LandGoldApp/
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── server.js
│   ├── package.json
│   └── .env
├── components/
│   ├── CustomButton.js
│   ├── CustomHeader.js
│   └── CustomInput.js
├── constants/
│   └── Colors.js
├── contexts/
│   └── AuthContext.js
├── services/
│   ├── authService.js
│   └── propertyService.js
├── utils/
│   └── api.js
├── screens/
│   ├── SplashScreen.js
│   ├── Login.js
│   ├── OTPVerification.js
│   ├── MainApp.js
│   ├── Dashboard.js
│   ├── Marketplace.js
│   ├── PropertyDetails.js
│   └── ... (other screens)
└── App.js
```

## Backend Setup

1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file with your configuration:
   ```
   NODE_ENV=development
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/landgold
   JWT_SECRET=your_jwt_secret_here
   ```

4. Start the server:
   ```
   npm start
   ```

## Frontend Setup

1. From the root directory, install dependencies:
   ```
   npm install
   ```

2. Install additional dependencies:
   ```
   npm install @react-native-async-storage/async-storage
   ```

3. Run the app:
   ```
   npx react-native run-android
   ```
   or
   ```
   npx react-native run-ios
   ```

## API Endpoints

### Authentication
- `POST /api/auth/send-otp` - Send OTP to phone number
- `POST /api/auth/verify-otp` - Verify OTP and authenticate user
- `GET /api/auth/profile` - Get authenticated user profile

### Properties
- `GET /api/properties` - Get all properties (with filtering)
- `GET /api/properties/:id` - Get property by ID
- `POST /api/properties` - Create new property (authenticated)
- `PUT /api/properties/:id` - Update property (authenticated)
- `DELETE /api/properties/:id` - Delete property (authenticated)
- `GET /api/properties/user/my-properties` - Get authenticated user's properties

## Key Improvements

1. **Full-Stack Architecture**: Separated backend API from frontend mobile app
2. **Clean Code Organization**: Structured codebase with clear separation of concerns
3. **Consistent Design System**: Unified color palette and component library
4. **Reusable Components**: CustomButton, CustomInput, and other reusable UI elements
5. **State Management**: Context API for global state handling
6. **Service Layer**: Abstracted API calls into service classes
7. **Environment Configuration**: .env file for configuration management
8. **Error Handling**: Comprehensive error handling throughout the application

## Technologies Used

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Tokens (JWT)
- Dotenv

### Frontend
- React Native
- React Navigation
- AsyncStorage
- Context API

## Future Enhancements

- Implement real SMS OTP service (Twilio, etc.)
- Add property image upload functionality
- Implement push notifications
- Add geolocation features
- Integrate with blockchain verification services
- Add admin dashboard
- Implement property search filters
- Add property comparison feature