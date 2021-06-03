import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCart = {
  items: [],
  amount: 0,
};

const cartReducer = (state, action) => {
  console.log("current state");
  console.log(state);

  if (action.type === "ADD") {
    const name = action.item.name;
    const cartItems = [...state.items];

    const duplicatas = state.items.filter((item) => item.name === name);

    // Pas présent dans cart
    if (duplicatas.length === 0) {
      cartItems.push(action.item);
      const amount = state.amount + action.item.price * action.item.amount;
      return { items: cartItems, amount: amount };
    } else {
      cartItems.forEach((item, index) => {
        if (item.name === name) {
          return (cartItems[index].amount += action.item.amount);
        }
        return cartItems[index];
      });
      const amount = state.amount + action.item.price * action.item.amount;
      return { items: cartItems, amount: amount };
    }
  }

  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    const updatedAmount = state.amount - existingCartItem.price;

    let updatedItems;
    if (existingCartItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { existingCartItem, amount: existingCartItem - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      amount: updatedAmount,
    };
  }

  return defaultCart;
};

const CartProvider = (props) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, defaultCart);

  const addItemHandler = (item) => {
    cartDispatch({ type: "ADD", item: item });
  };
  const removeItemHandler = (id) => {
    cartDispatch({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    amount: cartState.amount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
