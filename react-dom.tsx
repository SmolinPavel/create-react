import { JSX } from "./types";
import React from "./react";
import App from "./App";

const ReactDOM = {
  render: (element: JSX, container: HTMLElement): void => {
    if (typeof element === "string" || typeof element === "number") {
      container.appendChild(document.createTextNode(String(element)));

      return;
    }

    const { props, tag } = element;
    const domElement = document.createElement(tag);

    if (props.children) {
      for (const child of props.children) {
        ReactDOM.render(child, domElement);
      }
    }

    for (const prop in props) {
      const value = props[prop];
      if (prop !== "children") {
        domElement[prop.toLowerCase()] = value;
      }
    }

    container.appendChild(domElement);
  },
  rerender: () => {
    const rootContainer = document.getElementById("root");
    rootContainer.removeChild(rootContainer.firstChild);
    ReactDOM.render(<App />, rootContainer);
  },
};

export default ReactDOM;
