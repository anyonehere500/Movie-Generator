const tmdbKey = '<YOUR API HERE>';
const tmdbBaseUrl = 'https://api.themoviedb.org/3';
const button = document.getElementById('goButton');


async function getGenres(){
    const genresEndpoint = 'https://api.themoviedb.org/3/genre/movie/list'
    const requestParams = `?api_key=${tmdbKey}`;
    const urlToFetch = genresEndpoint + requestParams;
    try{
        const response = await fetch(urlToFetch);
        if(response.ok){
            const jsonResponse = await response.json();
            const genres = jsonResponse.genres;
            return genres;
        }
    }catch(error){
        console.log(error);
    }
}

async function getMovie() {
    const genre = getGenreID();
    const movieEndpoint = "https://api.themoviedb.org/3/discover/movie";
    const requestParams = `?api_key=${tmdbKey}&with_genres=${genre}`;
    const urlToFetch = movieEndpoint + requestParams;
    try{
        const response = await fetch(urlToFetch);
        if(response.ok){
            const jsonResponse = await response.json();
            const movies = jsonResponse.results;
            console.log(movies);
            return movies;
        }
    }catch(error){
        console.log(error);
    }
}

async function getMovieInfo(movie){
    const movie_id = movie.id;
    const randomMovieEndPoint = `https://api.themoviedb.org/3/movie/${movie_id}`;
    const requestParams = `?api_key=${tmdbKey}`;
    const urlToFetch = randomMovieEndPoint + requestParams;
    try{
        const response = await fetch(urlToFetch);
        if(response.ok){
            const jsonResponse = await response.json();
            const movie = jsonResponse;
            return movie;
        }
    }catch(error){
        console.log(error);
    }
}

async function testFunction(){
    const moviesArray = await getMovie();
    const randomMovie = getRandomMovie(moviesArray);
    showMovieInfo(randomMovie);
}

getGenres().then(assignDropDownValues);
button.onclick = testFunction;
