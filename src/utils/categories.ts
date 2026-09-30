export type Category = {
  id: string;
  label: string;
  icon: string;
};

export type CategoryGroup = {
  id: string;
  title: string;
  categories: Category[];
};

export const categoryOptions: CategoryGroup[] = [
  {
    id: "home",
    title: "HOME",
    categories: [
      { id: "rent", label: "Rent", icon: "🏠" },
      { id: "groceries", label: "Groceries", icon: "🛒" },
      { id: "car", label: "Car", icon: "🚘" },
      { id: "gasoline", label: "Gasoline", icon: "⛽" },
      { id: "internet", label: "Internet", icon: "📡" },
      { id: "pharmacy", label: "Pharmacy", icon: "💊" },
      { id: "light", label: "Light", icon: "💡" },
      { id: "bills", label: "Bills", icon: "🧾" },
    ],
  },
  {
    id: "leisure",
    title: "LEISURE",
    categories: [
      { id: "restaurant", label: "Restaurant", icon: "🍲" },
      { id: "coffee", label: "Coffee", icon: "☕" },
      { id: "travel", label: "Travel", icon: "🏝️" },
      { id: "clothes", label: "Clothes", icon: "👕" },
      { id: "gifts", label: "Gifts", icon: "🎁" },
      { id: "books", label: "Books", icon: "📚" },

      // Add these
      { id: "streaming", label: "Streaming", icon: "📺" },
      { id: "shopping", label: "Shopping", icon: "🛍️" },
    ],
  },
  {
    id: "income",
    title: "INCOME",
    categories: [
      { id: "job", label: "Job", icon: "💼" },
      { id: "freelance", label: "Freelance", icon: "💻" },
    ],
  },
  {
    id: "investment",
    title: "INVESTMENT",
    categories: [
      { id: "investment", label: "Investment", icon: "📈" },
    ],
  },
];



export const getCategoryById = (categoryId: string): Category | undefined => {
  for (let group of categoryOptions) {
    const category = group.categories.find((category) => categoryId === category.id);
    if (category) {
      return category;
    }
  }

  return undefined;
}

export type CategoryId =
  (typeof categoryOptions)[number]["categories"][number]["id"];
