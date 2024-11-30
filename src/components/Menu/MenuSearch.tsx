
import { Search } from 'lucide-react';

interface MenuSearchProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export function MenuSearch({ searchTerm, onSearchChange }: MenuSearchProps) {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search menu items..."
        className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:ring-2 focus:ring-orange-600 focus:border-transparent"
      />
    </div>
  );
}