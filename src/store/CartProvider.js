import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCart = {
  items: [],
  amount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    console.log(action.item.amount);
    const itemIndex = state.items.findIndex((item) => item.id === action.item.id);
    const selectedItemInCart = itemIndex !== -1 ? state.items[itemIndex] : null;

    console.log(state.amount);
    const updatedAmount = state.amount + action.item.price * action.item.amount;
    console.log(updatedAmount);

    let updatedItems = [];
    if (selectedItemInCart) {
      updatedItems = [...state.items];
      updatedItems[itemIndex].amount = updatedItems[itemIndex].amount + action.item.amount;
    } else {
      updatedItems = [...state.items, action.item];
    }

    return { items: updatedItems, amount: updatedAmount };
  }

  if (action.type === "REMOVE") {
    const findRightIndex = (item) => item.id === action.id;

    const itemIndex = state.items.findIndex(findRightIndex);
    const selectedItem = state.items[itemIndex];

    let updatedItems = [];
    console.log(state.amount);
    console.log(selectedItem.price);
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
    amount: cartState.amount ?? 0,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
