import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BsFillPlayFill } from "react-icons/bs";
import CircleRating from "../components/CircleRating";
const Details = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const [video, setVideo] = useState();

  const [loading, setLoading] = useState(true);
  const authFetch = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    Accept: "application/json",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOTM0ZTU3ZTg3ODFlMjNjOTJiMTI2ZGExM2E0ZDlkNyIsInN1YiI6IjYzZjY3ZjU4NjljNzBmMDA4NmZlZjk3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0Amy8-4QI-Vn8_x4SmhcgAbNvsXinGcedcFRN8XK_6E",
    },
  });

  const fetchMovie = async () => {
    setLoading(true);
    const { data } = await authFetch.get(`movie/${id}?language=en-US`);
    setMovie(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  if (!movie) {
    return <div>Loading...</div>;
  }

  const backdropUrl = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`;
  const posterUrl = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`;

  return (
    <div
      className="relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backdropUrl})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-4 py-6 flex">
        <div className="w-1/3">
          <img src={posterUrl} alt={movie.title} className="rounded-lg" />
        </div>
        <div className="w-2/3 pl-8">
          <h2 className="text-4xl font-bold">{movie.title}</h2>
          <p className="text-sm mt-2">
            {movie.release_date} |{" "}
            {movie.genres.map((genre) => genre.name).join(", ")} |{" "}
            {movie.runtime} min
          </p>
          <div className="flex items-center mt-4">
            <CircleRating voteAverage={movie.vote_average} />
            <a
              href={`https://www.youtube.com/`}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 bg-transparent hover:bg-gray-800 text-white font-bold py-2 px-4 rounded flex items-center"
            >
              <BsFillPlayFill size={25} />
              Watch Trailer
            </a>
          </div>
          <p className="text-sm mt-4 italic">{movie.tagline}</p>
          <div className="mt-7">
            <h3 className="text-xl font-bold">Overview:</h3>
            <p className="text-lg ">{movie.overview}</p>
          </div>
          <div className="mt-7">
            <h3 className="text-l font-bold">Production Companies:</h3>
            <div className="flex items-center">
              {movie.production_companies.map((company, index) => (
                <div key={index} className="flex items-center mr-4">
                  <span className="text-lg">{company.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
