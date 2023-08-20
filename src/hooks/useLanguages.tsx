import { useEffect, useMemo, useState } from "react";
import { getLanguagesService, upLikeService } from "../services";
import { useStore } from "../store";
import { Language } from "../types";

export const useLanguages = () => {
  const [languages, setLanguages] = useState<Language[]>();
  const order = useStore((state) => state.order);

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

  return {
    orderedLanguages,
    handleLike,
  };
};
