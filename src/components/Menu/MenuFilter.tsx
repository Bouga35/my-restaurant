

interface MenuFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function MenuFilter({ categories, selectedCategory, onCategoryChange }: MenuFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onCategoryChange('all')}
        className={`px-4 py-2 rounded-full transition-colors ${
          selectedCategory === 'all'
            ? 'bg-orange-600 text-white'
            : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
        }`}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-full transition-colors ${
            selectedCategory === category
              ? 'bg-orange-600 text-white'
              : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}