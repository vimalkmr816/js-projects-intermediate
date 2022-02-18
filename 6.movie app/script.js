//TMDB API
console.log("vimal");
const API_KEY = "api_key=07865664a1fb593da23026e2f6ccb3a1";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
const SEARCH_URL = BASE_URL + "/search/movie?" + API_KEY;
const IMG_URL = "https://image.tmdb.org/t/p/w500";
const movieContainer = document.querySelector(".movie_container");
const form = document.querySelector(".form");
const searchBtn = document.getElementById("search_btn")
const search = document.getElementById("search")
getMovies(API_URL);

function getMovies(url) {
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data.results);
            showMovies(data.results);
        })
        .catch((e) => {
            console.log("Error", e);
        });
}

function showMovies(data) {
    movieContainer.innerHTML = ``;
    data.forEach((movie) => {
        const { title, poster_path, vote_average, overview } = movie;
        const movieDiv = document.createElement("div");
        if (poster_path) {
            movieDiv.classList.add("movie");
            movieDiv.innerHTML = ` 
            <div class="card d-flex align-items-stretch justify-content-between flex-column" style="width: 18rem;">
                <img src= ${IMG_URL + poster_path} class="w-100 card-img-top" alt="${title}">
                <div class="card-body d-flex justify-content-between align-items-start ">
                <h5 class="fw-bold ">${title}</h5>
                <h5 class="fw-bold px-2 py-1 rounded-3 ${getColor(vote_average)}">${vote_average}</h5>
                </div>
                <p class="card-text p-2">${overview.substring(0,100)}...</p>
            </div>`;
        }
        movieContainer.appendChild(movieDiv);
    });
}

function getColor(value) {
    if (value >= 8.0)
        return "green"
    else if (value >= 5.0)
        return "orange"
    else return "red"
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchTerm = search.value
    if (searchTerm) getMovies(SEARCH_URL + '&query=' + searchTerm)
    else getMovies(API_URL)
});