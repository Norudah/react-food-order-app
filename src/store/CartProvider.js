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
    const findRightIndex = (item) => item.id === action.id;

    const itemIndex = state.items.findIndex(findRightIndex);
    const selectedItem = state.items[itemIndex];

    let updatedItems = [];
    const updatedAmount = state.amount - selectedItem.price;

    if (selectedItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== selectedItem.id);
    } else {
      const updatedItem = { ...selectedItem, amount: selectedItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[itemIndex] = updatedItem;
    }

    return { items: updatedItems, amount: updatedAmount };
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
