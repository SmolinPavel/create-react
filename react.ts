import { IGlobalState, ReactTag, JSX, IPropsWithChildren } from "./types";
import ReactDOM from "./react-dom";

const globalState: IGlobalState = {
  states: [],
  cursor: 0,
};

const React = {
  createElement: (
    tag: ReactTag,
    props: IPropsWithChildren,
    ...children: JSX[]
  ): JSX => {
    if (typeof tag === "function") {
      return tag({ ...props, children });
    }

    return {
      tag,
      props: {
        ...props,
        children,
      },
    };
  },
  useState<T>(initialValue: T): [state: T, setState: (newState: T) => void] {
    const currentCursor = globalState.cursor;
    const state = globalState.states[currentCursor] || initialValue;
    const setState = (newValue: T) => {
      globalState.states[currentCursor] = newValue;

      ReactDOM.rerender(globalState);
    };

    globalState.cursor += 1;

    return [state, setState];
  },
};

export default React;
