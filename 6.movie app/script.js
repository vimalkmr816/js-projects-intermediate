//TMDB API
const API_KEY = "api_key=07865664a1fb593da23026e2f6ccb3a1";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
const SEARCH_URL = BASE_URL + "/search/movie?" + API_KEY;
const IMG_URL = "https://image.tmdb.org/t/p/w500";
const movieContainer = document.querySelector(".movie_container");
const movieOuterContainer = document.querySelector(".movies_outer_container");
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
            <div class="card d-flex align-items-stretch justify-content-between flex-column my-4 border-0 shadow" style="width: 18rem;">
                <img src= ${IMG_URL + poster_path} class=" border border-0 w-100 card-img-top shadow" alt="${title}">
                <div class="card-body d-flex justify-content-between align-items-start ">
                <h5 class="fw-bold " style="height: 2rem;">${title}</h5>
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

movieOuterContainer.addEventListener('click', (e) => {
    console.log(e.target);
    movieContainer.innerHTML = ``;
    const detailDiv = document.createElement('div')
    detailDiv.innerHTML = `<section class="container p-5 detail_info text-light bg-info w-50 ">
    <div class="close_btn bi-x-circle fs-1"></div>
    <div class="main_info d-flex align-items-center justify-content-start">
        <div class="poster w-100 m-4">
            <img src="images/896146.jpg" class="w-100" id=" poster_img ">
        </div>
        <div class=" text ">
            <h4 class=" title "> Avengers </h4>
            <p class=" date_time "> 2012 . 2hr</p>
            <div class=" rating bg-secondary d-inline-flex align-items-center px-2  gap-2 rounded-3">
                <img src=" ./images/imdb.svg " alt="imdb_logo" class="" style=" width: 30px; ">
                <p class=" fw-bold rating_num m-0 ">9.0</p>
            </div>
            <div class=" cta_section my-5 gap-3 d-flex">
                <button class=" watch_now border fw-bold border-0 p-1 px-2 rounded-3 ">WATCH NOW</button>
                <button class=" share border fw-bold border-0 p-1 px-2 rounded-3 ">SHARE</button>
            </div>
            <div class=" overview mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, incidunt nisi. Perspiciatis vel est mollitia similique, tempore consequatur velit cum architecto atque nesciunt ad assumenda natus facilis inventore officiis veritatis!</div>
            <div class=" crew_container d-flex ">

                <ul class=" crew list-unstyled me-4 fw-bold ">
                    <li class=" crew_details ">Directed by</li>
                    <li class=" crew_details ">Direcdsafdsted by</li>
                    <li class=" crew_details ">Direcd by</li>
                    <li class=" crew_details ">Directed adsfasby</li>
                </ul>
                <ul class=" crew list-unstyled ms-4 ">
                    <li class=" crew_details ">Vimal Kumar</li>
                    <li class=" crew_details ">Vimal Kumar</li>
                    <li class=" crew_details ">Vimal Kumar</li>
                    <li class=" crew_details ">Vimal Kumar</li>
                </ul>
            </div>
        </div>
    </div>
    <div class=" cast_container ">
        <span class="fs-3 fw-bold">CAST</span>
        <ul class=" cast d-flex list-unstyled justify-content-between mx-1 gap-1">
            <li class=" cast_member  ">
                <img src="images/imdb.svg" class="rounded-circle w-50 p-1 border border-1 mt-3" alt="">
                <span class="fw-bold d-block my-3">Vimal Kumar</span>
            </li>
            <li class=" cast_member  ">
                <img src="images/imdb.svg" class="rounded-circle w-50 p-1 border border-1 mt-3" alt="">
                <span class="fw-bold d-block my-3">Vimal Kumar</span>
            </li>
            <li class=" cast_member  ">
                <img src="images/imdb.svg" class="rounded-circle w-50 p-1 border border-1 mt-3" alt="">
                <span class="fw-bold d-block my-3">Vimal Kumar</span>
            </li>
            <li class=" cast_member  ">
                <img src="images/imdb.svg" class="rounded-circle w-50 p-1 border border-1 mt-3" alt="">
                <span class="fw-bold d-block my-3">Vimal Kumar</span>
            </li>
            <li class=" cast_member  ">
                <img src="images/imdb.svg" class="rounded-circle w-50 p-1 border border-1 mt-3" alt="">
                <span class="fw-bold d-block my-3">Vimal Kumar</span>
            </li>
            <li class=" cast_member  ">
                <img src="images/imdb.svg" class="rounded-circle w-50 p-1 border border-1 mt-3" alt="">
                <span class="fw-bold d-block my-3">Vimal Kumar</span>
            </li>
        </ul>
    </div>
</section>`
    movieContainer.appendChild(detailDiv)
        // console.log(e.path[2]);
});