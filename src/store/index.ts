import React from "react";
import { create } from "zustand";

type Store = {
  darkMode: boolean;
  toggleDarkMode: () => void;

  order: "asc" | "desc";
  toggleOrder: () => void;

  modal: boolean;
  toggleModal: () => void;

  title: string;
  author: string;
  description: string;
  setInput: ({
    name,
  }: {
    name: "title" | "author" | "description";
  }) => (e: React.ChangeEvent) => void;
  cleanModal: () => void;
};

export const useStore = create<Store>((set) => ({
  darkMode: false,
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),

  order: "desc",
  toggleOrder: () =>
    set((state) => ({ order: state.order === "desc" ? "asc" : "desc" })),

  modal: false,
  toggleModal: () => set((state) => ({ modal: !state.modal })),

  title: "",
  author: "",
  description: "",
  setInput:
    ({ name }) =>
    (e) => {
      const value = (e.target as HTMLInputElement).value;
      return set({ [name]: value });
    },
  cleanModal: () =>
    set({
      title: "",
      author: "",
      description: "",
    }),
}));
