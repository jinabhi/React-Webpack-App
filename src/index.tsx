import React, { useState } from "react";
import ReactDOM from "react-dom";
import Todo from "./todo";

export default function App(): JSX.Element {

  return (
    <>
      <Todo />
    </>
  );
}

const root = document.getElementById("app-root");

ReactDOM.render(<App />, root);
