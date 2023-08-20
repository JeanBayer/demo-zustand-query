import React, { useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";

import { useStore } from "../store";

type Props = {
  children?: React.ReactNode;
};

export const Modal = ({ children }: Props) => {
  const ref = useRef(null);
  const toggleModal = useStore((state) => state.toggleModal);

  useOnClickOutside(ref, toggleModal);

  return (
    <div className="modal__centered">
      <div className="modal__container" ref={ref}>
        {children}
      </div>
    </div>
  );
};
