/*
const movieListEl = document.querySelector(".movie-list");
const id = localStorage.getItem("Title");

let movieInput = "naruto";

async function onSearchChange(event) {
    const id = event.target.value;
    renderMovies(id);
}*/

const movieListEl = document.querySelector(".movie-list");


async function renderMovies() {
  const movies = await fetch(
    "http://www.omdbapi.com/?apikey=e7fd5705&s=naruto"
  );
  const movieSearch = await movies.json();
  movieListEl.innerHTML = movieSearch.map((Search) => movieHTML(Search)).join("");
}

renderMovies();

function movieHTML(movie) {
  return `<div class="movie-box">
    <div class="movie-box__container">
        <h3><b>${Search.Title}</b></h3>
        <h5>${Search.Year}</h5>
        <img src="${Search.Poster}" alt="">
    </div>
</div>`;
}