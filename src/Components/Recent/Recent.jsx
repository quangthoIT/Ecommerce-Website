import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ShoppingCart } from "lucide-react";

import product1 from "../../../src/assets/Recent/product1.png";
import product2 from "../../../src/assets/Recent/product2.png";
import product3 from "../../../src/assets/Recent/product3.png";
import product4 from "../../../src/assets/Recent/product4.png";
import product5 from "../../../src/assets/Recent/product5.png";
import product6 from "../../../src/assets/Recent/product6.png";
import SectionTitle from "../SectionTitle/SectionTitle";

const Recent = () => {
  const recents = [
    {
      title: "Sofa",
      price: "$200",
      image: product1,
    },
    {
      title: "Swivel Chair",
      status: "New",
      price: "$190",
      image: product2,
    },
    {
      title: "Chair",
      status: "Sales",
      price: "$175",
      image: product3,
      originalPrice: "$225",
    },
    {
      title: "Wooden Cabinet",
      status: "New",
      price: "$130",
      image: product4,
    },
    {
      title: "Woven Chair",
      status: "New",
      price: "$245",
      image: product5,
    },
    {
      title: "Armchair",
      status: "Sales",
      price: "$180",
      image: product6,
      originalPrice: "$200",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
  };
  return (
    <div className="lg:container mx-auto">
      <SectionTitle title="Recently Added" mb={"mb-11"} />
      <div className="slider-recent-container w-full h-full">
        <Slider {...settings}>
          {recents?.map((recent, index) => (
            <div key={index} className="p-4">
              <div className="recent-image mb-4 relative">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src={recent?.image}
                  alt={recent?.title}
                />
                {recent?.status && (
                  <div className="absolute top-4 left-4 bg-[#007580] text-white px-2 py-1 rounded-lg">
                    <button className="text-sm font-inter font-normal">
                      {recent?.status}
                    </button>
                  </div>
                )}

                <div className="recent-content">
                  <div className="flex items-center justify-between pt-4">
                    <h4 className="text-base text-[#007580] font-inter font-normal capitalize mb-2">
                      {recent?.title}
                    </h4>
                    <span className="bg-[#007580] h-[44px] w-[44px] text-white rounded-lg flex items-center justify-center cursor-pointer">
                      <ShoppingCart className="transition duration-300 transform hover:scale-110"/>
                    </span>
                  </div>
                  <p className="text-xl text-[#272343] font-inter font-semibold flex items-center gap-2">
                    {recent?.price}
                    {recent?.originalPrice && (
                      <span className="line-through text-sm text-[#9a9caa] font-inter font-normal">
                        {recent?.originalPrice}
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Recent;
