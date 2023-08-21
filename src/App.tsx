import { useStore } from "./store/useStore";

import { Actions, ListArticles, Navbar, QuantityArticles } from "./components";

import "./App.css";

function App() {
  const darkMode = useStore((state) => state.darkMode);

  return (
    <main className={`App ${darkMode ? "App--dark" : ""}`}>
      <Navbar />
      <Actions />
      <ListArticles />
      <QuantityArticles />
    </main>
  );
}

export default App;
