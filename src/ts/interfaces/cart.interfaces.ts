import { Meal } from "./meal.interfaces";

export interface Cart {
  meals: {
    item: Meal;
    quantity: number;
  }[];
  amount: number;
}

export interface CartContext extends Cart {
  onUpdate?: () => void;
  onRemoveItem?: () => void;
  onAddItem?: () => void;
}
