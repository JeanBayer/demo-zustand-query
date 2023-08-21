import { ImmerStateCreator, UISlice } from "./types";

export const createUISlice: ImmerStateCreator<UISlice> = (set) => ({
  darkMode: false,
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),

  order: "desc",
  toggleOrder: () =>
    set((state) => ({ order: state.order === "desc" ? "asc" : "desc" })),

  modal: false,
  toggleModal: () => set((state) => ({ modal: !state.modal })),
});
