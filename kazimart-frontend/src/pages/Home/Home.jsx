import { Helmet } from "react-helmet-async";
import MainBanner from "../../components/Banners/MainBanner";
import Categories from "../../components/Categories/Categories";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Kazimart</title>
      </Helmet>
      <MainBanner />
      <Categories />
    </div>
  );
};

export default Home;
