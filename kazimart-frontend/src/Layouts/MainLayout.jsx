import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";


const MainLayout = () => {
    return (
        <div className="font-jost max-w-[1280px] mx-auto">
            <Navbar/>

            <Outlet/>
        </div>
    );
};

export default MainLayout;