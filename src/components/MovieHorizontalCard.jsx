const MovieHorizontalCard = ({ movie, genres }) => {
  const {
    title,
    poster_path,
    vote_average,
    name,
    overview,
    release_date,
    genre_ids,
  } = movie;

  const getStarRating = () => {
    const rating = Math.round(vote_average / 2);
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(
          <span key={i} className="text-yellow-500 text-lg">
            &#9733;
          </span>
        );
      } else {
        stars.push(
          <span key={i} className="text-gray-400 text-lg">
            &#9733;
          </span>
        );
      }
    }

    return (
      <div className="flex items-center">
        {stars}
        <span className="text-gray-500 text-sm ml-2">
          {Math.round(vote_average * 10) / 10} stars
        </span>
      </div>
    );
  };

  const getGenreNames = () => {
    if (genre_ids) {
      const movieGenres = genre_ids.map((genreId) => {
        const genre = genres?.find((genre) => genre.id === genreId);
        return genre ? genre.name : "";
      });
      return movieGenres.filter((genre) => genre !== "");
    }
  };

  return (
    <div className="flex bg-gray-800 shadow-md rounded p-4 mb-5">
      <div className="min-h-max max-w-[150px] mr-4">
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          className="w-full h-full object-scale-down"
        />
      </div>
      <div className="flex flex-col">
        <h2 className="text-lg font-bold">{title || name}</h2>

        <div className="mb-2">{getStarRating()}</div>
        <p className="text-gray-400">Released: {release_date}</p>
        <p className="text-white mt-1">{overview}</p>

        <div className="mt-auto">
          {getGenreNames()?.map((genre, index) => (
            <span
              key={index}
              className="inline-block bg-[#6C63FF] text-white px-2 py-1 rounded-full text-xs mr-2 hover:bg-blue-600 hover:border-blue-600 cursor-pointer"
            >
              {genre}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieHorizontalCard;
