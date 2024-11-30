
import type { MenuItem as MenuItemType } from '../../data/menuItems';

interface MenuItemProps {
  item: MenuItemType;
}

export function MenuItem({ item }: MenuItemProps) {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="w-full md:w-1/3">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-48 object-cover rounded-lg"
        />
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-xl font-semibold">{item.name}</h4>
            <span className="text-xl text-orange-600">${item.price}</span>
          </div>
          <p className="text-gray-600">{item.description}</p>
        </div>
        <button className="mt-4 px-4 py-2 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-colors w-full md:w-auto">
          Order Now
        </button>
      </div>
    </div>
  );
}