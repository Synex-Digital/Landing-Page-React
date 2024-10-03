import React from "react";

const HowToEatSection = () => {
  const points = [
    "গরম ভাতের সাথে সাদা ভাতের সাথে।",
    "জুনা খিচুড়ি ও পোলাও-এর সাথে।",
    "গরম গরম খুদের ভাতের সাথে।",
    "মুড়ি মাখা বা মুড়ি ভর্তার সাথে।",
    "আলু ভর্তার সাথে মিশিয়ে।",
    "বেগুন ভর্তার সাথে মিশিয়ে।",
    "রান্না করা বিভিন্ন শাকের সাথে।",
    "চানাচুরের মতো সরাসরি।",
  ];

  return (
    <div className="bg-black py-10">
      <div className="max-w-[1140px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-center md:text-left">
        {/* Left Section: Text */}
        <div className="text-white flex flex-col md:items-start">
          <h2 className="text-yellow-400 text-2xl md:text-3xl font-bold mb-4">
            যেভাবে খাওয়া যায়
          </h2>
          <ul className="list-disc list-inside text-left">
            {points.map((point, index) => (
              <li key={index} className="mb-2 text-lg">
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section: Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src="https://yummyfoodsbd.com/wp-content/uploads/2024/02/Bala-Image-for-web-copy.webp"
            alt="Product Image"
            className="w-[300px] h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default HowToEatSection;
