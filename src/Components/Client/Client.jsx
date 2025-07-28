import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import { User } from "lucide-react";

const Client = () => {
  const clientSays = [
    {
      id: 1,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "John Doe",
      position: "CEO, Company",
    },
    {
      id: 2,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      name: "John Doe",
      position: "CEO, Company",
    },
    {
      id: 3,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "John Doe",
      position: "CEO, Company",
    },
    {
      id: 3,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "John Doe",
      position: "CEO, Company",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };

  return (
    <div className="lg:container mx-auto">
      <SectionTitle title="What is client says about us" mb="mb-10" />
      <div className="slider-clients-container w-full h-full">
        <Slider {...settings} className="client-slider">
          {clientSays?.map((client, index) => (
            <div key={index} className="client-slider p-5 border-[1px] border-[#e1e1e3] rounded-lg shadow-md">
              <p className="client-say text-xl text-[#636270] font-inter font-normal text-justify pl-2">
                {client?.description}
              </p>
              <div className="flex items-center mt-3">
                <h4>
                  <User size="3rem" />
                </h4>
                <div className="ml-4">
                  <h4 className="text-xl text-[#272343] font-inter font-medium capitalize">
                    {client?.name}
                  </h4>
                  <p className="text-base text-[#9a9caa] font-inter font-normal capitalize">
                    {client?.position}
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

export default Client;
