const tmdbKey = '82703b1c3a359d46ee613e4c298f57c6';
const tmdbBaseUrl = 'https://api.themoviedb.org/3';

async function getGenres(){
    console.log('aoweoawke')
    const genresEndpoint = 'https://api.themoviedb.org/3/genre/movie/list'
    const requestParams = `?api_key=${tmdbKey}`;
    const urlToFetch = genresEndpoint + requestParams;
    try{
        const response = await fetch(urlToFetch);
        if(response.ok){
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            const genres = jsonResponse.genres;
            console.log(genres);
        }
    }catch(error){
        console.log(error);
    }
}

getGenres();