import { createContext, useReducer } from "react";
import { cartReducer } from "../reducers/cart-reducer";
import { Meal } from "../ts/interfaces";

interface Cart {
  meals: {
    item: Meal;
    quantity: number;
  }[];
  amount: number;
}

type PropsType = {
  children: React.ReactNode;
};

const defaultCartContext: Cart = {
  meals: [],
  amount: 0,
};

export const CartContext = createContext<Cart>(defaultCartContext);

export const CartProvider = ({ children }: PropsType) => {
  const [state, dispatch] = useReducer(cartReducer, defaultCartContext);

  // const contextValue = {
  //   cart: state,
  //   handlerItemAdd: (meal: Meal) => {
  //     dispatch({ type: CartActionType.ADD_ITEM, payload:  });
  //   },
  // };

  return <CartContext.Provider value={defaultCartContext}>{children}</CartContext.Provider>;
};
