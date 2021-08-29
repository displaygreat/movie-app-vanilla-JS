import { Movie } from "./movie.js";
import { SelectedMovie } from "./selectedMovie.js";
import { handleOnCardClick } from "./modal.js";

const key = "7c11b80d";

const { form } = document.forms;
const searchInput = document.querySelector(".input");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputValue = searchInput.value;
  getMovie(inputValue);
  form.reset();
});

export const removeHtml = (elements) => {
  if (document.querySelectorAll(elements)) {
    Array.from(document.querySelectorAll(elements)).forEach((element) =>
      element.remove()
    );
  }
};

const getMovie = async (value) => {
  removeHtml(".card");
  try {
    const response = await fetch(
      `https://omdbapi.com/?apikey=${key}&s=${encodeURIComponent(value)}`
    );
    if (!response.ok) {
      throw new Error("Server Error");
    }
    const json = await response.json();
    console.log(json);
    json.Search.map((movie) => {
      const movieCard = new Movie(
        document.querySelector(".movie-list"),
        movie.Poster,
        movie.Title,
        movie.Year,
        movie.imdbID
      );
      movieCard.renderHtml();
    });
    handleOnCardClick();
  } catch (err) {
    console.log(err);
  }
};

export const getSelectedMovie = async (id) => {
  removeHtml(".modal-card");
  try {
    const response = await fetch(
      `https://omdbapi.com/?apikey=${key}&i=${encodeURIComponent(id)}`
    );
    if (!response.ok) {
      throw new Error("Server Error");
    }

    const json = await response.json();
    console.log(json);
    const movieCard = new SelectedMovie(
      document.querySelector(".modal-dialog"),
      json.Poster,
      json.Title,
      json.Year,
      json.runtime,
      json.Plot,
      json.imdbID
    );
    movieCard.renderHtml();
  } catch (err) {
    console.log(err);
  }
};
