import { useArticles } from "../hooks";

export const QuantityArticles = () => {
  const { articles } = useArticles();
  return (
    <footer className="footer">
      <h3>
        Quantity articles <sup>{articles?.length}</sup>
      </h3>
    </footer>
  );
};
