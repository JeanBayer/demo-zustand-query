import { Language } from "../types";

type Props = Omit<Language, "description" | "likes">;
export const SimpleLanguage = ({ author, id, title }: Props) => {
  return (
    <>
      <h2 className="language__title">{title}</h2>
      <p>
        Author: <strong>{author}</strong>
      </p>
      <p>ID: {id}</p>
    </>
  );
};
