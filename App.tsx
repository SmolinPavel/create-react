import React from "./react";
import { Component } from "./types";
import { Counter } from "./Counter";

const App: Component = () => (
  <div>
    <header>Header</header>
    <main>
      <h1>Page title</h1>
      <p>lorem...</p>
      <Counter initialValue={646} />
    </main>
    <footer>Footer</footer>
  </div>
);

export default App;
