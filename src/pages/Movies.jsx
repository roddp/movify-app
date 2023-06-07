import axios from "axios";
import { useEffect, useState } from "react";
import Filter from "../components/Filter";

import MovieCard from "../components/MovieCard";
import MovieHorizontalCard from "../components/MovieHorizontalCard";
import Loading from "../components/Loading";
import { BsFillGridFill, BsList } from "react-icons/bs";
import Pagination from "../components/Pagination";
import { useAppContext } from "../context/appContext";

const Movies = () => {
  const [genres, setGenres] = useState([]);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewType, setViewType] = useState("grid");
  const [page, setPage] = useState(1);
  const [containerHeight, setContainerHeight] = useState(0);
  const [search, setSearch] = useState("");
  const [selectedCategories, setCategories] = useState([]);
  const [selectedGenres, setselectedGenres] = useState([]);

  const { genresArr, categoriesArr } = useAppContext();

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setPage(1);
  };

  const handleCategory = (e) => {
    const selectedCategory = e.target.innerHTML;
    setCategories((prevCategories) => {
      if (prevCategories.includes(selectedCategory)) {
        return prevCategories.filter(
          (category) => category !== selectedCategory
        );
      } else {
        return prevCategories.concat(selectedCategory);
      }
    });
    console.log(selectedCategories);
  };

  const authFetch = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    Accept: "application/json",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOTM0ZTU3ZTg3ODFlMjNjOTJiMTI2ZGExM2E0ZDlkNyIsInN1YiI6IjYzZjY3ZjU4NjljNzBmMDA4NmZlZjk3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0Amy8-4QI-Vn8_x4SmhcgAbNvsXinGcedcFRN8XK_6E",
    },
  });

  const toggleViewType = () => {
    setViewType((prevType) => (prevType === "grid" ? "list" : "grid"));
  };

  const getGenres = async () => {
    const url = "genre/movie/list?language=en";
    const { data } = await authFetch.get(url);
    setGenres(data.genres);
  };

  const getData = async () => {
    setLoading(true);
    let url = `discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`;

    // if (categoriesArr.includes("TV Shows")) {
    // url = `discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc`;
    //}

    if (search) {
      url = `search/multi?query=${encodeURIComponent(search)}`;
    }

    if (genresArr.length > 0) {
      const genreIds = genresArr.map((genre) => genre).join(",");
      url += `&with_genres=${genreIds}`;
    }

    const { data } = await authFetch.get(url);
    setMovies(data.results);
    setLoading(false);
  };
  const handlePage = (i) => {
    setPage(page + i);
  };

  useEffect(() => {
    getGenres();
    getData();
  }, [page, search, genresArr, categoriesArr]);

  useEffect(() => {
    const handleResize = () => {
      setContainerHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex h-screen">
      <div className="w-1/6">
        <Filter genres={genres} handleChange={handleSearch} />
      </div>
      <div
        className="w-3/4 mt-5 ml-5  overflow-y-auto no-scrollbar"
        style={{ maxHeight: containerHeight - 120 }}
      >
        <div className="flex items-center mb-4">
          <button
            onClick={toggleViewType}
            className={`${
              viewType === "grid" ? "text-purple-500" : "text-gray-500"
            } mr-2`}
          >
            <BsList size={30} />
          </button>
          <button
            onClick={toggleViewType}
            className={`${
              viewType === "list" ? "text-purple-500" : "text-gray-500"
            }`}
          >
            <BsFillGridFill size={30} />
          </button>
        </div>

        <div
          className={`${
            viewType === "list"
              ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
              : ""
          }`}
        >
          {loading ? (
            <Loading />
          ) : viewType === "grid" ? (
            movies?.map((movie) => (
              <MovieHorizontalCard
                key={movie.id}
                movie={movie}
                genres={genres}
              />
            ))
          ) : (
            movies?.map((movie) => (
              <MovieCard key={movie.id} movie={movie} genres={genres} />
            ))
          )}
        </div>
        <Pagination
          currentPage={page}
          handlePreviousPage={() => handlePage(-1)}
          handleNextPage={() => handlePage(1)}
          className="justify-center"
        />
      </div>
    </div>
  );
};

export default Movies;
