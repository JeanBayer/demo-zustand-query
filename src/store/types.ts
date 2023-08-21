import React from "react";
import { StateCreator } from "zustand";

type FormData = {
  title: string;
  author: string;
  description: string;
};

export type FormSlice = {
  formData: FormData;
  setInput: ({
    name,
  }: {
    name: "title" | "author" | "description";
  }) => (e: React.ChangeEvent) => void;
  cleanForm: () => void;
};

export type UISlice = {
  darkMode: boolean;
  toggleDarkMode: () => void;

  order: "asc" | "desc";
  toggleOrder: () => void;

  modal: boolean;
  toggleModal: () => void;
};

export type Store = FormSlice & UISlice;

export type ImmerStateCreator<T> = StateCreator<
  T,
  [["zustand/immer", never]],
  [],
  T
>;
