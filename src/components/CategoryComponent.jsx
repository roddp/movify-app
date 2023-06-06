import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const CategoryComponent = ({ name, data, handleClick }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const toggleComponent = () => {
    setIsOpen(!isOpen);
  };

  const handleCategoryClick = (categoryId) => {
    const updatedCategories = [...selectedCategories];

    if (updatedCategories.includes(categoryId)) {
      // If the category is already selected, remove it
      const index = updatedCategories.indexOf(categoryId);
      updatedCategories.splice(index, 1);
    } else {
      // If the category is not selected, add it
      updatedCategories.push(categoryId);
    }

    setSelectedCategories(updatedCategories);
    handleClick(updatedCategories);
  };

  return (
    <div className="mb-4 flex-grow">
      <button
        className={`font-semibold mb-2 focus:outline-none flex items-center transition-transform duration-300 ${
          isOpen ? "text-[#6C63FF]" : ""
        }`}
        onClick={toggleComponent}
      >
        {isOpen ? (
          <FiChevronUp className="mr-2" />
        ) : (
          <FiChevronDown className="mr-2" />
        )}
        {name}
      </button>
      <div
        className={`transition-all duration-300 ${
          isOpen ? "h-full" : "max-h-0"
        } `}
      >
        {isOpen && (
          <div className="flex flex-wrap">
            {data.map((category) => (
              <div key={category.id || category} className="mr-2 mb-2">
                <button
                  className={`text-white rounded-md px-2 py-1 hover:bg-blue-600 ${
                    selectedCategories.includes(category.id) ||
                    selectedCategories.includes(category)
                      ? "bg-blue-600"
                      : "bg-gray-900"
                  }`}
                  onClick={() => handleCategoryClick(category.id)}
                >
                  {category.name || category}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryComponent;
