import React, { createContext, Reducer, useReducer } from "react";
import { Cart } from "../models/interfaces";
import { Action, cartReducer } from "../reducers/cart-reducer";

const defaultState: Cart = {
  amount: 0,
  items: [],
};

export const CartContext = createContext<contextType>({
  state: defaultState,
  dispatch: () => undefined,
});

type contextType = {
  state: Cart;
  dispatch: React.Dispatch<Action>;
};
type PropsType = {
  children: React.ReactNode;
};

export const CartProvider = ({ children }: PropsType) => {
  const [state, dispatch] = useReducer<Reducer<Cart, Action>>(cartReducer, defaultState);

  return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>;
};
