const React = {
  createElement: (tag, props, ...children) => {
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

const App = () => (
  <div>
    <header>Header</header>
    <main>
      <h1>Page title</h1>
      <p>lorem...</p>
    </main>
    <footer>Footer</footer>
  </div>
);

console.log(<App />);
