import SectionTitle from "../shared/SectionTitle";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <div className="my-8">
      <SectionTitle
        heading="Popular Categories"
        subHeading="Discover the Trends and Favorites"
      />

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-6 mt-6">
        <CategoryCard title="Grocery" />
        <CategoryCard title="Foods and Sweets" />
        <CategoryCard title="Fashion" />
        <CategoryCard title="Gadget and Multimedia" />
        <CategoryCard title="Kazimart Special" />
        <CategoryCard title="Kazimart Services" />
      </div>
    </div>
  );
};

export default Categories;
