// import { createElement } from "react";
import Button from "../components/Button";

function ComponentSystem() {
  const todos = ["todo 1", "todo 2", "todo 3"];

  /*const h1 = createElement("h1", null, "Todo App");
  const ul = createElement(
    "ul",
    null,
    todos.map((todo) => createElement("li", null, todo))
  );

  const main = createElement(
    "main",
    {
      id: "main",
      className: "container",
    },
    h1,
    ul
  );

  return main;*/

  /*return (
    <main id="main" className="content">
      <h1
        style={{
          color: "#fcfcfc",
        }}
        tabIndex={1}
      >
        Todo App
      </h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} tabIndex={index + 1}>
            {todo}
          </li>
        ))}
      </ul>
    </main>
  );*/

  return (
    <>
      <main>
        <Button text="primary" />
        <Button text="danger" variant="danger" />
        <Button text="warning" variant="warning" />
      </main>
    </>
  );
}

export default ComponentSystem;
