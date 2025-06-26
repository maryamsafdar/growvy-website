// app/jobs/page.tsx or JobsSection.tsx
"use client";

import CommunitySection from "@/component/CommunitySection";
import CurvedLine from "@/component/CurvedLine";
import TopJobs from "@/component/TopJobs";
import React from "react";
import Image from "next/image";

export default function JobsSection() {
  return (
    <main className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="bg-green-100 text-center py-12 px-6 rounded-b-[12rem] w-full max-w-none"

       data-aos="fade-up">
        <div className="mt-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">Jobs</h1>
        <p className="text-gray-700 max-w-2xl mx-auto text-base md:text-lg mt-5">
          Join our team and shape the future—explore exciting career opportunities today!
        </p>
        </div>
      </section>

      {/* Categories in 2 rows and 3 columns */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-20 px-6"
       data-aos="fade-up">
        {[
          "Tech",
          "Management",
          "Human Resource",
          "Marketing & Sales",
          "Accounts & Finance",
          "Customer Service",
        ].map((category, idx) => (
          <button
            key={idx}
            className="border border-black text-black font-medium rounded-full px-5 py-2 text-center hover:bg-green-600 hover:text-white transition"
          >
            {category}
          </button>
        ))}
      </section>

      {/* Community Section */}
      <CommunitySection />

      {/* Top Jobs Section */}
      <TopJobs />
      <CurvedLine/>
      {/* Job Seeker Section */}
        <section className=" gap-16 mt-20 w-full px-6 md:px-12 lg:px-20">

             <div className="flex flex-col md:flex-row items-center gap-10 animate__animated animate__fadeInUp animate__delay-1s"
             data-aos="fade-up">
               <div className="flex-1 text-center md:text-left"
               >
                 <h3 className="text-3xl font-bold mb-3 text-black">I’m a Job Seeker!</h3>
                 <p className="text-gray-700 mb-5 text-base md:text-lg">
                   Looking for job according to my <br /> skills and requirements.
                 </p>
                 <button className="bg-green-600 text-white font-semibold py-2.5 px-8 rounded-full text-base hover:bg-green-700 transition">
                   Jobs
                 </button>
               </div>
               <Image
                 src="/job seeker.webp"
                 alt="Job Seeker"
                 width={250}
                 height={250}
                 className="object-contain hover:scale-105 transition-transform duration-500"
               />
             </div>
       
             
           </section>
    </main>
  );
}
