import { create } from "zustand";

type Store = {
  darkMode: boolean;
  toggleDarkMode: () => void;
  order: "asc" | "desc";
  toggleOrder: () => void;
};

export const useStore = create<Store>((set) => ({
  darkMode: false,
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
  order: "desc",
  toggleOrder: () =>
    set((state) => ({ order: state.order === "desc" ? "asc" : "desc" })),
}));
