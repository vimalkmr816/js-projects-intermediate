//TMDB API
const API_KEY = "api_key=07865664a1fb593da23026e2f6ccb3a1";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
const SEARCH_URL = BASE_URL + "/search/movie?" + API_KEY;
const IMG_URL = "https://image.tmdb.org/t/p/w500";
const movieContainer = document.querySelector(".movie_container");
const movieOuterContainer = document.querySelector(".movies_outer_container");
const form = document.querySelector(".form");
const searchBtn = document.getElementById("search_btn");
const closeBtn = document.getElementById("close_btn")
const search = document.getElementById("search");
const card = document.querySelector(".card")
const fullInfoContainer = document.querySelector(".full_info_container")

getMovies(API_URL);
function getMovies(url) {
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data.results);
            showMovies(data.results);
            movieContainer.addEventListener("click", (e) => {
                // if (!detailSectionOpen) {
                const cardDiv = e.target.closest("div");
                console.log(cardDiv);
                showDetails(data.results, cardDiv);
                // }
            });
        })
        .catch((e) => {
            console.log("Error", e);
        });
}

function showMovies(data) {
    movieContainer.innerHTML = ``;
    data.forEach((movie) => {
        const { } = movie;
        const movieDiv = document.createElement("div");
        if (movie.poster_path) {
            // movieDiv.classList.add("movies");
            movieDiv.innerHTML = ` 
            <div class="card d-flex align-items-text-center justify-content-evenly flex-column my-4 border-0 shadow" style="width: 18rem;" id="${movie.id
                }">
                <img src= ${IMG_URL + movie.poster_path
                } class=" border border-0 w-100 card-img-top shadow" alt="${movie.title
                }">
                <div class="card-body d-flex justify-content-between align-items-center border-bottom border-bottom-3">
                <div className="movie_title">
                <h5 class="fw-bold m-0 p-2">${movie.title
                }</h5>
                </div>
                <h5 class="fw-bold px-2 py-1 rounded-3  ${getColor(
                    movie.vote_average
                )}">${movie.vote_average}</h5>
                </div>
            </div>`;
        }
        movieContainer.append(movieDiv);
    });
}

function getColor(value) {
    if (value >= 8.0) return "green";
    else if (value >= 5.0) return "orange";
    else return "red";
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const searchTerm = search.value;
    if (searchTerm) getMovies(SEARCH_URL + "&query=" + searchTerm);
    else getMovies(API_URL);
});

function showDetails(data, card_div) {
    console.log(closeBtn, "close_btn");

    // detailSectionOpen = true;    
    const fullDetailInfo = document.createElement("div");
    fullDetailInfo.classList.add("container");
    const cardId = card_div.id;
    // console.log(cardId);
    // console.log(data);
    let detailSectionOpen = false;
    for (let i = 0; i < data.length; i++) {
        // console.log(detailSectionOpen, "outside");
        if (cardId == data[i].id && !detailSectionOpen) {
            movieContainer.innerHTML = ``
            fullDetailInfo.innerHTML =
                `<div class="container full_info_container p-5 detail_info text-light bg-info ">
                <div class=" fs-1 border border-3 border-danger m-4"><button class="bi-x-circle" id="close_btn"></button></div>
                <div class="main_info border border-3 d-flex justify-content-start">
                    <div class="poster border border-3 m-4">
                        <img src=" ${IMG_URL + data[i].poster_path}" class="w- p-4" id=" poster_img ">
                    </div>
                    <div class=" text p-4 border border-3 ms-0 m-4">
                        <h4 class=" title fs-1 fw-bold"> ${data[i].title}</h4>
                        <p class=" date_time fs-5">Release Date : ${data[i].release_date}</p>
                        <div class=" rating bg-secondary d-inline-flex align-items-center px-2  gap-2 rounded-3">
                            <img src=" ./images/imdb.svg " alt="imdb_logo" class="" style=" width: 50px; ">
                            <p class=" fw-bold rating_num m-0 ">${data[i].vote_average}</p>
                        </div>
                        <div class=" cta_section my-5 gap-3 d-flex">
                            <button class=" watch_now border fs-3 fw-bold border-0 p-2 px-4 text-light bg-success rounded-3 ">WATCH NOW</button>
                            <button class=" share border fs-3 fw-bold border-0 p-2 px-4 text-light bg-success rounded-3 ">SHARE</button>
                        </div>
                            <div class=" overview mb-4 fs-4">${data[i].overview}</div>
                    </div>
            </div>`;
            detailSectionOpen = true;
            // console.log(detailSectionOpen, "inside");
        }
    }
    window.onload = function () {
        closeBtn.addEventListener('click', () => {
            console.log("delete");
            // showMovies(data);
        });
    }
    fullInfoContainer.append(fullDetailInfo);
}
