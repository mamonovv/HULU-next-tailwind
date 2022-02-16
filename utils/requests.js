const API_KEY = process.env.API_KEY

export default {
  fetchTrending: {
    title: 'Trending',
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchTopRated: {
    title: 'Top Rated',
    url: `/trending/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  fetchActionMovies: {
    title: 'Action',
    url: `/trending/movie?api_key=${API_KEY}&with_genres=28`,
  },
  fetchComedyMovies: {
    title: 'Comedy',
    url: `/trending/movie?api_key=${API_KEY}&with_genres=35`,
  },
  fetchHorrorMovies: {
    title: 'Horror',
    url: `/trending/movie?api_key=${API_KEY}&with_genres=27`,
  },
  fetchRomanceMovies: {
    title: 'Romance',
    url: `/trending/movie?api_key=${API_KEY}&with_genres=10749`,
  },
  fetchMysteryMovies: {
    title: 'Mystery',
    url: `/trending/movie?api_key=${API_KEY}&with_genres=9648`,
  },
  fetchSciFiMovies: {
    title: 'Sci-Fi',
    url: `/trending/movie?api_key=${API_KEY}&with_genres=878`,
  },
  fetcWesternMovies: {
    title: 'Western',
    url: `/trending/movie?api_key=${API_KEY}&with_genres=37`,
  },
  fetchAnimation: {
    title: 'Animation',
    url: `/trending/movie?api_key=${API_KEY}&with_genres=16`,
  },
  fetchTV: {
    title: 'TV movies',
    url: `/trending/movie?api_key=${API_KEY}&with_genres=10770`,
  },
}
