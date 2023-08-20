import { useStore } from "../store";

export const OrderAction = () => {
  const { order, toggleOrder } = useStore(({ order, toggleOrder }) => ({
    order,
    toggleOrder,
  }));

  return (
    <button onClick={toggleOrder}>{order === "asc" ? "DESC" : "ASC"}</button>
  );
};
