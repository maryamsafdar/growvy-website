"use client";

import CurvedLine from "@/component/CurvedLine";
import CommunityCTA from "@/component/Success/CommunityCTA";
import LogoGrid from "@/component/Success/LogoGrid";
import Testimonials from "@/component/Testimonal";

import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="bg-green-100 text-center py-12 px-6 rounded-b-[10rem]" data-aos="fade-up">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-8 text-black">Success</h1>
        <p className="text-gray-700 max-w-2xl mx-auto text-base md:text-lg mt-2">
          Discover inspiring Success Stories—see how our solutions empower
          businesses to thrive
        </p>
      </section>

      {/* Clients Section */}
      <section className="text-center py-16 px-6" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
          Join over <span className="text-black">10k Clients worldwide</span>
        </h2>
        <Link href="/pricing">
          <button className="bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700 transition mb-8">
            View Pricing
          </button>
        </Link>
        <LogoGrid />
      </section>

      {/* CTA */}
      <CommunityCTA />

      {/* Testimonials & Curve */}
      <Testimonials />
      <CurvedLine />
    </main>
  );
}
