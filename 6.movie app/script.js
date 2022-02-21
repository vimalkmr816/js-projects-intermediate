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
const search = document.getElementById("search");
getMovies(API_URL);

function getMovies(url) {
	fetch(url)
		.then((res) => res.json())
		.then((data) => {
			console.log(data.results);
			showMovies(data.results);
			movieContainer.addEventListener("click", (e) => {
				const cardDiv = e.target.closest("div");
				console.log(cardDiv);
				showDetails(data.results, cardDiv);
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
            <div class="card d-flex align-items-stretch justify-content-evenly flex-column my-4 border-0 shadow" style="width: 18rem;" id="${movie.id
				}">
                <img src= ${IMG_URL + movie.poster_path
				} class=" border border-0 w-100 card-img-top shadow" alt="${movie.title
				}">
                <div class="card-body d-flex justify-content-between align-items-center border-bottom border-bottom-3">
                <h5 class="fw-bold m-0 p-0" style="height: 2rem;">${movie.title
				}</h5>
                <h5 class="fw-bold px-2 py-1 rounded-3  ${getColor(
					movie.vote_average
				)}">${movie.vote_average}</h5>
                </div>
                <p class="card-text p-3">${movie.overview}</p>
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
	const fullDetailInfo = document.createElement("div");
	fullDetailInfo.classList.add("full_detail_info");
	const card = document.querySelector(".card")
	movieContainer.prepend(fullDetailInfo);
	const cardId = card_div.id;
	// console.log(cardId);
	// console.log(data);
	for (let i = 0; i < data.length; i++) {
		// console.log(data[i].id);

		// const dummy_object = {
		// 	adult: false,
		// 	backdrop_path: "/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg",
		// 	genre_ids: (3)[(28, 12, 878)],
		// 	id: 634649,
		// 	original_language: "en",
		// 	original_title: "Spider-Man: No Way Home",
		// 	overview:
		// 		"Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
		// 	popularity: 9805.303,
		// 	poster_path: "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
		// 	release_date: "2021-12-15",
		// 	title: "Spider-Man: No Way Home",
		// 	video: false,
		// 	vote_average: 8.3,
		// 	vote_count: 8089,
		// };
		if (cardId == data[i].id) {
			fullDetailInfo.innerHTML = `<section class="container full_info_container p-5 detail_info text-light bg-info">
            <div class="close_btn bi-x-circle fs-1"></div>
            <div class="main_info border border-3 d-flex justify-content-start">
                <div class="poster border border-3 m-4">
                <img src=" ${IMG_URL + data[i].poster_path}" class="w-100" id=" poster_img ">
                </div>
                <div class=" text flexBasis: 3">
                    <h4 class=" title "> ${data[i].title}</h4>
                    <p class=" date_time "> ${data[i].release_date} . 2hr</p>
                    <div class=" rating bg-secondary d-inline-flex align-items-center px-2  gap-2 rounded-3">
                        <img src=" ./images/imdb.svg " alt="imdb_logo" class="" style=" width: 30px; ">
                        <p class=" fw-bold rating_num m-0 ">${data[i].vote_average}</p>
                    </div>
                    <div class=" cta_section my-5 gap-3 d-flex">
                        <button class=" watch_now border fw-bold border-0 p-1 px-2 rounded-3 ">WATCH NOW</button>
                        <button class=" share border fw-bold border-0 p-1 px-2 rounded-3 ">SHARE</button>
                    </div>
                    <div class=" overview mb-4">${data[i].overview}</div>
                    <div class=" crew_container d-flex ">
    
                        <ul class=" crew list-unstyled me-4 fw-bold ">
                            <li class=" crew_details ">Directed by</li>
                            <li class=" crew_details ">Directed by</li>
                            <li class=" crew_details ">Directed by</li>
                            <li class=" crew_details ">Directed by</li>
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
    
    
        </section>`;
		}
	}
}
