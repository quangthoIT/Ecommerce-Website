import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Banner from "../../Components/Banner/Banner";
import Delivery from "../../Components/Delivery/Delivery";

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
    </div>
  );
};

export default Home;
