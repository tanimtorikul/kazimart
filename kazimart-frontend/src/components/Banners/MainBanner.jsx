import { Link } from "react-router-dom";

const MainBanner = () => {
  return (
    <div className="bg-[#DAECFA] min-h-[600px] py-4 flex justify-around items-center">
      <div>
        <h2>Banner text will be uploaded from admin panel</h2>
        <Link>
          <button className="bg-teal-500 text-white px-4 py-2 text-2xl rounded">
            Shop Now
          </button>
        </Link>
      </div>
      <div>
        <h2>Banner image will be uploaded from admin panel</h2>
      </div>
    </div>
  );
};

export default MainBanner;
