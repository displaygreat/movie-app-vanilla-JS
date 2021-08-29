import { getSelectedMovie } from "./script.js";

const closeBtn = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");

const openModal = () => {
  modal.classList.remove("hide");
};
const closeModal = () => {
  modal.classList.add("hide");
};

closeBtn.addEventListener("click", () => {
  closeModal();
  handleCloseModal();
});

export const handleOnCardClick = () =>
  document.addEventListener("click", handleOpenModal);

const handleOpenModal = (e) => {
  if (e.target.closest(".card")) {
    const movieId = e.target.closest(".card").getAttribute("id");
    getSelectedMovie(movieId);
    openModal();
  }
};

const handleCloseModal = () => {
  document.removeEventListener("click", handleOpenModal);
  handleOnCardClick();
};
