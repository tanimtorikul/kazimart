import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <div>
      <div className="font-jost max-w-[1280px] mx-auto">
        <Navbar />
        <div className="border-b"></div>
      </div>

      <div className="max-w-[1400px] mx-auto py-8 px-2 md:px-0 min-h-screen">
        <Outlet />
      </div>
      <div className="max-w-[1280px] mx-auto">
        <Footer />
      </div>
      <Toaster />

    </div>
  );
};

export default MainLayout;
