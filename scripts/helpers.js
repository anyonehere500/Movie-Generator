function assignDropDownValues(genresArray){
    let select = document.getElementById('genresBox');
    for(let genre of genresArray){
        let option = document.createElement("option");
        option.value = genre.id;
        option.text = genre.name;
        select.appendChild(option);
    }
}

function getGenreID(){
    let select = document.getElementById('genresBox');
    let genreID = select.value;
    return genreID;
}

function getRandomMovie(moviesArray){
    const randomMovieIndex = Math.floor(Math.random() * moviesArray.length);
    const randomMovie = moviesArray[randomMovieIndex];
    return randomMovie;
}

function showMovieTitle(movie){
    const movieTitleElement = document.getElementById('movieTitle');
    movieTitleElement.innerHTML = movie.title;
}

function showMovieOverview(movie){
    const movieOverviewElement = document.getElementById('movieOverview');
    movieOverviewElement.innerHTML = movie.overview;
}

function showMoviePoster(movie){
    const imageElement = document.getElementById('posterImage');
    imageElement.src = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;
}

function showMovieInfo(movie){
    showMoviePoster(movie);
    showMovieTitle(movie);
    showMovieOverview(movie);
}