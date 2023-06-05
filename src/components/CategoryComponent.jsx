import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const CategoryComponent = ({ name, data }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleComponent = () => {
    setIsOpen(!isOpen);
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
          isOpen ? "max-h-48" : "max-h-0"
        } overflow-hidden`}
      >
        {isOpen && (
          <div className="flex flex-wrap">
            {data.map((category) => (
              <div key={category.id || category} className="mr-2 mb-2">
                <button className="border border-gray-300 rounded-md px-2 py-1 bg-gray-900 text-white hover:bg-blue-600 hover:border-blue-600">
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
