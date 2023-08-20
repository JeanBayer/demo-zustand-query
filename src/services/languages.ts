import { api } from "../interceptor";
import { Language } from "../types";

export async function getLanguagesService() {
  const { data } = await api.get<Language[]>("/languages");
  return data;
}

type UpLike = {
  languageId: number;
  newLike: number;
};
export async function upLikeService({ languageId, newLike }: UpLike) {
  const { data } = await api.patch<Language>(`/languages/${languageId}`, {
    likes: newLike,
  });
  return data;
}
