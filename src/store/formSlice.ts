import { FormSlice, ImmerStateCreator } from "./types";

export const createFormSlice: ImmerStateCreator<FormSlice> = (set) => ({
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

  cleanForm: () =>
    set({
      formData: {
        title: "",
        author: "",
        description: "",
      },
    }),
});
