import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules"; // Correct import for Pagination
import "swiper/css"; // Import Swiper base styles
import "swiper/css/pagination"; // Import Pagination styles
import { FaStar } from "react-icons/fa";

const ReviewSection = () => {
  const reviews = [
    {
      imgSrc:
        "https://yummyfoodsbd.com/wp-content/uploads/2023/10/10-300x300.jpg",
    },
    {
      imgSrc:
        "https://yummyfoodsbd.com/wp-content/uploads/2023/10/10-300x300.jpg",
    },
    {
      imgSrc:
        "https://yummyfoodsbd.com/wp-content/uploads/2023/10/10-300x300.jpg",
    },
    {
      imgSrc:
        "https://yummyfoodsbd.com/wp-content/uploads/2023/10/10-300x300.jpg",
    },
    {
      imgSrc:
        "https://yummyfoodsbd.com/wp-content/uploads/2023/10/10-300x300.jpg",
    },
    {
      imgSrc:
        "https://yummyfoodsbd.com/wp-content/uploads/2023/10/10-300x300.jpg",
    },
    {
      imgSrc:
        "https://yummyfoodsbd.com/wp-content/uploads/2023/10/10-300x300.jpg",
    },
  ];

  return (
    <section className="bg-white py-10">
      <div className="max-w-screen-lg mx-auto text-center px-4">
        {/* Section Title */}
        <h2 className="text-2xl md:text-[3rem] font-extrabold text-black mb-4">
          সম্মানীত কাস্টমারদের রিভিউ
        </h2>
        <div className="w-12 md:w-16 h-1 bg-black mx-auto mb-6"></div>

        {/* Swiper Section */}
        <Swiper
          modules={[Pagination]} // Enable the pagination module
          pagination={{ dynamicBullets: true }} // Enable dynamic bullets
          spaceBetween={10}
          slidesPerView={1} // Default for small devices
          loop={true}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            // When the window width is >= 640px
            640: {
              slidesPerView: 1, // Keep single slide view on smaller devices
            },
            // When the window width is >= 768px (tablets and above)
            768: {
              slidesPerView: 2, // Show 2 slides per view on medium devices (tablets)
            },
            // When the window width is >= 1024px (desktop and larger)
            1024: {
              slidesPerView: 3, // Show 3 slides per view on large devices (desktops)
            },
          }}
          className="py-5"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="h-64 md:h-72 w-[90%] mx-auto overflow-hidden rounded-lg shadow-md">
                <img
                  src={review.imgSrc}
                  alt="Customer Review"
                  className="w-full h-full object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* CTA Button */}
        <div className="mt-6">
        <a
      href="#"
      className="bg-green-500 text-white text-lg font-bold py-3 px-6 rounded-[10px] inline-flex items-center justify-center hover:bg-green-600 transition"
    >
      <span className="mr-2">আরো রিভিউ দেখুন</span> {/* Button Text */}
      <FaStar /> {/* Star Icon */}
    </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
