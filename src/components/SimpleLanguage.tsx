import { Language } from "../types";

type Props = Pick<Language, "author" | "title">;
export const SimpleLanguage = ({ author, title }: Props) => {
  return (
    <>
      <h2 className="language__title">{title}</h2>
      <p>
        Author: <strong>{author}</strong>
      </p>
    </>
  );
};
