import CategoryComponent from "./CategoryComponent";
import Loading from "./Loading";
import SearchField from "./SearchField";
function Filter({ genres, handleChange, handleClick }) {
  const altcategories = ["All", "Movies", "TV Shows"];

  const trending = ["All", "Movies", "TV Shows"];

  return (
    <div className="flex flex-col bg-gray-800 p-4 text-white overflow-y-clip">
      <h2 className="text-xl font-bold mb-4">Filter</h2>
      <SearchField handleChange={handleChange} />
      <CategoryComponent
        name="Category"
        data={altcategories}
        handleClick={handleClick}
      />
      {genres ? <CategoryComponent name="Genres" data={genres} /> : <Loading />}
      <CategoryComponent name="Trending" data={trending} />

      <button className="bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700">
        Apply
      </button>
    </div>
  );
}

export default Filter;
