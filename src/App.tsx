import { useEffect, useMemo, useState } from "react";

import { DarkModeCheckbox, Like, SimpleLanguage } from "./components";
import { getLanguagesService, upLikeService } from "./services";
import { useStore } from "./store";

import "./App.css";
import type { Language } from "./types";

function App() {
  const [languages, setLanguages] = useState<Language[]>();

  const darkMode = useStore((state) => state.darkMode);
  const [order, toggleOrder] = useStore((state) => [
    state.order,
    state.toggleOrder,
  ]);

  useEffect(() => {
    getLanguagesService().then((response) => {
      setLanguages(response);
    });
  }, []);

  const handleLike = (id: number) => async () => {
    const likes = languages?.find((language) => language.id === id)?.likes;
    try {
      const result = await upLikeService({
        languageId: id,
        newLike: likes ? likes + 1 : 1,
      });
      const newLanguages = languages?.map((language) =>
        language.id === id ? { ...language, likes: result.likes } : language
      );
      setLanguages(newLanguages);
    } catch (error) {
      console.error(error);
    }
  };

  const orderedLanguages = useMemo(() => {
    if (!languages) return;
    return [...languages]?.sort((a, b) => {
      if (order === "asc") return a.likes - b.likes;
      return b.likes - a.likes;
    });
  }, [order, languages]);

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
