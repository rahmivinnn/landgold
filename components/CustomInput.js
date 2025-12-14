import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';
import { COLORS, SIZES, FONTS } from '../constants/Colors';

const CustomInput = ({
  label,
  placeholder,
  value,
  onChangeText,
  keyboardType = 'default',
  secureTextEntry = false,
  multiline = false,
  numberOfLines = 1,
  error = '',
  ...props
}) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[
          styles.input,
          error && styles.inputError,
          multiline && styles.multilineInput,
        ]}
        placeholder={placeholder}
        placeholderTextColor={COLORS.TEXT_LIGHT}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        multiline={multiline}
        numberOfLines={numberOfLines}
        {...props}
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: SIZES.SPACING_MEDIUM,
  },
  label: {
    fontSize: SIZES.FONT_LARGE,
    color: COLORS.TEXT_DARK,
    marginBottom: SIZES.SPACING_SMALL,
    fontWeight: FONTS.BOLD,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: COLORS.BORDER_DEFAULT,
    borderRadius: SIZES.RADIUS_MEDIUM,
    paddingHorizontal: SIZES.SPACING_MEDIUM,
    fontSize: SIZES.FONT_LARGE,
    backgroundColor: COLORS.BACKGROUND_GRAY,
    color: COLORS.TEXT_DARK,
  },
  inputError: {
    borderColor: COLORS.BTN_RED,
  },
  multilineInput: {
    height: 100,
    paddingTop: SIZES.SPACING_MEDIUM,
    textAlignVertical: 'top',
  },
  errorText: {
    color: COLORS.BTN_RED,
    fontSize: SIZES.FONT_SMALL,
    marginTop: SIZES.SPACING_XSMALL,
  },
});

export default CustomInput;