import { useLanguages } from "./hooks";
import { useStore } from "./store";

import { DarkModeCheckbox, Like, SimpleLanguage } from "./components";

import "./App.css";

function App() {
  const { order, toggleOrder, darkMode } = useStore(
    ({ order, toggleOrder, darkMode }) => ({
      order,
      toggleOrder,
      darkMode,
    })
  );
  const { orderedLanguages, handleLike } = useLanguages();

  return (
    <div className={`App ${darkMode ? "App--dark" : ""}`}>
      <h1>Programming Languages in {darkMode ? "Dark" : "Light"}</h1>
      <div>
        <button onClick={toggleOrder}>
          {order === "asc" ? "DESC" : "ASC"}
        </button>
        <DarkModeCheckbox />
      </div>
      {orderedLanguages?.map(({ author, id, likes, title }) => (
        <div key={id}>
          <SimpleLanguage author={author} id={id} title={title} />
          <Like likes={likes} onLike={handleLike(id)} />
        </div>
      ))}
    </div>
  );
}

export default App;
