import { useEffect } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const TodoList: React.FC = () => {
  const { todos, loading, error, page, limit } = useTypedSelector(
    (state) => state.todo
  );
  const { fetchTodo, setTodoPage } = useActions();
  const pages = [1, 2, 3, 4, 5];
  useEffect(() => {
    fetchTodo(page, limit);
  }, [page]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div>
      {todos.map(({ id, title }) => (
        <div key={id}>
          {id} - {title}
        </div>
      ))}
      <div style={{ display: "flex" }}>
        {pages.map((p, idx) => (
          <div
            onClick={() => setTodoPage(p)}
            style={{
              border: p === page ? "1px solid red" : "",
              padding: "15px",
              cursor: "pointer",
            }}
            key={idx}
          >
            {p}
          </div>
        ))}
      </div>
    </div>
  );
};
export default TodoList;
