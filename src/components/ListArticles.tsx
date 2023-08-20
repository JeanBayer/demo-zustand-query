import { useArticles } from "../hooks";

import { Like, SimpleArticle } from "../components";

export const ListArticles = () => {
  const { articles, handleLike, deleteArticle } = useArticles();

  return (
    <section className="list__articles">
      {articles?.map(({ author, id, likes, title }) => (
        <article key={id} className="list__articles--article">
          <SimpleArticle
            author={author}
            title={title}
            onDelete={() => deleteArticle({ id })}
          />
          <Like
            likes={likes}
            onLike={() => handleLike({ id, likes: likes + 1 })}
          />
        </article>
      ))}
    </section>
  );
};
