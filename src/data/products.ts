export interface Product {
  id: string;
  itemNumber: string;
  name: string;
  category: string;
  price: string;
  description: string;
  image: string;
}

export const products: Product[] = [
  {
    id: "1",
    itemNumber: "DIS-001",
    name: "Classic Dinner Fork Set",
    category: "Flatware",
    price: "£24.99",
    description: "Elegant stainless steel dinner forks, set of 6",
    image: "https://images.unsplash.com/photo-1596457074931-1c5689152929?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWx2ZXIlMjBzcG9vbnMlMjBmb3Jrc3xlbnwxfHx8fDE3NjQwMjU4OTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "2",
    itemNumber: "DIS-002",
    name: "Premium Cutlery Set",
    category: "Flatware",
    price: "£89.99",
    description: "24-piece premium stainless steel cutlery set with elegant design",
    image: "https://images.unsplash.com/photo-1760594308373-3e9b009aeae8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwY3V0bGVyeSUyMGZsYXR3YXJlfGVufDF8fHx8MTc2NDAyNTg5Nnww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "3",
    itemNumber: "DIS-003",
    name: "Porcelain Dinner Plates",
    category: "Dinnerware",
    price: "£34.99",
    description: "Set of 4 elegant porcelain dinner plates",
    image: "https://images.unsplash.com/photo-1626971847402-ca3fde60974d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaW5uZXIlMjBwbGF0ZXMlMjBkaW5uZXJ3YXJlfGVufDF8fHx8MTc2NDAyNTg5N3ww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "4",
    itemNumber: "DIS-004",
    name: "Serving Platter & Utensils",
    category: "Serving",
    price: "£45.99",
    description: "Beautiful serving platter with matching serving utensils",
    image: "https://images.unsplash.com/photo-1762214816703-83a17260ffae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJ2aW5nJTIwcGxhdHRlciUyMHV0ZW5zaWxzfGVufDF8fHx8MTc2NDAyNTg5OHww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "5",
    itemNumber: "DIS-005",
    name: "Professional Knife Set",
    category: "Knives",
    price: "£129.99",
    description: "Premium stainless steel knife set with wooden block",
    image: "https://images.unsplash.com/photo-1503197553955-b4eafae3e08e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrbmlmZSUyMHNldCUyMGN1dGxlcnl8ZW58MXx8fHwxNzY0MDI1ODk4fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "6",
    itemNumber: "DIS-006",
    name: "Crystal Wine Glasses",
    category: "Glassware",
    price: "£39.99",
    description: "Set of 6 elegant crystal wine glasses",
    image: "https://images.unsplash.com/photo-1610458034932-dc165f29499e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5lJTIwZ2xhc3NlcyUyMHN0ZW13YXJlfGVufDF8fHx8MTc2NDAyNTg5OHww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "7",
    itemNumber: "DIS-007",
    name: "Steak Knives Set",
    category: "Knives",
    price: "£54.99",
    description: "Set of 8 professional steak knives with serrated edges",
    image: "https://images.unsplash.com/photo-1503197553955-b4eafae3e08e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrbmlmZSUyMHNldCUyMGN1dGxlcnl8ZW58MXx8fHwxNzY0MDI1ODk4fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "8",
    itemNumber: "DIS-008",
    name: "Table Spoon Collection",
    category: "Flatware",
    price: "£19.99",
    description: "Set of 6 classic table spoons in polished stainless steel",
    image: "https://images.unsplash.com/photo-1596457074931-1c5689152929?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWx2ZXIlMjBzcG9vbnMlMjBmb3Jrc3xlbnwxfHx8fDE3NjQwMjU4OTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "9",
    itemNumber: "DIS-009",
    name: "Soup Bowl Set",
    category: "Dinnerware",
    price: "£29.99",
    description: "Set of 4 ceramic soup bowls with elegant finish",
    image: "https://images.unsplash.com/photo-1626971847402-ca3fde60974d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaW5uZXIlMjBwbGF0ZXMlMjBkaW5uZXJ3YXJlfGVufDF8fHx8MTc2NDAyNTg5N3ww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "10",
    itemNumber: "DIS-010",
    name: "Salad Serving Set",
    category: "Serving",
    price: "£22.99",
    description: "Wooden salad servers with stainless steel accents",
    image: "https://images.unsplash.com/photo-1762214816703-83a17260ffae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJ2aW5nJTIwcGxhdHRlciUyMHV0ZW5zaWxzfGVufDF8fHx8MTc2NDAyNTg5OHww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "11",
    itemNumber: "DIS-011",
    name: "Champagne Flutes",
    category: "Glassware",
    price: "£44.99",
    description: "Set of 4 crystal champagne flutes",
    image: "https://images.unsplash.com/photo-1610458034932-dc165f29499e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5lJTIwZ2xhc3NlcyUyMHN0ZW13YXJlfGVufDF8fHx8MTc2NDAyNTg5OHww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "12",
    itemNumber: "DIS-012",
    name: "Complete Dinnerware Set",
    category: "Dinnerware",
    price: "£149.99",
    description: "16-piece complete dinnerware set for 4 people",
    image: "https://images.unsplash.com/photo-1626971847402-ca3fde60974d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaW5uZXIlMjBwbGF0ZXMlMjBkaW5uZXJ3YXJlfGVufDF8fHx8MTc2NDAyNTg5N3ww&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

export const categories = ["All", "Flatware", "Dinnerware", "Serving", "Knives", "Glassware"];