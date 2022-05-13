import axios  from 'axios';

// BASE DA URL: https://api.themoviedb.org/3/
//URL DA API: /movie/now_playing?api_key=50cd9371dcbad4496856f979f64893c8

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;