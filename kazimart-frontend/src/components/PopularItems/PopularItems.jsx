import SectionTitle from "../shared/SectionTitle";
import Item from "../shared/Item";
import useProducts from "../../hooks/useProducts";

const PopularItems = () => {
  const [items] = useProducts();
  const popularItems = items.filter((item) =>
    item.category.includes("popular")
  );

  console.log(popularItems);

  return (
    <div>
      <SectionTitle
        heading="Popular products that we sold"
        subHeading="We provide the best quality & fresh items near your location"
      />
      <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-6 gap-4">
        {popularItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default PopularItems;
