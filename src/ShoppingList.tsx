import { useState } from "react";
import "./ShoppingList.css";

interface ShoppingListItem {
  name: string;
  quantity: number;
  isPurchased: boolean;
}

function ShoppingList() {
  const [shoppingListItems, setShoppingListItems] = useState<
    ShoppingListItem[]
  >([]);
  return <div className="shopping-list-wrapper">{/* TODO: implement */}</div>;
}

export default ShoppingList;
