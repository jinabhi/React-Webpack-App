import React, { useState } from "react";

type FormElementType = React.FormEvent<HTMLFormElement>;

interface ITodo {
  text: string;
  complete: boolean;
}

export default function Todo(): JSX.Element {
  const [value, setValue] = useState<string>("");
  const [todo, setTodo] = useState<ITodo[]>([]);

  const handleSubmit = (event: FormElementType): void => {
    event.preventDefault();
    addTodo(value);
    setValue("");
  };

  const addTodo = (text: string): void => {
    const newTodo: ITodo[] = [...todo, { text, complete: false }];
    setTodo(newTodo);
  };

  const completeTodo = (index: number): void => {
    const newTodo: ITodo[] = [...todo];
    newTodo[index].complete = !newTodo[index].complete;
    setTodo(newTodo);
  };

  const removeTodo = (index: number): void => {
    const newTodo: ITodo[] = [...todo];
    newTodo.splice(index, 1);
    setTodo(newTodo);
  };

  return (
    <>
      <h1>TO-DO List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          required
        />
        <button type="submit">Add</button>
      </form>
      <section>
        <table style={{padding:'0px 10px', position: 'fixed', border: '1px solid black'}}>
          <tr>
            <th>S.no</th>
            <th>Todo</th>
            <th>Status</th>
            <th>Change Status</th>
            <th>Remove</th>
          </tr>
          {todo.map((item: ITodo, index: number) => (
            <tr key={index}>
              <td>{index +1}</td>
              <td>
                <div
                  style={{
                    textDecoration: item.complete ? "line-through" : "",
                  }}
                >
                  {item.text}
                </div>
              </td>
              <td>{item.complete ? "Complete" : "Incomplete"}</td>
              <td>
                <button type="button" onClick={() => completeTodo(index)}>
                  Mark {item.complete ? "Incomplete" : "Complete"}
                </button>
              </td>
              <td>
                <button type="button" onClick={() => removeTodo(index)}>
                  X
                </button>
              </td>
            </tr>
          ))}
        </table>
      </section>
    </>
  );
}
