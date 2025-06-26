// app/success/page.tsx
"use client";

import CurvedLine from "@/component/CurvedLine";
import Testimonials from "@/component/Testimonal";
import Image from "next/image";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="bg-green-100 text-center py-12 px-6 rounded-b-[10rem]"
      data-aos="fade-up">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-8">Success</h1>
        <p className="text-gray-700 max-w-2xl mx-auto text-base md:text-lg mt-2">
          Discover inspiring Success Stories—see how our solutions empower
          businesses to thrive
        </p>
      </section>

      {/* Clients Section */}
      <section className="text-center py-16 px-6"
      data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Join over <span className="text-black">10k Clients worldwide</span>
        </h2>
        <Link href="/pricing">
          <button className="bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700 transition mb-8">
            View Pricing
          </button>
        </Link>

        {/* Logos */}
        <div className="flex flex-wrap justify-center items-center gap-10">
          <Image src="/ECHONET.png" alt="Echonet" width={150} height={150} />
          <Image src="/easypaisa.png" alt="Circle" width={150} height={150} />
          <Image src="/Hawk.png" alt="Hawk" width={150} height={150} />
          <Image src="/Motive.png" alt="Motive" width={150} height={150} />
        </div>
      </section>

      {/* Job Seeker Community CTA */}
      <section className="text-center py-16 px-6"
      data-aos="fade-up">
        <Image
          src="/community.png"
          alt="Community"
          width={200}
          height={200}
          className="mx-auto -mb-15 ml-90"
        />
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Join Growvy’s 50M+ Job Seeker <br />
          Community &amp; Get Hired Faster!
        </h2>
        <p className="text-gray-700 text-sm md:text-base max-w-2xl mx-auto mb-6">
          Build your profile, get noticed by top employers, and access exclusive
          job opportunities tailored to your skills. Your next career move
          starts here!
        </p>
        <Link href="/pricing">
          <button className="bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700 transition">
            Sign In
          </button>
        </Link>
      </section>

      {/* Testimonials Section */}

      <Testimonials />
      <CurvedLine />
    </main>
  );
}
