import React from "react";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type FormData = {
  title: string;
  author: string;
  description: string;
};

type Store = {
  darkMode: boolean;
  toggleDarkMode: () => void;

  order: "asc" | "desc";
  toggleOrder: () => void;

  modal: boolean;
  toggleModal: () => void;

  formData: FormData;
  setInput: ({
    name,
  }: {
    name: "title" | "author" | "description";
  }) => (e: React.ChangeEvent) => void;
  cleanModal: () => void;
};

/**
 * @name Zustand Store
 * @description Es un estado Global que se puede usar en
 * cualquier componente  y definimos las acciones que se
 * pueden realizar sobre el estado. se usa _persist_ para
 * que el estado se mantenga aun después de recargar la pagina
 * y **immer** para poder modificar el estado de forma inmutable.
 *
 */
export const useStore = create(
  persist(
    immer<Store>((set) => ({
      darkMode: false,
      toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),

      order: "desc",
      toggleOrder: () =>
        set((state) => ({ order: state.order === "desc" ? "asc" : "desc" })),

      modal: false,
      toggleModal: () => set((state) => ({ modal: !state.modal })),

      formData: {
        title: "",
        author: "",
        description: "",
      },
      setInput:
        ({ name }) =>
        (e) => {
          const value = (e.target as HTMLInputElement).value;
          set((state) => {
            state.formData[name] = value;
          });
        },

      cleanModal: () =>
        set({
          formData: {
            title: "",
            author: "",
            description: "",
          },
        }),
    })),
    {
      name: "tech",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
