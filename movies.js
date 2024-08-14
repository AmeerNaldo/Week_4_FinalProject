const accessKey = "e7fd5705";
const movieListEl = document.querySelector(".movie-list");
const searchResultsEl = document.querySelector(".search__results--for");
const loading = document.querySelector(".modal__overlay--loading");

async function renderMovies(userSearch) {
  movieListEl.innerHTML = 
    `<div class="modal__overlay modal__overlay--loading">
      <i class="fas fa-spinner"></i>
    </div>`
  ;

  const movies = await fetch(
    `https://www.omdbapi.com/?apikey=e7fd5705&s=${userSearch}`
  );
  const movieSearch = await movies.json();
  console.log(movieSearch);
  await new Promise(r => setTimeout(r, 500));

  searchResultsEl.innerHTML = 
  `<div>Search Results for "${userSearch}"</div>`;

  movieListEl.innerHTML = movieSearch.Search.map((x) => movieHTML(x)).join("");
}

function moviePosts(Title) {
  localStorage.setItem("Title", Title);
  window.location.href = `${window.location.origin}/movies.html`;
}

function movieHTML(movie) {
  return `<div class="movie-box">
        <h3 class="movie__title"><b>${movie.Title}</b></h3>
        <h5 class="movie__year--search">${movie.Year}</h5>
        <img class="movie-img" src="${movie.Poster}" alt="">
</div>`;
}
