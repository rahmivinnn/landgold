import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { COLORS, SIZES } from '../constants/Colors';

const CustomButton = ({
  title,
  onPress,
  variant = 'primary',
  disabled = false,
  loading = false,
}) => {
  const getButtonStyle = () => {
    if (disabled || loading) {
      return [styles.button, styles.disabledButton];
    }
    
    switch (variant) {
      case 'secondary':
        return [styles.button, styles.secondaryButton];
      case 'outline':
        return [styles.button, styles.outlineButton];
      case 'danger':
        return [styles.button, styles.dangerButton];
      default:
        return [styles.button, styles.primaryButton];
    }
  };

  const getTextStyle = () => {
    if (loading) {
      return [styles.buttonText, styles.loadingText];
    }
    
    switch (variant) {
      case 'outline':
        return [styles.buttonText, styles.outlineButtonText];
      default:
        return styles.buttonText;
    }
  };

  return (
    <TouchableOpacity
      style={getButtonStyle()}
      onPress={onPress}
      disabled={disabled || loading}
    >
      {loading ? (
        <ActivityIndicator color={COLORS.BACKGROUND_WHITE} size="small" />
      ) : (
        <Text style={getTextStyle()}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: SIZES.SPACING_LARGE,
    borderRadius: SIZES.RADIUS_MEDIUM,
    alignItems: 'center',
    marginBottom: SIZES.SPACING_MEDIUM,
    minWidth: 200,
  },
  primaryButton: {
    backgroundColor: COLORS.BTN_BLUE, // BTN blue color
  },
  secondaryButton: {
    backgroundColor: COLORS.STATUS_SUCCESS, // Green color
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: COLORS.BTN_RED, // BTN red color
  },
  dangerButton: {
    backgroundColor: COLORS.STATUS_DANGER, // Purple color
  },
  disabledButton: {
    backgroundColor: '#cccccc',
  },
  buttonText: {
    color: COLORS.BACKGROUND_WHITE,
    fontSize: SIZES.FONT_LARGE,
    fontWeight: FONTS.BOLD,
  },
  outlineButtonText: {
    color: COLORS.BTN_RED, // BTN red color
  },
  loadingText: {
    color: COLORS.BACKGROUND_WHITE,
  },
});

export default CustomButton;