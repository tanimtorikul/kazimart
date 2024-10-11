import { useEffect, useState } from "react";
import SectionTitle from "../shared/SectionTitle";
import Item from "../shared/Item";

const PopularItems = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("dummyitems.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "Popular");
        setItems(popularItems);
      });
  }, []);
  console.log(items);

  return (
    <div>
      <SectionTitle
        heading="Popular product that we sold"
        subHeading="We provide best quality & fresh items near your location"
      />
      <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-6 gap-4">
        {items.map((item) => (
          <Item key={item.id} item={item}></Item>
        ))}
      </div>
    </div>
  );
};

export default PopularItems;
