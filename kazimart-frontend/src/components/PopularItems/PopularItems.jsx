import { useEffect, useState } from "react";
import SectionTitle from "../shared/SectionTitle";
import Item from "../shared/Item";

const PopularItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) =>
          item.category.includes("popular")
        );
        setItems(popularItems);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  console.log(items);

  return (
    <div>
      <SectionTitle
        heading="Popular products that we sold"
        subHeading="We provide the best quality & fresh items near your location"
      />
      <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-6 gap-4">
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default PopularItems;
