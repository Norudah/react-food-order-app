import { Cart, CartItem, Meal } from "../models/interfaces";

export enum Type {
  ADD_ITEM = "ADD_ITEM",
  REMOVE_ITEM = "REMOVE_ITEM",
  CLEAN_CART = "CLEAN_CART",
}

export type Action =
  | { type: Type.ADD_ITEM; payload: CartItem }
  | { type: Type.REMOVE_ITEM; payload: Meal }
  | { type: Type.CLEAN_CART };

export const cartReducer = (state: Cart, action: Action): Cart => {
  const { type } = action;

  switch (type) {
    case Type.ADD_ITEM:
      const updatedCart: Cart = {
        items: [...state.items, action.payload],
        amount: state.amount + 123,
      };

      return updatedCart;

    case Type.REMOVE_ITEM:
      return state;

    case Type.CLEAN_CART:
      return state;

    default:
      return state;
  }
};
