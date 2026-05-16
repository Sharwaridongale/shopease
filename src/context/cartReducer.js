const cartReducer = (state, action) => {
  switch (action.type) {

    case 'ADD_TO_CART': {
      // Check if item already exists in cart
      const existingItem = state.find(item => item.id === action.payload.id);

      if (existingItem) {
        // If yes, just increase quantity by 1
        return state.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      // If no, add it as a new item with quantity 1
      return [...state, { ...action.payload, quantity: 1 }];
    }

    case 'REMOVE_FROM_CART':
      return state.filter(item => item.id !== action.payload);

    case 'UPDATE_QUANTITY':
      return state.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );

    case 'CLEAR_CART':
      return [];

    default:
      return state;
  }
};

export default cartReducer;