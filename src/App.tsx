import "./App.css";
import ShoppingList from "./ShoppingList";

function App() {
  return (
    <>
      <div>
        <h1>Shopping List</h1>
        <div className="card">
          <ShoppingList />
        </div>
      </div>
    </>
  );
}

export default App;
