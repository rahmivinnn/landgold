/**
 * Overlay Helper Utility
 * Provides functions to manage overlays and prevent UI collisions
 */

/**
 * Calculate safe area insets for different devices
 */
export const getSafeAreaInsets = () => {
  // For now, returning standard values
  // In a real app, this would use react-native-safe-area-context
  return {
    top: 50,
    bottom: 20,
    left: 10,
    right: 10,
  };
};

/**
 * Calculate proper positioning for dropdown menus
 * @param {Object} triggerPosition - Position of the element that triggers the dropdown
 * @param {Object} menuDimensions - Width and height of the dropdown menu
 * @param {Object} screenSize - Current screen dimensions
 */
export const calculateDropdownPosition = (triggerPosition, menuDimensions, screenSize) => {
  const { x, y, width, height } = triggerPosition;
  const { width: menuWidth, height: menuHeight } = menuDimensions;
  const { width: screenWidth, height: screenHeight } = screenSize;

  let position = {
    top: y + height + 8,
    right: 15,
  };

  if (position.right + menuWidth > screenWidth) {
    position.right = screenWidth - menuWidth - 15;
  }

  if (position.top + menuHeight > screenHeight - 50) {
    position.top = y - menuHeight - 8;
  }

  return position;
};

/**
 * Ensure element stays within screen bounds
 * @param {Object} elementPosition - Current position of the element
 * @param {Object} elementSize - Width and height of the element
 * @param {Object} screenSize - Current screen dimensions
 */
export const constrainToScreenBounds = (elementPosition, elementSize, screenSize) => {
  const { x, y } = elementPosition;
  const { width, height } = elementSize;
  const { width: screenWidth, height: screenHeight } = screenSize;

  let constrainedPosition = { ...elementPosition };

  // Constrain horizontal position
  if (x < 0) {
    constrainedPosition.x = 0;
  } else if (x + width > screenWidth) {
    constrainedPosition.x = screenWidth - width;
  }

  // Constrain vertical position
  if (y < 0) {
    constrainedPosition.y = 0;
  } else if (y + height > screenHeight) {
    constrainedPosition.y = screenHeight - height;
  }

  return constrainedPosition;
};

/**
 * Add proper overlay to prevent interaction with background elements
 * @param {Function} onClose - Callback when overlay is clicked
 */
export const renderOverlay = (onClose) => {
  return {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    zIndex: 999,
  };
};

export default {
  getSafeAreaInsets,
  calculateDropdownPosition,
  constrainToScreenBounds,
  renderOverlay,
};