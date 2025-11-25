import { Button } from './ui/button';

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CategoryFilter({ categories, activeCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center px-4">
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? "default" : "outline"}
          onClick={() => onCategoryChange(category)}
          className={`touch-manipulation text-sm md:text-base ${
            activeCategory === category
              ? "bg-[#2C3E50] hover:bg-[#34495E] text-white"
              : "border-[#C4A571] text-[#2C3E50] hover:bg-[#C4A571] hover:text-white"
          }`}
        >
          {category}
        </Button>
      ))}
    </div>
  );
}