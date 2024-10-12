import cashless from "../../assets/cashless.png";
import delivery from "../../assets/delivery.png";
import offer from "../../assets/offer.png";
import shop from "../../assets/shop.png";
const Stats = () => {
  return (
    <div className="max-w-screen-2xl mx-auto my-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-4 items-center justify-center gap-4">
        <div className="flex rounded-xl p-6 gap-5 border-2 border-gray-300 items-center justify-center">
          <img className="w-10" src={cashless} alt="Shopper" />
          <p className="text-lg md:text-xl">
            <span className="font-bold text-teal-500">+1500 products</span> to
            shop from
          </p>
        </div>
        <div className="flex rounded-xl p-6 gap-5 border-2 border-gray-300 items-center justify-center">
          <img className="w-10" src={delivery} alt="Cashless Payment" />
          <p className="text-lg md:text-xl">
            <span className="font-bold text-teal-500">Pay after</span>{" "}
            receiving products
          </p>
        </div>
        <div className="flex rounded-xl p-6 gap-5 border-2 border-gray-300 items-center justify-center">
          <img className="w-10" src={offer} alt="Delivery Man" />
          <p className="text-lg md:text-xl">
            Get your delivery within{" "}
            <span className="font-bold text-teal-500">1 hour</span>
          </p>
        </div>
        <div className="flex rounded-xl p-6 gap-5 border-2 border-gray-300 items-center justify-center">
          <img className="w-10" src={shop} alt="Offers" />
          <p className="text-lg md:text-xl">
            <span className="font-bold text-teal-500">Get offers</span> that
            save your money
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
