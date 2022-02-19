export type Component<T = {}> = (props: IPropsWithChildren<T>) => JSX;
export type ReactTag = HTMLTag | Component;
type HTMLTag = keyof HTMLElementTagNameMap;
export type JSX = IElement | string | number;

interface IElement {
  tag: HTMLTag;
  props: IPropsWithChildren;
}

export type IPropsWithChildren<P = {}> = P & { children?: JSX[] };
