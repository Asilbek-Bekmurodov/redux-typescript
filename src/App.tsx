import "./App.css";
import TodoList from "./components/todoList/todoList";
import UserList from "./components/userList/userList";

function App() {
  return (
    <div className="App">
      <UserList />
      <hr />
      <TodoList />
    </div>
  );
}

export default App;
