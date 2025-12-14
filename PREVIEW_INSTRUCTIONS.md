# Preview Instructions

This document explains how to preview the LANDGOLD app with the new tab-based navigation.

## HTML Preview

We've created an HTML preview that demonstrates the new tab-based navigation structure:

- Open [tab-navigation-preview.html](file:///c:/Users/Lenovo/Downloads/mobile%20app/LandGoldApp/tab-navigation-preview.html) in your browser to see how the Home and Marketplace screens are now separated
- Click on the "Home" and "Marketplace" tabs at the bottom to switch between sections
- Notice how each section is completely independent with its own content

## Mobile App Preview

To preview the actual React Native app:

1. **Start the Metro Bundler**:
   ```bash
   cd "c:\Users\Lenovo\Downloads\mobile app\LandGoldApp"
   npx react-native start
   ```

2. **Run on Android**:
   ```bash
   npx react-native run-android
   ```

3. **Run on iOS** (if on Mac):
   ```bash
   npx react-native run-ios
   ```

## What You'll See

With the new tab-based navigation:

1. **Home Tab**: Contains the main dashboard with:
   - Welcome message
   - Statistics cards
   - Quick action buttons
   - Recent activity feed

2. **Marketplace Tab**: Dedicated to property marketplace features:
   - Property listings
   - Search functionality
   - Property cards with pricing information

## Key Improvements

1. **Complete Separation**: Home and Marketplace are now entirely separate sections
2. **Easy Navigation**: Simple tab switching between main sections
3. **Focused Content**: Each section contains only relevant content
4. **Better Organization**: Related features are grouped logically

## Troubleshooting

If you encounter issues:

1. Make sure all dependencies are installed:
   ```bash
   npm install
   ```

2. If there are port conflicts, kill existing processes:
   ```bash
   # On Windows
   Stop-Process -Name "node" -Force -ErrorAction SilentlyContinue
   
   # On Mac/Linux
   killall node
   ```

3. Clear cache if needed:
   ```bash
   npx react-native start --reset-cache
   ```