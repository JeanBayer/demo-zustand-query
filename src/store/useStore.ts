import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { createFormSlice } from "./formSlice";
import { Store } from "./types";
import { createUISlice } from "./uiSlice";

/**
 * @name Zustand Store
 * @description Este estado Global usa el patrón __Slice__ para
 * separar el estado en diferentes partes y poder usarlas en
 * diferentes componentes.
 * @see {@link https://docs.pmnd.rs/zustand/guides/slices-pattern#slicing-the-store-into-smaller-stores} documentación de Zustand
 */
export const useStore = create(
  persist(
    immer<Store>((...args) => ({
      ...createUISlice(...args),
      ...createFormSlice(...args),
    })),
    {
      name: "tech",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
