import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <div className=" mx-auto">
      <div className=" max-w-[1800px] font-poppins  mx-auto">
        <Navbar />
        <div className="border-b border-2"></div>
      </div>

      <div className="py-2 px-2 md:px-0 min-h-screen">
        <Outlet />
      </div>
      <div >
        <Footer />
      </div>
      <Toaster />

    </div>
  );
};

export default MainLayout;
