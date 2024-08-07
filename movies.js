

const movieListEl = document.querySelector(".movie-list");
const id = localStorage.getItem("Title");

let movieInput = "naruto";

async function onSearchChange(event) {
    const id = event.target.value;
    renderMovies(id);
}

async function renderMovies(Title) {
    const movies = await fetch(`http://www.omdbapi.com/?apikey=e7fd5705&s=${id}`);
    const moviesData = await movies.json();
    movieListEl.innerHTML = moviesData.map(movie => movieHTML(movie)).join("");
}

function postsHTML(post) {
    return `<div class="movie">
        <div class="movie__title">
            ${movie.title}
        </div>
        <p class="movie__body">
            ${movie.body}
        </p>
    </div>`
}

renderMovies(id);