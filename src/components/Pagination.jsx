import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Pagination = ({ handlePreviousPage, handleNextPage, currentPage }) => {
  return (
    <div className="flex items-center justify-center mt-4">
      <button
        className="flex items-center justify-center p-2 rounded bg-blue-500 text-white"
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
      >
        <BsChevronLeft className="text-lg" />
      </button>
      <span className="mx-4 text-lg">{currentPage}</span>
      <button
        className="flex items-center justify-center p-2 rounded bg-blue-500 text-white"
        onClick={handleNextPage}
      >
        <BsChevronRight className="text-lg" />
      </button>
    </div>
  );
};

export default Pagination;
