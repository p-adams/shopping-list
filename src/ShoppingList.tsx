import { useMemo, useState } from "react";
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
  const [filter, setFilter] = useState("all");
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
  function inc(item: ShoppingListItem) {
    setShoppingListItems((prevItems) =>
      prevItems.map((prevItem) =>
        prevItem.id === item.id
          ? { ...prevItem, quantity: prevItem.quantity + 1 }
          : prevItem
      )
    );
  }
  function dec(item: ShoppingListItem) {
    setShoppingListItems((prevItems) =>
      prevItems.map((prevItem) =>
        prevItem.id === item.id
          ? {
              ...prevItem,
              quantity: prevItem.quantity - 1,
            }
          : prevItem
      )
    );
  }
  function remove(item: ShoppingListItem) {
    setShoppingListItems((prevItems) =>
      prevItems.filter((prevItem) => prevItem.id !== item.id)
    );
  }
  function clearPurchased() {
    setShoppingListItems((prevItems) =>
      prevItems.filter((prevItem) => !prevItem.isPurchased)
    );
  }

  const uiShoppingList = useMemo(() => {
    return shoppingListItems.filter((item) => {
      if (filter === "purchased") {
        return item.isPurchased;
      } else if (filter === "unpurchased") {
        return !item.isPurchased;
      }

      return true;
    });
  }, [shoppingListItems, filter]);

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
      <div className="filters-container">
        <label>
          Filters:
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">Show all</option>
            <option value="purchased">Show purchased</option>
            <option value="unpurchased">Show unpurchased</option>
          </select>
        </label>
      </div>
      {shoppingListItems.some((i) => i.isPurchased) && (
        <button onClick={() => clearPurchased()}>Clear Purchased</button>
      )}
      <ul className="shopping-list-items">
        {uiShoppingList.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              onChange={() => toggleIsPurchased(item)}
              checked={item.isPurchased}
            />
            {item.name}
            <span>quantity: {item.quantity}</span>
            <button onClick={() => dec(item)}>-</button>
            <button onClick={() => inc(item)}>+</button>
            <button onClick={() => remove(item)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
