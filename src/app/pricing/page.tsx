"use client";

import RecruitmentSolution from "@/component/RecruimentSolution";
import ScheduleCall from "@/component/ScheduleCall";
import Image from "next/image";
import Link from "next/link";

export default function PricingPage() {
  return (
    <main className="bg-white text-black">
      {/* Header */}
      <section className="bg-green-100 text-center py-12 px-6 rounded-b-[10rem] w-full max-w-none"
       data-aos="fade-up">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-8">Pricing</h1>
       <p className="text-gray-700 max-w-2xl mx-auto text-base md:text-lg mt-5">
  &quot;Discover flexible pricing plans tailored to your needs—start growing with us today!&quot;
</p>

      </section>

      {/* Recruitment Section */}
      <section className="py-16 px-6 text-center max-w-6xl mx-auto"
       data-aos="fade-up">
        <Image
          src="/job seeker.webp"
          alt="Recruitment"
          width={250}
          height={250}
          className="mx-auto mb-6"
        />
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Recruitment Solution
        </h2>
       <p className="text-sm text-gray-600 mb-6 max-w-xl mx-auto">
  &quot;Unlock seamless hiring with our tailored Recruitment Plans—flexible pricing designed to find your perfect talent, fast!&quot;
</p>
        <Link href="/contact">
          <button className="bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition">
            Plans
          </button>
        </Link>
      </section>

      <RecruitmentSolution />
      {/* Recruitment Section */}
      <section className="py-16 px-6 text-center max-w-6xl mx-auto"
       data-aos="fade-up">
        <Image
          src="/ecommerce.avif"
          alt="Ecommerce"
          width={250}
          height={250}
          className="mx-auto mb-6"
        />
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          E-commerce Solutions
        </h2>
        <p className="text-sm text-gray-600 mb-6 max-w-xl mx-auto">
  &quot;Boost your online store with our E-commerce Plans—affordable pricing crafted to scale your business effortlessly!&quot;
</p>
        <Link href="/contact">
          <button className="bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition">
            Plans
          </button>
        </Link>
      </section>

      <RecruitmentSolution />
      {/* Recruitment Section */}
      <section className="py-16 px-6 text-center max-w-6xl mx-auto"
       data-aos="fade-up">
        <Image
          src="/business.jpg"
          alt="Business"
          width={250}
          height={250}
          className="mx-auto mb-6"
        />
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Business Solutions
        </h2><p className="text-sm text-gray-600 mb-6 max-w-xl mx-auto">
  &quot;Boost your online store with our E-commerce Plans—affordable pricing crafted to scale your business effortlessly!&quot;
</p>        <Link href="/contact">
          <button className="bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition">
            Plans
          </button>
        </Link>
      </section>

      <RecruitmentSolution />
      <ScheduleCall />
    </main>
  );
}
