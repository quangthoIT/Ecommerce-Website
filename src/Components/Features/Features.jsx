import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SectionTitle from "../SectionTitle/SectionTitle";
import { ShoppingCart } from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "Library Stool 1",
      price: "$200",
      image: "/src/assets/Features/product1.png",
    },
    {
      title: "Library Stool 2",
      status: "Sales",
      price: "$250",
      image: "/src/assets/Features/product2.png",
      originalPrice: "$300",
    },
    {
      title: "Library Stool 3",
      status: "New",
      price: "$200",
      image: "/src/assets/Features/product3.png",
    },
    {
      title: "Library Stool 4",
      status: "Sales",
      price: "$300",
      image: "/src/assets/Features/product4.png",
      originalPrice: "$350",
    },
    {
      title: "Library Stool 5",
      status: "New",
      price: "$175",
      image: "/src/assets/Features/product5.png",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div>
      <div className="lg:container mx-auto">
        <SectionTitle title="Features Products" mb="mb-11" />

        <div className="slider-feature-container w-full h-full">
          <Slider {...settings}>
            {features?.map((feature, index) => (
              <div key={index} className="p-4">
                <div className="feature-image mb-4 relative">
                  <img
                    className="w-full h-full object-cover rounded-lg"
                    src={feature?.image}
                    alt={feature?.title}
                  />
                  {feature?.status && (
                    <div className="absolute top-4 left-4 bg-[#007580] text-white px-2 py-1 rounded-lg">
                      <button className="text-sm font-inter font-normal">
                        {feature?.status}
                      </button>
                    </div>
                  )}
                  <div className="feature-content">
                    <div className="flex items-center justify-between pt-4">
                      <h4 className="text-base text-[#007580] font-inter font-normal capitalize mb-2">
                        {feature?.title}
                      </h4>
                      <span className="bg-[#007580] h-[44px] w-[44px] text-white rounded-lg flex items-center justify-center">
                        <ShoppingCart />
                      </span>
                    </div>
                    <p className="text-xl text-[#272343] font-inter font-semibold flex items-center gap-2">
                      {feature?.price}
                      {feature?.originalPrice && (
                        <span className="line-through text-sm text-[#9a9caa] font-inter font-normal">
                          {feature?.originalPrice}
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
    </div>
  );
};

export default Features;
