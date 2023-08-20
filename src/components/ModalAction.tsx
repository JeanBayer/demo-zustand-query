import React from "react";
import { useStore } from "../store";

import { Modal } from "../components";
import { useArticles } from "../hooks";

export const ModalAction = () => {
  const [modal, toggleModal, title, author, description, setInput, cleanModal] =
    useStore((state) => [
      state.modal,
      state.toggleModal,
      state.title,
      state.author,
      state.description,
      state.setInput,
      state.cleanModal,
    ]);
  const { createArticle } = useArticles();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if ([title, author, description].includes("")) return;

    createArticle({ title, author, description });
    toggleModal();
    cleanModal();
  };

  return (
    <>
      <button onClick={toggleModal}>
        {modal ? "Close Form" : "Open Form"}
      </button>
      {modal && (
        <Modal>
          <h2 className="modal__form--title">
            Create a Article{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="modal__form--icon"
              onClick={toggleModal}
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
                clipRule="evenodd"
              />
            </svg>
          </h2>
          <form className="modal__form" onSubmit={handleSubmit}>
            <label className="modal__form--label">
              <span>Title:</span>
              <input
                type="text"
                name="title"
                placeholder="React JS"
                value={title}
                onChange={setInput({ name: "title" })}
              />
            </label>

            <label className="modal__form--label">
              <span>Author:</span>
              <input
                type="text"
                name="author"
                placeholder="Meta"
                value={author}
                onChange={setInput({ name: "author" })}
              />
            </label>

            <label className="modal__form--label">
              <span>Description:</span>
              <textarea
                name="description"
                placeholder="React is a JavaScript library for building user interfaces."
                value={description}
                onChange={setInput({ name: "description" })}
              />
            </label>

            <input type="submit" value="Create" />
          </form>
        </Modal>
      )}
    </>
  );
};
