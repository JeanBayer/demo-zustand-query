import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useMemo } from "react";

import {
  createArticleService,
  deleteArticleService,
  getArticleService,
  upLikeService,
} from "../services";
import { useStore } from "../store/useStore";

export const useArticles = () => {
  const queryClient = useQueryClient();

  const order = useStore((state) => state.order);

  const { data: articlesData } = useQuery({
    queryKey: ["articles"],
    queryFn: getArticleService,
  });

  const { mutate: handleLike } = useMutation({
    mutationFn: upLikeService,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["articles"] });
    },
  });

  const { mutate: createArticle } = useMutation({
    mutationFn: createArticleService,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["articles"] });
    },
  });

  const { mutate: deleteArticle } = useMutation({
    mutationFn: deleteArticleService,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["articles"] });
    },
  });

  const orderedArticles = useMemo(() => {
    if (!articlesData) return;
    return [...articlesData]?.sort((a, b) => {
      if (order === "asc") return a.likes - b.likes;
      return b.likes - a.likes;
    });
  }, [order, articlesData]);

  return {
    articles: orderedArticles,
    handleLike,
    createArticle,
    deleteArticle,
  };
};
