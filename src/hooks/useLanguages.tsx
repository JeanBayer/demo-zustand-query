import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { useMemo } from "react";
import {
  createLanguageService,
  getLanguagesService,
  upLikeService,
} from "../services";
import { useStore } from "../store";

export const useLanguages = () => {
  const queryClient = useQueryClient();

  const order = useStore((state) => state.order);

  const { data: languagesData } = useQuery({
    queryKey: ["languages"],
    queryFn: getLanguagesService,
  });

  const { mutate: handleLike } = useMutation({
    mutationFn: upLikeService,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["languages"] });
    },
  });

  const { mutate: createLanguage } = useMutation({
    mutationFn: createLanguageService,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["languages"] });
    },
  });

  const orderedLanguages = useMemo(() => {
    if (!languagesData) return;
    return [...languagesData]?.sort((a, b) => {
      if (order === "asc") return a.likes - b.likes;
      return b.likes - a.likes;
    });
  }, [order, languagesData]);

  return {
    languages: orderedLanguages,
    handleLike,
    createLanguage,
  };
};
