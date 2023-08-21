import { useStore } from "../store/useStore";

export const OrderAction = () => {
  const order = useStore((state) => state.order);
  const toggleOrder = useStore((state) => state.toggleOrder);

  return (
    <button onClick={toggleOrder}>{order === "asc" ? "DESC" : "ASC"}</button>
  );
};
