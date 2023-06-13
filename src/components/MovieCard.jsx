const MovieCard = ({ movie }) => {
  const { title, poster_path, vote_average, name, vote_count } = movie;

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
      <div className="flex items-baseline">
        {stars}
        <span className="text-gray-500 text-sm ml-2">{vote_count} votes</span>
      </div>
    );
  };

  return (
    <div className="hover:text-[#6C63FF] flex flex-col max-w-xs rounded overflow-hidden shadow-lg bg-gray-800 hover:bg-gray-700 h-full">
      <div className="h-[300px] w-auto overflow-hidden">
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title || name}
          className="w-full h-full object-fill"
        />
      </div>

      <div className="px-4 py-2">
        <div className="font-bold text-xl mb-2 text-white">{title || name}</div>
      </div>
      <div className="px-4 py-2 mt-auto">{getStarRating()}</div>
    </div>
  );
};

export default MovieCard;
