"use client";
import Image from "next/image";

export default function GrowvySolutions() {
 

  return (
    <section className="flex flex-col gap-16 w-full px-6 md:px-12 lg:px-20 min-h-[1px]">
      {/* Item 1 */}
      <div
        className="flex flex-col md:flex-row items-center gap-10 animate__animated animate__fadeInUp animate__delay-1s"
        data-aos="fade-up"
      >
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-3xl font-bold mb-3 text-black">
            Problems in Hiring
          </h3>
          <p className="text-gray-700 mb-5 text-base md:text-lg">
            Companies spend high $$$ budgets <br/>on job portals like Indeed and <br/>
            LinkedIn, only to receive low-quality <br/>CVs and irrelevant applicants,<br/>
            making hiring slow and inefficient.
          </p>
        </div>
        <Image
          src="/job seeker.webp"
          alt="Job Seeker"
          width={250}
          height={250}
          className="object-contain hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Item 2 */}
      <div
        className="flex flex-col md:flex-row-reverse items-center md:justify-between gap-10 animate__animated animate__fadeInUp animate__delay-2s"
        data-aos="fade-up"
      >
        <div className="w-full md:w-auto text-center md:text-left flex flex-col items-center md:items-start">
          <h3 className="text-3xl font-bold mb-3 text-black">
            With Growvy Solution
          </h3>
          <p className="text-gray-700 mb-5 text-base md:text-lg">
            With Growvy, businesses can access a <br/>database of active job seekers
            who have  <br/>recently joined for job search. Use advanced  <br/>filters  to
            find the right candidates quickly and  <br/>at a fraction of the cost—no
            wasted budget, <br/> just quality hires!
          </p>
          <button className="bg-green-600 text-white font-semibold py-2.5 px-8 rounded-full text-base hover:bg-green-700 transition">
            Post a Job
          </button>
        </div>
        <Image
          src="/employee.jpg"
          alt="Employer"
          width={250}
          height={250}
          className="object-contain hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Item 3 */}
      <div
        className="flex flex-col md:flex-row items-center gap-10 animate__animated animate__fadeInUp animate__delay-3s"
        data-aos="fade-up"
      >
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-3xl font-bold mb-3 text-black">
            E-commerce Business
          </h3>
          <p className="text-gray-700 mb-5 text-base md:text-lg">
            E-commerce businesses struggle with high <br/> marketing costs,
            inefficient operations, and <br/> slow growth, making it difficult to
            scale and  <br/>maximize profits.
          </p>
        </div>
        <Image
          src="/ecommerce.avif"
          alt="Ecommerce"
          width={250}
          height={250}
          className="object-contain hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Item 4 */}
      <div
        className="flex flex-col md:flex-row-reverse items-center md:justify-between gap-10 animate__animated animate__fadeInUp animate__delay-4s"
        data-aos="fade-up"
      >
        <div className="w-full md:w-auto text-center md:text-left flex flex-col items-center md:items-start">
          <h3 className="text-3xl font-bold mb-3 text-black">
            With Growvy Solution
          </h3>
          <p className="text-gray-700 mb-5 text-base md:text-lg">
            Growvy helps e-commerce businesses streamline  <br/>operations, manage
            assets, and implement smart  <br/>growth strategies to boost sales and
            efficiency—all <br/> at a low cost with proven results.
          </p>
          <button className="bg-green-600 text-white font-semibold py-2.5 px-8 rounded-full text-base hover:bg-green-700 transition">
            Business Plans
          </button>
        </div>
        <Image
          src="/business.jpg"
          alt="Business"
          width={250}
          height={250}
          className="object-contain hover:scale-105 transition-transform duration-500"
        />
      </div>
    </section>
  );
}
