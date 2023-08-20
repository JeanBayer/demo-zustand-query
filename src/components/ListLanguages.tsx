import { useLanguages } from "../hooks";

import { Like, SimpleLanguage } from "../components";

export const ListLanguages = () => {
  const { languages, handleLike, deleteLanguage } = useLanguages();

  return (
    <section className="list__languages">
      {languages?.map(({ author, id, likes, title }) => (
        <article key={id} className="list__languages--article">
          <SimpleLanguage
            author={author}
            title={title}
            onDelete={() => deleteLanguage({ id })}
          />
          <Like
            likes={likes}
            onLike={() => handleLike({ languageId: id, newLike: likes + 1 })}
          />
        </article>
      ))}
    </section>
  );
};
