import "./App.css";
import PostLIst from "./components/postList/postLIst";
import TodoList from "./components/todoList/todoList";
import UserList from "./components/userList/userList";

function App() {
  return (
    <div className="App">
      <UserList />
      <hr />
      <TodoList />
      <hr />
      <PostLIst />
    </div>
  );
}

export default App;
