import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../../../public/products.json";
import Item from "../../components/shared/Item";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const filtered = products.filter((product) =>
      product.category.includes(categoryName.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [categoryName]);

  //   console.log(filteredProducts);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="max-w-[1400px] mx-auto bg-teal-500 my-2 py-24 text-white">
        <h2 className="capitalize text-2xl font-bold text-center">
          {categoryName}
        </h2>
        <p className="my-4 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          officia sapiente nostrum magni reprehenderit, modi eius consequuntur
          neque aperiam eos!
        </p>
      </div>

      {/* Product Cards */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-6 gap-4">
        {filteredProducts?.map((product) => (
          <Item key={product.id} item={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
