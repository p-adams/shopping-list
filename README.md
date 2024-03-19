## shopping-list

Problem:

Create a React component called ShoppingList that allows users to manage their shopping items. The component should include the following features:

Display a list of shopping items with their corresponding quantity.
Allow users to add new items to the list with a specified quantity.
Allow users to increment or decrement the quantity of items in the list.
Allow users to mark items as purchased or unpurchased by clicking on them.
Allow users to delete items from the list.
Provide a button to clear all purchased items from the list.
Allow users to filter items based on their purchase status (i.e., show all items, only purchased items, or only unpurchased items).

Requirements:

- The ShoppingList component should display a list of items with their quantities and purchase status.
- The component should include input fields to add new items with their quantities and a button to add them to the list.
- Clicking on an item should toggle its purchase status (i.e., mark it as purchased if unpurchased, or mark it as unpurchased if purchased).
- Each item in the list should have buttons to increment and decrement its quantity, and a delete button to remove it from the list.
- The component should have a button to clear all purchased items from the list.
- The component should include buttons or links to filter items based on their purchase status (e.g., show all items, only purchased items, or only unpurchased items).
- The component should maintain the state of items, their quantities, and their purchase status internally.
- The component should be styled appropriately for a shopping list interface:

  ```
  [ ] Item 1 (Quantity: 2) [Decrement] [Increment] [Delete]
  [x] Item 2 (Quantity: 1) [Decrement] [Increment] [Delete]
  [ ] Item 3 (Quantity: 3) [Decrement] [Increment] [Delete]

  ```

  ```
  Add Item: [________] Quantity: [__] [Add]
  ```

  ```
  [Show All] [Show Purchased] [Show Unpurchased] [Clear Purchased]
  ```
