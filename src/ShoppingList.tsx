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
    id: nanoid(),
    name: "",
    quantity: 1,
    isPurchased: false,
  });
  function addNewItem() {
    setShoppingListItems((items) => [...items, newItem]);
  }
  return (
    <div className="shopping-list-wrapper">
      <input
        value={newItem?.name}
        onChange={(e) =>
          setNewItem((prevItem) => ({ ...prevItem, name: e.target.value }))
        }
      />
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
      <ul>
        {shoppingListItems.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
