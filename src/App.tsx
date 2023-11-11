import { useState } from "react";
import Head from "./components/Head";
import Section from "./components/Section";
import InputFeild from "./components/InputFeild";
import { Todo } from "./model";
import "./App.css";
import TodoList from "./components/TodoList";
function App() {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  }


  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos}/>
      <Head title="Hello word"></Head>
      <Section>This is my children</Section>
      {/* <Counter setCount={setCount}>count is {count}</Counter> */}
    </div>
  );
}

export default App;
