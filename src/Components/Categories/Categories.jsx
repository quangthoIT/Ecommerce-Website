import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SectionTitle from "../SectionTitle/SectionTitle";
import categories1 from "../../../src/assets/Categories/categories1.png";
import categories2 from "../../../src/assets/Categories/categories2.png";
import categories3 from "../../../src/assets/Categories/categories3.png";
import categories4 from "../../../src/assets/Categories/categories4.png";
import categories5 from "../../../src/assets/Categories/categories5.png";

const Categories = () => {
  const categories = [
    {
      title: "Chair",
      products: "275 Products",
      image: categories1,
    },
    {
      title: "Wooden Cabinet",
      products: "148 Products",
      image: categories2,
    },
    {
      title: "Sofa",
      products: "296 Products",
      image: categories3,
    },
    {
      title: "Woven Chair",
      products: "304 Products",
      image: categories4,
    },
    {
      title: "Sofa Set",
      products: "181 Products",
      image: categories5,
    },
  ];

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "50px",
    slidesToShow: 3,
    speed: 500,
  };

  return (
    <div>
      <div className="lg:container mx-auto">
        <SectionTitle title="Top Categories" mb="mb-11" />

        <div className="slider-categories-container w-full h-full">
          <Slider {...settings}>
            {categories?.map((category, index) => (
              <div key={index} className="p-4 h-[400px]">
                <div className="categories-image mb-4 relative">
                  <img
                    className="w-full h-[400px] object-cover rounded-lg"
                    src={category?.image}
                    alt={category?.title}
                  />
                  <div className="absolute bottom-0 left-0 w-full h-[70px] bg-[#272343]  bg-opacity-50 flex flex-col justify-center p-4">
                    <h4 className="text-xl text-white font-semibold font-inter mb-1 capitalize">
                      {category?.title}
                    </h4>
                    <p className="text-sm text-white capitalize fotn-normal font-inter mb-2">
                      {category?.products}
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

export default Categories;
