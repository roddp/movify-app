import axios from "axios";
import { useEffect, useState } from "react";
import Filter from "../components/Filter";

import MovieCard from "../components/MovieCard";

const Movies = () => {
  const [genres, setGenres] = useState([]);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const authFetch = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    Accept: "application/json",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOTM0ZTU3ZTg3ODFlMjNjOTJiMTI2ZGExM2E0ZDlkNyIsInN1YiI6IjYzZjY3ZjU4NjljNzBmMDA4NmZlZjk3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0Amy8-4QI-Vn8_x4SmhcgAbNvsXinGcedcFRN8XK_6E",
    },
  });

  const getGenres = async () => {
    const url = "genre/movie/list?language=en";
    const { data } = await authFetch.get(url);
    setGenres(data.genres);
  };

  const getMovies = async () => {
    setLoading(true);
    const url = "trending/movie/week?language=en-US";
    const { data } = await authFetch.get(url);
    setMovies(data.results);
    setLoading(false);
  };

  useEffect(() => {
    getGenres();
    getMovies();
    console.log(genres);
    console.log(movies);
  }, []);

  return (
    <div className="flex h-screen">
      <div className="w-1/6">
        <Filter genres={genres} />
      </div>
      <div className="w-3/4 mt-5 ml-5 overflow-y-auto no-scrollbar">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movies;
