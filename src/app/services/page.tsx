// app/services/page.tsx
"use client";

import CallToAction from "@/component/callToAction";
import ProblemSolutionSection from "@/component/ProblemSolutionSection";
import ScheduleCall from "@/component/ScheduleCall";
import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="bg-green-100 text-center py-12 px-6 rounded-b-[10rem]"
      data-aos="fade-up">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-8 text-black">Services</h1>
        <p className="text-gray-700 max-w-2xl mx-auto text-base md:text-lg mt-5">
          At Growvy, we provide innovative, cost-effective solutions to help businesses
          and professionals thrive.
        </p>
      </section>

      {/* Services Cards */}
      <section className="grid grid-cols-2 md:grid-cols-3 gap-10 py-20 px-6 max-w-6xl mx-auto" data-aos="fade-up">
        {/* Service 1 */}
        <div className="text-center border-2 border-black rounded-4xl p-6 flex flex-col items-center justify-between">
          <Image src="/job seeker.webp" alt="Hiring" width={150} height={150} className="mb-4 -mt-20" />
          <h3 className="font-bold text-xl mb-2 text-black">Hiring</h3>
          <p className="text-gray-600 mb-6">
            Access a vast talent pool to hire the right candidates quickly and affordably.
          </p>
          <Link href="/pricing">
            <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition">
              Plans
            </button>
          </Link>
        </div>

        {/* Service 2 */}
        <div className="text-center border-2 border-black rounded-4xl p-6 flex flex-col items-center justify-between">
          <Image src="/ecommerce.avif" alt="E-commerce" width={200} height={200} className="mb-4 -mt-20" />
          <h3 className="font-bold text-xl mb-2 text-black">E-commerce</h3>
          <p className="text-gray-600 mb-6">
            Drive expansion with targeted strategies and market-driven solutions.
          </p>
          <Link href="/pricing">
            <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition">
              Plans
            </button>
          </Link>
        </div>

        {/* Service 3 */}
        <div className="text-center border-2 border-black rounded-4xl p-6 flex flex-col items-center justify-between">
          <Image src="/business.jpg" alt="Business" width={200} height={200} className="mb-4 -mt-20" />
          <h3 className="font-bold text-xl mb-2 text-black">Business</h3>
          <p className="text-gray-600 mb-6">
            Optimize and manage business resources with data-backed insights.
          </p>
          <Link href="/pricing">
            <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition">
              Plans
            </button>
          </Link>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction />
      <ProblemSolutionSection />
      <ScheduleCall />
    </main>
  );
}