import React from "react";

const ProductSection = () => {
  const products = [
    {
      name: "চিংড়ি শুকটকি",
      imgSrc: "https://yummyfoodsbd.com/wp-content/uploads/2023/04/01m.jpg",
    },
    {
      name: "পেঁয়াজ বেরেস্তা",
      imgSrc: "https://yummyfoodsbd.com/wp-content/uploads/2023/04/02m.jpg",
    },
    {
      name: "রসুন ভাজা",
      imgSrc: "https://yummyfoodsbd.com/wp-content/uploads/2023/04/03m.jpg",
    },
    {
      name: "মরিচের গুঁড়া",
      imgSrc: "https://yummyfoodsbd.com/wp-content/uploads/2023/04/04m.jpg",
    },
    {
      name: "সিক্রেট মসলা",
      imgSrc: "https://yummyfoodsbd.com/wp-content/uploads/2023/04/05m.jpg",
    },
  ];

  return (
    <div className="max-w-screen-lg mx-auto text-center my-10 px-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
        যে সকল উপাদানে তৈরি?
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-center">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={product.imgSrc}
              alt={product.name}
              className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] object-cover rounded-md"
            />
            <p className="mt-2 font-medium text-base sm:text-lg">
              {product.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
