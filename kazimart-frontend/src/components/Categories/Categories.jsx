import React from "react";
import { Link } from "react-router-dom";

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
        <Link to="/grocery">
          <CategoryCard title="Grocery" />
        </Link>
        <Link to="/foods-and-sweets">
          <CategoryCard title="Foods and Sweets" />
        </Link>
        <Link to="/fashion">
          <CategoryCard title="Fashion" />
        </Link>
        <Link to="/gadget-and-multimedia">
          <CategoryCard title="Gadget and Multimedia" />
        </Link>
        <Link to="/kazimart-special">
          <CategoryCard title="Kazimart Special" />
        </Link>
        <Link to="/kazimart-services">
          <CategoryCard title="Kazimart Services" />
        </Link>
      </div>
    </div>
  );
};

export default Categories;
