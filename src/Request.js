const API_KEY = "52abd33f37ed4adae2df8ac3891c2bbb";

const requests = {
    fetchTrending: `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&language=es-MX`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&language=es-MX`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=es-MX`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&language=es-MX`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&language=es-MX`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&language=es-MX`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&language=es-MX`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99&language=es-MX`,
    fetchRecommendations: `/movie/550/recommendations?api_key=${API_KEY}&language=es-MX`,
};

export default requests;

// For You
// https://api.themoviedb.org/3/movie/447365/recommendations?api_key=52abd33f37ed4adae2df8ac3891c2bbb

// Top Rated
// https://api.themoviedb.org/3/movie/top_rated?api_key=52abd33f37ed4adae2df8ac3891c2bbb&language=es-MX

// Trending
// https://api.themoviedb.org/3/discover/movie?api_key=52abd33f37ed4adae2df8ac3891c2bbb&sort_by=popularity.desc&language=es-MX

// Action Movies
// https://api.themoviedb.org/3/discover/movie?api_key=52abd33f37ed4adae2df8ac3891c2bbb&with_genres=28&language=es-MX

// Horror Movies
// https://api.themoviedb.org/3/discover/movie?api_key=52abd33f37ed4adae2df8ac3891c2bbb&with_genres=27&language=es-MX

// Recommendation based on specific movie
// https://api.themoviedb.org/3/movie/640146/recommendations?api_key=52abd33f37ed4adae2df8ac3891c2bbb
