export class SelectedMovie {
  constructor(parent, poster, title, year, runtime, plot, id) {
    this.parent = parent;
    this.poster = poster;
    this.title = title;
    this.year = year;
    this.runtime = runtime;
    this.plot = plot;
    this.id = id;
  }

  renderHtml() {
    const modalCard = document.createElement("div");
    modalCard.classList.add("modal-card");
    modalCard.setAttribute("id", this.id);
    this.parent.appendChild(modalCard);

    const movieImg = document.createElement("img");
    movieImg.classList.add("modal-card-img");
    movieImg.src = this.poster;
    modalCard.appendChild(movieImg);

    const movieTitle = document.createElement("h3");
    movieTitle.classList.add("modal-card-title");
    movieTitle.textContent = this.title;
    modalCard.appendChild(movieTitle);

    const movieYear = document.createElement("p");
    movieYear.classList.add("modal-card-year");
    movieYear.textContent = this.year;
    modalCard.appendChild(movieYear);

    const movieRuntime = document.createElement("p");
    movieRuntime.classList.add("modal-card-runtime");
    movieRuntime.textContent = this.runtime;
    modalCard.appendChild(movieRuntime);

    const moviePlot = document.createElement("p");
    moviePlot.classList.add("modal-card-plot");
    moviePlot.textContent = this.plot;
    modalCard.appendChild(moviePlot);

    const movieLink = document.createElement("a");
    movieLink.classList.add("modal-card-link");
    movieLink.href = `https://www.imdb.com/title/${this.id}`;
    movieLink.setAttribute("target", "_blank");
    movieLink.textContent = "Read more on IMDB website";
    modalCard.appendChild(movieLink);
  }
}
