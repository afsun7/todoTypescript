import { Todo } from "../model";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdFileDownloadDone } from "react-icons/md";
import "./styles.css";
import { useEffect, useRef, useState } from "react";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};
export default function SingleTodo({ todo, todos, setTodos }: Props) {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  function handleComplete(id: number) {
    todos.find((todo) => {
      if (todo.id === id) {
        return (todo.isDone = !todo.isDone);
      }
    });
    setTodos([...todos]);
  }
  function handleDelete(id: number) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  function handleEdit(e: React.FormEvent, id: number) {
    e.preventDefault();
    todos.find((todo) => {
      if (todo.id === id) {
        return (todo.todo = editTodo);
      }
    });
    setEdit(false);
    setTodos([...todos]);
  }
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);
  return (
    <form className="todos_single" onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input
          ref={inputRef}
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="todos_single-text"
        />
      ) : todo.isDone ? (
        <s className="todos_single-text">{todo.todo}</s>
      ) : (
        <span className="todos_single-text">{todo.todo}</span>
      )}

      <div>
        <span className="icon" onClick={() => setEdit(!edit)}>
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleComplete(todo.id)}>
          <MdFileDownloadDone />
        </span>
      </div>
    </form>
  );
}
