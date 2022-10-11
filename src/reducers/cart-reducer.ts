export enum CartActionType {
  ADD_ITEM = "ADD_CART",
  REMOVE_ITEM = "REMOVE_ITEM",
  CLEAN_CART = "CLEAN_CART",
}

type cartReducerArgsType = {
  state: any;
  action: {
    type: CartActionType;
    payload: any;
  };
};

export const cartReducer = ({ state, action }: cartReducerArgsType) => {
  const { type, payload } = action;

  console.log("lancement du reducer avec le type" + type);

  if (type === CartActionType.ADD_ITEM) {
    return state;
  }

  if (type === CartActionType.REMOVE_ITEM) {
    return state;
  }

  if (type === CartActionType.CLEAN_CART) {
  }
};
