import { useStore } from "./store";

import {
  Actions,
  ListLanguages,
  Navbar,
  QuantityLanguages,
} from "./components";

import "./App.css";

function App() {
  const darkMode = useStore((state) => state.darkMode);

  return (
    <main className={`App ${darkMode ? "App--dark" : ""}`}>
      <Navbar />
      <Actions />
      <ListLanguages />
      <QuantityLanguages />
    </main>
  );
}

export default App;
