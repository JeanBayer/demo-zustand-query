import { useEffect, useState } from "react";

import { Like, SimpleLanguage } from "./components";
import { getLanguagesService, upLikeService } from "./services";
import type { Language } from "./types";

import "./App.css";

function App() {
  const [languages, setLanguages] = useState<Language[]>();

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

  return (
    <div className="App">
      <h1>Programming Languages</h1>
      {languages?.map(({ author, id, likes, title }) => (
        <div key={id}>
          <SimpleLanguage author={author} id={id} title={title} />
          <Like likes={likes} onLike={handleLike(id)} />
        </div>
      ))}
    </div>
  );
}

export default App;
