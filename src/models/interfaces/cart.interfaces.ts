import { Meal } from "./meal.interfaces";

export interface Cart {
  items: CartItem[];
  amount: number;
}

export interface CartItem {
  item: Meal;
  quantity: number;
}
