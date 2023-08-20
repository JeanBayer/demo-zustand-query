import { api } from "../interceptor";
import { Language } from "../types";

export async function getLanguagesService() {
  const { data } = await api.get<Language[]>("/languages");
  return data;
}

type UpLike = {
  languageId: string;
  newLike: number;
};
export async function upLikeService({ languageId, newLike }: UpLike) {
  const { data } = await api.patch<Language>(`/languages/${languageId}`, {
    likes: newLike,
  });
  return data;
}

export async function createLanguageService({
  author,
  description,
  title,
}: Pick<Language, "author" | "description" | "title">) {
  const id = crypto.randomUUID();
  const { data } = await api.post<Language>("/languages", {
    author,
    description,
    title,
    id,
    likes: 0,
  });
  return data;
}

export async function deleteLanguageService({ id }: Pick<Language, "id">) {
  const { data } = await api.delete<Language>(`/languages/${id}`);
  return data;
}
