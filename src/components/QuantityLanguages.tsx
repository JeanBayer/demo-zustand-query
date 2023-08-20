import { useLanguages } from "../hooks";

export const QuantityLanguages = () => {
  const { languages } = useLanguages();
  return (
    <div>
      <h3>
        Quantity Languages <sup>{languages?.length}</sup>
      </h3>
    </div>
  );
};
