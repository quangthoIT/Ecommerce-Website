import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Banner from "../../Components/Banner/Banner";
import Delivery from "../../Components/Delivery/Delivery";
import Brand from "../../Components/Brand/Brand";
import Features from "../../Components/Features/Features";

const Home = () => {
  return (
    <div>
      {/* Banner Component */}
      <div className="w-full min-h-[629px] bg-[#f0f2f3] flex items-center justify-center rounded-b-2xl">
        <Banner />
      </div>

      {/* Delivery Component */}
      <div className="delivery-component w-full min-h-[120px]">
        <Delivery />
      </div>

      {/* Brand Component */}
      <div className="brand-component w-full h-[150px] mt-6 mb-6 flex items-center justify-center">
        <Brand />
      </div>

      {/* Features Component */}
      <div className="features-component w-full flex items-center justify-center mb-[40px]">
        <Features />
      </div>
    </div>
  );
};

export default Home;
// 46:00
