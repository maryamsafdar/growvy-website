"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";

export default function TestimonialsSlider() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-12">

      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="bg-gradient-to-br from-green-900 via-lime-600 to-yellow-500 p-[6px] rounded-3xl shadow-md">
            <div className="bg-white rounded-2xl p-6 flex items-start gap-4">
              <Image
                src="/User.jpg"
                alt="User 1"
                width={60}
                height={60}
                className="rounded-full object-cover"
              />
              <div>
                <p className="text-gray-700 font-semibold mb-2">
                  Excellent Experience with Growvy.
                </p>
                <div className="text-yellow-500 text-lg">{'\u2605'.repeat(5)}</div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="bg-gradient-to-br from-green-900 via-lime-600 to-yellow-500 p-[6px] rounded-3xl shadow-md">
            <div className="bg-white rounded-2xl p-6 flex items-start gap-4">
              <Image
                src="/User.jpg"
                alt="User 2"
                width={60}
                height={60}
                className="rounded-full border-4 border-black object-cover"
              />
              <div>
                <p className="text-gray-700 font-semibold mb-2">
                  Growvy made hiring so much easier!
                </p>
                <div className="text-yellow-500 text-lg">{'\u2605'.repeat(5)}</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
