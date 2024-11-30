import { useState, useMemo } from 'react';
import { MenuItem, MenuSection } from '../data/menuItems';

export function useMenuFilters(menuItems: MenuSection[]) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = useMemo(() => 
    menuItems.map(section => section.category),
    [menuItems]
  );

  const filteredItems = useMemo(() => {
    const searchLower = searchTerm.toLowerCase();
    
    let items: MenuItem[] = [];
    
    menuItems.forEach(section => {
      if (selectedCategory === 'all' || selectedCategory === section.category) {
        items = [...items, ...section.items];
      }
    });

    return items.filter(item =>
      item.name.toLowerCase().includes(searchLower) ||
      item.description.toLowerCase().includes(searchLower)
    );
  }, [menuItems, searchTerm, selectedCategory]);

  return {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    categories,
    filteredItems
  };
}