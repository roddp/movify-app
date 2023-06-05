const MovieApp = ({ movie }) => {
  const { title, poster_path, vote_average, vote_count } = movie;

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
      <div className="flex items-center mb-2">
        {stars}
        <span className="text-gray-500 text-sm ml-2">
          {Math.round(vote_average * 10) / 10} stars
        </span>
      </div>
    );
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800">
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
        className="w-full h-auto object-cover"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-800 dark:text-white">
          {title}
        </div>
        {getStarRating()}
      </div>
    </div>
  );
};

export default MovieApp;
