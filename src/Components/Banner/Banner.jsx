import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MoveRight } from "lucide-react";

const Banner = () => {
  const products = [
    {
      id: 1,
      title: "Best Furniture collection for your interior",
      subTitle: "Welcome to chair",
      image: "/src/assets/Banner/Banner_Chair.png",
    },
    {
      id: 2,
      title: "Best Furniture collection for your interior",
      subTitle: "Welcome to cabinet",
      image: "/src/assets/Banner/Banner_Cabinet.png",
    },
    {
      id: 3,
      title: "Best Furniture collection for your interior",
      subTitle: "Welcome to sofa",
      image: "/src/assets/Banner/Banner_Sofa.png",
    },
    {
      id: 4,
      title: "Best Furniture collection for your interior",
      subTitle: "Welcome to chairs isolated",
      image: "/src/assets/Banner/Banner_Chair_Isolated.png",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="lg:container">
      <div className="slider-container w-full h-full">
        <Slider {...settings}>
          {products?.map((product) => (
            <div key={product?.id} className="banner-slide-items pl-10">
              {/* Banner Text */}
              <div className="banner-text">
                <p className="text-base font-inter text-[#272343] uppercase font-normal">
                  {product?.subTitle}
                </p>
                <h3 className="text-6xl text-[#272343] font-inter capitalize leading-16 max-w-[690px] w-full font-bold mb-5">
                  {product?.title}
                </h3>
                <button className="max-w-[180px] w-full flex items-center justify-center gap-2 h-[50px] bg-[#029fae] rounded-lg capitalize text-white font-inter text-base font-semibold cursor-pointer">
                  Shop Now
                  <MoveRight />
                </button>
              </div>

              {/* Banner Image */}
              <div className="banner-image w-full h-[600px] flex items-center justify-end">
                <img src={product?.image} alt={product?.title} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
