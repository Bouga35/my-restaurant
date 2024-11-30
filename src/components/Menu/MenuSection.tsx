
import { MenuItem } from './MenuItem';
import type { MenuSection as MenuSectionType } from '../../data/menuItems';

interface MenuSectionProps {
  section: MenuSectionType;
}

export function MenuSection({ section }: MenuSectionProps) {
  return (
    <div>
      <h3 className="text-2xl font-serif mb-6">{section.category}</h3>
      <div className="space-y-6">
        {section.items.map((item) => (
          <MenuItem key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
}