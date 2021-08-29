export class Movie {
  constructor(parent, poster, title, year, id) {
    this.parent = parent;
    this.poster = poster;
    this.title = title;
    this.year = year;
    this.id = id;
  }

  renderHtml() {
    console.dir(this.parent);
    this.parent.innerHTML += `
      <div class="card" id="${this.id}">
        <img class="card-img" src="${this.poster}">
        <h3 class="card-title">${this.title}</h3>
        <p class="modal-card-year">${this.year}</p>
      </div>
    `;
    // const card = document.createElement("div");
    // card.classList.add("card");
    // card.setAttribute("id", this.id);
    // this.parent.appendChild(card);

    // const movieImg = document.createElement("img");
    // movieImg.classList.add("card-img");
    // movieImg.src = this.poster;
    // card.appendChild(movieImg);

    // const movieTitle = document.createElement("h3");
    // movieTitle.classList.add("card-title");
    // movieTitle.textContent = this.title;
    // card.appendChild(movieTitle);

    // const movieYear = document.createElement("p");
    // movieYear.classList.add("modal-card-year");
    // movieYear.textContent = this.year;
    // card.appendChild(movieYear);
  }
}
