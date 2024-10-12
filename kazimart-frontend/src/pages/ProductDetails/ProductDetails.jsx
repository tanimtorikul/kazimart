import { FaGreaterThan } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";


const ProductDetails = () => {
  const { id } = useParams();
  console.log(id);




  return (
    <div>
      <div className="max-w-[1400px] mx-auto">
        {/* Breadcrumb */}
        <div className="flex justify-center items-center space-x-2 mt-4">
          <span>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </span>
          <FaGreaterThan />
          <span>
            <Link to="/shop" className="hover:underline">
              Shop
            </Link>
          </span>
          <FaGreaterThan />
          <span className="text-gray-300">Product Details</span>
        </div>
      </div>
      {/* product details */}
    </div>
  );
};

export default ProductDetails;
