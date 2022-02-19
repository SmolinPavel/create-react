import { ReactTag, JSX, IPropsWithChildren } from "./types";

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
};

export default React;
