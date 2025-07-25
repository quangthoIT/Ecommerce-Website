const Brand = () => {
  const brands = [
    {
      id: 1,
      image: "/src/assets/Brands/Brand1.png",
    },
    {
      id: 2,
      image: "/src/assets/Brands/Brand2.png",
    },
    {
      id: 3,
      image: "/src/assets/Brands/Brand3.png",
    },
    {
      id: 4,
      image: "/src/assets/Brands/Brand4.png",
    },
    {
      id: 5,
      image: "/src/assets/Brands/Brand5.png",
    },
    {
      id: 6,
      image: "/src/assets/Brands/Brand6.png",
    },
    {
      id: 7,
      image: "/src/assets/Brands/Brand7.png",
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
