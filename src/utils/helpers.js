// Format price to show rupee sign and 2 decimal places
export const formatPrice = (price) => {
  return `₹${(price * 83).toFixed(2)}`;
};

// Capitalize first letter of a string
export const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// Calculate total price of all cart items
export const calculateTotal = (cartItems) => {
  return cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
};