import { useEffect, useState } from "react";
import SectionTitle from "../shared/SectionTitle";
import CategoryCard from "./CategoryCard"; // Import the CategoryCard component

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("categories.json");
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="my-8">
      <SectionTitle
        heading="Shop by Category"
        subHeading="Discover the Trends and Favorites"
      />

      <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-6">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
