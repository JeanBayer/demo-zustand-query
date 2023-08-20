import { useLanguages } from "../hooks";

import { Like, SimpleLanguage } from "../components";

export const ListLanguages = () => {
  const { languages, handleLike } = useLanguages();

  return (
    <section className="list__languages">
      {languages?.map(({ author, id, likes, title }) => (
        <article key={id} className="list__languages--article">
          <SimpleLanguage author={author} title={title} />
          <Like
            likes={likes}
            onLike={() => handleLike({ languageId: id, newLike: likes + 1 })}
          />
        </article>
      ))}
    </section>
  );
};
