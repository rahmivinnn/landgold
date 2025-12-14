import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Dimensions,
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import { renderOverlay } from './utils/overlayHelper';

const { width, height } = Dimensions.get('window');

const CameraScanner = ({ navigation }) => {
  const [scanning, setScanning] = useState(false);
  const cameraRef = useRef(null);

  const handleBarCodeRead = ({ data }) => {
    if (scanning) return;
    
    setScanning(true);
    
    // Simulate blockchain verification
    setTimeout(() => {
      // In a real app, this would connect to the Phantom Anchor blockchain
      const verificationResults = [
        'Authentic',
        'Tampered',
        'Ghosted Copy',
        'Legally Blocked'
      ];
      
      const randomResult = verificationResults[Math.floor(Math.random() * verificationResults.length)];
      
      Alert.alert(
        'Verification Result',
        `${randomResult}`,
        [
          {
            text: 'OK',
            onPress: () => {
              setScanning(false);
              // Navigate to certificate details screen
              navigation.navigate('CertificateDetails', { 
                result: randomResult,
                certificateData: data
              });
            }
          }
        ]
      );
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <RNCamera
        ref={cameraRef}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        onBarCodeRead={handleBarCodeRead}
      />
      <View style={styles.overlay}>
        <View style={styles.topOverlay} />
        <View style={styles.middleContainer}>
          <View style={styles.sideOverlay} />
          <View style={styles.scanArea}>
            <View style={styles.scanBorderTopLeft} />
            <View style={styles.scanBorderTopRight} />
            <View style={styles.scanBorderBottomLeft} />
            <View style={styles.scanBorderBottomRight} />
          </View>
          <View style={styles.sideOverlay} />
        </View>
        <View style={styles.bottomOverlay} />
      </View>
      <View style={styles.instructionContainer}>
        <Text style={styles.instructionText}>
          Position certificate within frame to scan
        </Text>
        <TouchableOpacity 
          style={styles.cancelButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
      
      {/* Proper overlay for alerts to prevent interaction with background */}
      {scanning && (
        <View style={renderOverlay(() => {})} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  preview: {
    flex: 1,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10, // Ensure overlay is above camera but below UI elements
  },
  topOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  middleContainer: {
    flexDirection: 'row',
    height: width * 0.8,
  },
  sideOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  scanArea: {
    width: width * 0.8,
    height: width * 0.8,
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: 'transparent',
    zIndex: 20, // Ensure scan area is above overlay
  },
  scanBorderTopLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderColor: '#00ff00',
    zIndex: 30, // Ensure borders are above scan area
  },
  scanBorderTopRight: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 30,
    height: 30,
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderColor: '#00ff00',
    zIndex: 30,
  },
  scanBorderBottomLeft: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 30,
    height: 30,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderColor: '#00ff00',
    zIndex: 30,
  },
  scanBorderBottomRight: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 30,
    height: 30,
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderColor: '#00ff00',
    zIndex: 30,
  },
  bottomOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  instructionContainer: {
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 40, // Ensure instructions are above all overlays
  },
  instructionText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  cancelButton: {
    backgroundColor: '#C80606', // BTN red color
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 20,
    zIndex: 50, // Ensure cancel button is clickable
  },
  cancelButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CameraScanner;