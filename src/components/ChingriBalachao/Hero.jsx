import React from "react";
import White_Logo from "../../assets/ChingriBalachao/White-Logo.webp";
import Button from "../card/ChingriBalachao/Button";

const Hero = () => {
  return (
    <section className="bg-black py-10 font-hind-siliguri">
      <div className="max-w-[1140px] mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-0">
        {/* Left Section */}
        <div className="w-full md:w-[49%] flex flex-col justify-end gap-5 mb-8 md:mb-0">
          <div className="flex justify-center md:justify-start">
            <img src={White_Logo} alt="Logo" className="w-[200px] md:w-auto" />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-yellow-400 font-hind-siliguri text-[36px] md:text-[55px] font-bold">
              চিংড়ি বালাচাও
            </h1>
            <p className="text-white font-hind-siliguri text-[18px] md:text-[21px] font-medium w-full md:w-[550px] mx-auto md:mx-0">
              চিংড়ি বালাচাও সুস্বাদু ও মুখরোচক রেডি টু ইট খাবার। এটি চট্টগ্রাম ও
              কক্সবাজারের ঐতিহ্যবাহী খাবার যা অনেকে চিংড়ি চানাচুরও বলে।
            </p>
          </div>
          <div className="flex justify-center md:justify-start">
            <Button title="অর্ডার করতে চাই" />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-[49%] flex justify-center">
          <img
            src="https://yummyfoodsbd.com/wp-content/uploads/2024/02/Web-Balachao-Main-Image-copy.webp"
            alt="hero"
            className="w-[300px] md:w-auto h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
