import { DarkModeCheckbox, ModalAction, OrderAction } from "../components";

export const Actions = () => {
  return (
    <div className="actions">
      <OrderAction />
      <DarkModeCheckbox />
      <ModalAction />
    </div>
  );
};
