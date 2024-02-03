import { Helmet } from "react-helmet-async";
import MainBanner from "../../components/Banners/MainBanner";
import Categories from "../../components/Categories/Categories";
import PromoBanner from "../../components/Banners/PromoBanner";
import PopularItems from "../../components/PopularItems/PopularItems";
import LatestProducts from "../../components/LatestProducts/LatestProducts";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Kazimart</title>
      </Helmet>
      <MainBanner />
      <PromoBanner/>
      <Categories />
      <PopularItems/>
      <LatestProducts/>
    </div>
  );
};

export default Home;
