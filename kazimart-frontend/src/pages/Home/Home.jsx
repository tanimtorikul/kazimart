import { Helmet } from "react-helmet-async";
import MainBanner from "../../components/Banners/MainBanner";
import PopularItems from "../../components/PopularItems/PopularItems";
import Categories from "../../components/Categories/Categories";
import PromoBanner from "../../components/Banners/PromoBanner";
import Stats from "../../components/Stats/Stats";
import Brands from "../../components/Brands/Brands";
import About from "../../components/About/About";
import CallToAction from "../../components/CallToAction/CallToAction";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Kazimart</title>
      </Helmet>
      <MainBanner />
      <PromoBanner />
      <Categories />
      <PopularItems/>
      <Stats/>
      <Brands/>
      <About/>
      <CallToAction/>
     
      {/* <LatestProducts/> */}
    </div>
  );
};

export default Home;
