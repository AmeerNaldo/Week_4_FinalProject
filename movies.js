const accessKey = "e7fd5705"
const movieListEl = document.querySelector(".movie-list");
// const searchResultsEl = document.querySelector(".search__results--for")

async function renderMovies(userSearch) {
  const movies = await fetch(
    `http://www.omdbapi.com/?apikey=e7fd5705&s=${userSearch}`
  );
  const movieSearch = await movies.json();
  console.log(movieSearch);
  movieListEl.innerHTML = movieSearch.Search.map((x) => movieHTML(x)).join("");
}

function moviePosts(Title) {
  localStorage.setItem("Title", Title);
  window.location.href = `${window.location.origin}/movies.html`;
}

function search(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";

  
  
}

function movieHTML(movie) {
  return `<div class="movie-box">
        <h3 class="movie__title"><b>${movie.Title}</b></h3>
        <h5 class="movie__year--search">${movie.Year}</h5>
        <img class="movie-img" src="${movie.Poster}" alt="">
</div>`;
}
