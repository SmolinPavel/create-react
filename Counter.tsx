import React from "./react";
import { Component } from "./types";

interface ICounterProps {
  initialValue: number;
}

export const Counter: Component<ICounterProps> = ({ initialValue }) => {
  const [value, setValue] = React.useState(initialValue);

  return (
    <div>
      <h2>Counter: {value}</h2>
      <div>
        <button onClick={() => setValue(value - 1)}>-</button>
        <button onClick={() => setValue(value + 1)}>+</button>
      </div>
    </div>
  );
};
