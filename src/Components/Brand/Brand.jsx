const Brand = () => {
  const brands = [
    {
      id: 1,
      image: "../../../public/Brands/Brand1.png",
    },
    {
      id: 2,
      image: "../../../public/Brands/Brand2.png",
    },
    {
      id: 3,
      image: "../../../public/Brands/Brand3.png",
    },
    {
      id: 4,
      image: "../../../public/Brands/Brand4.png",
    },
    {
      id: 5,
      image: "../../../public/Brands/Brand5.png",
    },
    {
      id: 6,
      image: "../../../public/Brands/Brand6.png",
    },
    {
      id: 7,
      image: "../../../public/Brands/Brand7.png",
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
