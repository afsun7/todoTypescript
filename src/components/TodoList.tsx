import { Todo } from "../model";
import SingleTodo from "./SingleTodo";
import "./styles.css";
type Props = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};
export default function TodoList({ todos, setTodos }: Props) {
  return (
    <div className="todos">
      {todos.map((todo) => (
        <SingleTodo
          todos={todos}
          setTodos={setTodos}
          todo={todo}
          key={todo.id}
        />
      ))}
    </div>
  );
}
