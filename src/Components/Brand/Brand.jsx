import Brand1 from "../../../src/assets/Brands/Brand1.png";
import Brand2 from "../../../src/assets/Brands/Brand2.png";
import Brand3 from "../../../src/assets/Brands/Brand3.png";
import Brand4 from "../../../src/assets/Brands/Brand4.png";
import Brand5 from "../../../src/assets/Brands/Brand5.png";
import Brand6 from "../../../src/assets/Brands/Brand6.png";
import Brand7 from "../../../src/assets/Brands/Brand7.png";
const Brand = () => {
  const brands = [
    {
      id: 1,
      image: Brand1,
    },
    {
      id: 2,
      image: Brand2,
    },
    {
      id: 3,
      image: Brand3,
    },
    {
      id: 4,
      image: Brand4,
    },
    {
      id: 5,
      image: Brand5,
    },
    {
      id: 6,
      image: Brand6,
    },
    {
      id: 7,
      image: Brand7,
    },
  ];

  return (
    <div className="lg:container mx-auto">
      <div className="grid grid-cols-7 items-center justify-center">
        {brands.map((brand) => (
          <div key={brand?.id} className="brand-item justify-center flex">
            <img src={brand?.image} alt="brand" className="w-auto" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brand;
