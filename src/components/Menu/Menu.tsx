
import { menuItems } from '../../data/menuItems';
import { MenuItem } from './MenuItem';
import { MenuSearch } from './MenuSearch';
import { MenuFilter } from './MenuFilter';
import { useMenuFilters } from '../../hooks/useMenuFilters';

export function Menu() {
  const {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    categories,
    filteredItems
  } = useMenuFilters(menuItems);

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif text-center mb-16">Our Menu</h2>
        
        <div className="max-w-2xl mx-auto mb-12 space-y-6">
          <MenuSearch
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />
          <MenuFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>

        <div className="grid gap-6">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <MenuItem key={item.name} item={item} />
            ))
          ) : (
            <div className="text-center py-12 text-gray-500">
              No menu items found. Try adjusting your search or filters.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}