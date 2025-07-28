import { useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { ShoppingCart } from "lucide-react";

const Product = () => {
  const [active, setActive] = useState({
    id: 0,
    product: "All",
  });

  const productsTitle = [
    {
      id: 0,
      title: "All",
      product: "All",
    },
    {
      id: 1,
      title: "Newest",
      product: "Newest",
    },
    {
      id: 2,
      title: "Trending",
      product: "Trending",
    },
    {
      id: 3,
      title: "Best Seller",
      product: "Best Seller",
    },
  ];

  const products = [
    {
      title: "Library Stool 1",
      price: "$200",
      image: "../../../src/assets/Products/product1.png",
      product: "All",
    },
    {
      title: "Library Stool 2",
      status: "Sales",
      price: "$250",
      image: "../../../src/assets/Products/product2.png",
      originalPrice: "$300",
      product: "All",
    },
    {
      title: "Library Stool 3",
      status: "Sales",
      price: "$139",
      image: "../../../src/assets/Products/product3.png",
      product: "All",
      originalPrice: "$190",
    },
    {
      title: "Library Stool 4",
      status: "New",
      price: "$250",
      image: "../../../src/assets/Products/product4.png",
      product: "All",
    },
    {
      title: "Library Stool 5",
      status: "Sales",
      price: "$275",
      image: "../../../src/assets/Products/product5.png",
      product: "All",
      originalPrice: "$300",
    },
    {
      title: "Library Stool 6",
      status: "New",
      price: "$190",
      image: "../../../src/assets/Products/product6.png",
      product: "All",
    },
    {
      title: "Library Stool 7",
      status: "Sales",
      price: "$139",
      image: "../../../src/assets/Products/product7.png",
      product: "All",
      originalPrice: "$150",
    },
    {
      title: "Library Stool 8",
      status: "Sales",
      price: "$250",
      image: "../../../src/assets/Products/product8.png",
      product: "All",
      originalPrice: "$300",
    },
    {
      title: "Library Stool 9",
      status: "Sales",
      price: "$175",
      image: "../../../src/assets/Products/product9.png",
      product: "All",
      originalPrice: "$225",
    },
    {
      title: "Library Stool 10",
      status: "Sales",
      price: "$230",
      image: "../../../src/assets/Products/product10.png",
      product: "All",
      originalPrice: "$250",
    },
    {
      title: "Library Stool 11",
      price: "$130",
      image: "../../../src/assets/Products/product11.png",
      product: "All",
    },
    {
      title: "Library Stool 12",
      status: "New",
      price: "$245",
      image: "../../../src/assets/Products/product12.png",
      product: "All",
    },
    {
      title: "Library Stool 13",
      status: "Sales",
      price: "$180",
      image: "../../../src/assets/Products/product13.png",
      product: "All",
      originalPrice: "$200",
    },
    {
      title: "Library Stool 14",
      status: "Sales",
      price: "$199",
      image: "../../../src/assets/Products/product14.png",
      product: "All",
      originalPrice: "$239",
    },
    {
      title: "Library Stool 15",
      price: "$289",
      image: "../../../src/assets/Products/product15.png",
      product: "All",
    },
    {
      title: "Library Stool 1",
      price: "$200",
      image: "../../../src/assets/Products/product1.png",
      product: "Best Seller",
    },
    {
      title: "Library Stool 2",
      status: "Sales",
      price: "$250",
      image: "../../../src/assets/Products/product2.png",
      originalPrice: "$300",
      product: "Best Seller",
    },
    {
      title: "Library Stool 3",
      status: "Sales",
      price: "$139",
      image: "../../../src/assets/Products/product3.png",
      product: "Best Seller",
      originalPrice: "$190",
    },
    {
      title: "Library Stool 4",
      status: "New",
      price: "$250",
      image: "../../../src/assets/Products/product4.png",
      product: "Best Seller",
    },
    {
      title: "Library Stool 5",
      status: "Sales",
      price: "$275",
      image: "../../../src/assets/Products/product5.png",
      product: "Best Seller",
      originalPrice: "$300",
    },
    {
      title: "Library Stool 6",
      status: "New",
      price: "$190",
      image: "../../../src/assets/Products/product6.png",
      product: "Trending",
    },
    {
      title: "Library Stool 7",
      status: "Sales",
      price: "$139",
      image: "../../../src/assets/Products/product7.png",
      product: "Trending",
      originalPrice: "$150",
    },
    {
      title: "Library Stool 8",
      status: "Sales",
      price: "$250",
      image: "../../../src/assets/Products/product8.png",
      product: "Trending",
      originalPrice: "$300",
    },
    {
      title: "Library Stool 9",
      status: "Sales",
      price: "$175",
      image: "../../../src/assets/Products/product9.png",
      product: "Newest",
      originalPrice: "$225",
    },
    {
      title: "Library Stool 10",
      status: "Sales",
      price: "$230",
      image: "../../../src/assets/Products/product10.png",
      product: "Best Seller",
      originalPrice: "$250",
    },
    {
      title: "Library Stool 11",
      price: "$130",
      image: "../../../src/assets/Products/product11.png",
      product: "Newest",
    },
    {
      title: "Library Stool 12",
      status: "New",
      price: "$245",
      image: "../../../src/assets/Products/product12.png",
      product: "Newest",
    },
    {
      title: "Library Stool 13",
      status: "Sales",
      price: "$180",
      image: "../../../src/assets/Products/product13.png",
      product: "Trending",
      originalPrice: "$200",
    },
    {
      title: "Library Stool 14",
      status: "Sales",
      price: "$199",
      image: "../../../src/assets/Products/product14.png",
      product: "Trending",
      originalPrice: "$239",
    },
    {
      title: "Library Stool 15",
      price: "$289",
      image: "../../../src/assets/Products/product15.png",
      product: "Newest",
    },
  ];

  const productFilter = products.filter(
    (product) => product.product === active?.product
  );

  return (
    <div className="lg:container mx-auto">
      <div className="flex flex-col items-center justify-center">
        <SectionTitle title="Our Product" textAlign={"center"} mb={"mb-8"} />

        <div className="flex items-center justify-center gap-8 mb-10">
          {productsTitle?.map((title, index) => (
            <button
              key={title?.id}
              onClick={() =>
                setActive({ id: title?.id, product: title?.product })
              }
              className={`text-base font-black uppercase font-inter cursor-pointer ${
                active?.id === index ? "text-[#272343]" : "text-[#9a9caa]"
              }`}
            >
              {title?.title}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-4 items-center gap-6">
        {productFilter?.map((product, index) => (
          <div key={index} className="p-4">
            <div className="product-image mb-4 relative">
              <img
                className="w-full max-h-[312px] object-cover rounded-lg"
                src={product?.image}
                alt={product?.title}
              />
              {product?.status && (
                <div className="absolute top-4 left-4 bg-[#007580] text-white px-2 py-1 rounded-lg">
                  <button className="text-sm font-inter font-normal">
                    {product?.status}
                  </button>
                </div>
              )}

              <div className="product-content">
                <div className="flex items-center justify-between pt-4">
                  <h4 className="text-base text-[#007580] font-inter font-normal capitalize mb-2">
                    {product?.title}
                  </h4>
                  <span className="bg-[#007580] h-[44px] w-[44px] text-white rounded-lg flex items-center justify-center">
                    <ShoppingCart />
                  </span>
                </div>
                <p className="text-xl text-[#272343] font-inter font-semibold flex items-center gap-2">
                  {product?.price}
                  {product?.originalPrice && (
                    <span className="line-through text-sm text-[#9a9caa] font-inter font-normal">
                      {product?.originalPrice}
                    </span>
                  )}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
