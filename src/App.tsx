import { useEffect, useMemo, useState } from "react";

import { Like, SimpleLanguage } from "./components";
import { getLanguagesService, upLikeService } from "./services";
import type { Language } from "./types";

import "./App.css";

function App() {
  const [languages, setLanguages] = useState<Language[]>();
  const [order, setOrder] = useState<"asc" | "desc">("desc");
  const [darkMode, setDarkMode] = useState<boolean>(false);

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
      <h1>Programming Languages</h1>
      <div>
        {order === "asc" ? (
          <button onClick={() => setOrder("desc")}>DESC</button>
        ) : (
          <button onClick={() => setOrder("asc")}>ASC</button>
        )}

        <label htmlFor="checkbox" className={"checkbox--mode"}>
          <span>{darkMode ? "Dark Mode ON" : "Click to enable Dark Mode"}</span>
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
        </label>
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
