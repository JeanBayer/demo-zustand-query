import { api } from "../interceptor";
import { Article } from "../types";

export async function getArticleService() {
  const { data } = await api.get<Article[]>("/articles");
  return data;
}

type UpLike = {
  id: string;
  likes: number;
};
export async function upLikeService({ id, likes }: UpLike) {
  const { data } = await api.patch<Article>(`/articles/${id}`, {
    likes,
  });
  return data;
}

export async function createArticleService({
  author,
  description,
  title,
}: Pick<Article, "author" | "description" | "title">) {
  const id = crypto.randomUUID();
  const { data } = await api.post<Article>("/articles", {
    author,
    description,
    title,
    id,
    likes: 0,
  });
  return data;
}

export async function deleteArticleService({ id }: Pick<Article, "id">) {
  const { data } = await api.delete<Article>(`/articles/${id}`);
  return data;
}
