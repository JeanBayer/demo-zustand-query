import { Language } from "../types";

type Props = Omit<Language, "description" | "likes">;
export const SimpleLanguage = ({ author, id, title }: Props) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>Author: {author}</p>
      <p>ID: {id}</p>
    </div>
  );
};
