const accessKey = "e7fd5705"
const movieListEl = document.querySelector(".movie-list");


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

function movieHTML(movie) {
  return `<div class="movie-box">
        <h3 class="movie__title"><b>${movie.Title}</b></h3>
        <h5 class="movie__year">${movie.Year}</h5>
        <img class="movie-img" src="${movie.Poster}" alt="">
</div>`;
}
