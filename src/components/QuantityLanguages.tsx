import { useLanguages } from "../hooks";

export const QuantityLanguages = () => {
  const { languages } = useLanguages();
  return (
    <footer className="footer">
      <h3>
        Quantity Languages <sup>{languages?.length}</sup>
      </h3>
    </footer>
  );
};
