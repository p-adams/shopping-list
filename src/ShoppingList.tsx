import { useState } from "react";
import { nanoid } from "nanoid";
import "./ShoppingList.css";

interface ShoppingListItem {
  id: string;
  name: string;
  quantity: number;
  isPurchased: boolean;
}

function ShoppingList() {
  const [shoppingListItems, setShoppingListItems] = useState<
    ShoppingListItem[]
  >([]);
  const [newItem, setNewItem] = useState<ShoppingListItem>({
    id: "",
    name: "",
    quantity: 1,
    isPurchased: false,
  });
  function addNewItem() {
    setShoppingListItems((items) => [...items, { ...newItem, id: nanoid() }]);
  }
  function toggleIsPurchased(item: ShoppingListItem) {
    setShoppingListItems((prevItems) =>
      prevItems.map((prevItem) =>
        prevItem.id === item.id
          ? { ...prevItem, isPurchased: !prevItem.isPurchased }
          : prevItem
      )
    );
  }
  return (
    <div className="shopping-list-wrapper">
      <div className="input-wrapper">
        Add Item:
        <input
          value={newItem?.name}
          onChange={(e) =>
            setNewItem((prevItem) => ({ ...prevItem, name: e.target.value }))
          }
        />
        Quantity:
        <input
          min={1}
          type="number"
          value={newItem?.quantity}
          onChange={(e) =>
            setNewItem((prevItem) => ({
              ...prevItem,
              quantity: Number(e.target.value),
            }))
          }
        />
        <button onClick={() => addNewItem()}>Add</button>
      </div>
      <ul className="shopping-list-items">
        {shoppingListItems.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              onChange={() => toggleIsPurchased(item)}
              checked={item.isPurchased}
            />
            <span>{item.name}</span>
            <span>quantity: {item.quantity}</span>
            <button>-</button>
            <button>+</button>
            <button>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
