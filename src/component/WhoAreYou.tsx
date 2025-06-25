// // components/WhoAreYou.tsx
// import Image from "next/image";

// const people = [
//   {
//     title: "I’m a Job Seeker!",
//     text: (
//       <>
//         Looking for job according to <br /> my skills and requirements.
//       </>
//     ),
//     button: "Jobs",
//     img: "/job seeker.webp",
//     reverse: false,
//   },
//   {
//     title: "I’m an Employer!",
//      text: (
//       <>
//         Looking for potential sales data <br /> for sales campaign.
//       </>),
//     button: "Post a Job",
//     img: "/employee.jpg",
//     reverse: true,
//   },
//   {
//     title: "I’m a E-commerce Store!",
//    text: (
//       <>
//         Looking for potential sales data <br /> for sales campaign.
//       </>
//     ),
//     button: "Sales Data",
//     img: "/ecommerce.avif",
//     reverse: false,
//   },
//   {
//     title: "I’m Business!",
//      text: (
//       <>
//         Looking for CRM or Data resources <br /> to boost my business.
//       </>
//     ),
//     button: "Business Plans",
//     img: "/business.jpg",
//     reverse: true,
//   },
// ];

// export default function WhoAreYou() {
//   return (
//     <section className="flex flex-col gap-16 mt-20 w-full px-6 md:px-12 lg:px-20">
//       {people.map(({ title, text, button, img, reverse }, idx) => (
//         <div
//           key={idx}
//           className={`flex flex-col md:flex-row ${
//             reverse ? "md:flex-row-reverse md:justify-between" : ""
//           } items-center gap-10 lg:gap-28`}
//           data-aos="fade-up"
//         >
//           <div
//             className={`flex-1 ${
//               reverse
//                 ? "text-left md:text-left items-start md:items-start"
//                 : "text-center md:text-left"
//             }`}
//           >
//             <h3 className="text-3xl font-bold mb-3">{title}</h3>
//             <p className="text-gray-700 mb-5 text-base md:text-lg">{text}</p>
//             <button className="bg-green-600 text-white font-semibold py-2.5 px-8 rounded-full text-base hover:bg-green-700 transition">
//               {button}
//             </button>
//           </div>

//           <Image
//             src={img}
//             alt={title}
//             width={250}
//             height={250}
//             className="object-contain hover:scale-105 transition-transform duration-500"
//           />
//         </div>
//       ))}
//     </section>
//   );
// }
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function WhoAreYou() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <section className="flex flex-col gap-16 mt-20 w-full px-6 md:px-12 lg:px-20">
      {/* Item 1 */}
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

      {/* Item 2 */}
      <div className="flex flex-col md:flex-row-reverse items-center md:justify-between gap-10 animate__animated animate__fadeInUp animate__delay-2s"
      data-aos="fade-up">
        <div className="w-full md:w-auto text-center md:text-left flex flex-col items-center md:items-start">
          <h3 className="text-3xl font-bold mb-3 text-black">I’m an Employer!</h3>
          <p className="text-gray-700 mb-5 text-base md:text-lg">
            Looking for talented candidates for <br /> my company.
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
      <div className="flex flex-col md:flex-row items-center gap-10 animate__animated animate__fadeInUp animate__delay-3s"
      data-aos="fade-up">
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-3xl font-bold mb-3 text-black">I’m a E-commerce Store!</h3>
          <p className="text-gray-700 mb-5 text-base md:text-lg">
            Looking for potential sales data for <br /> sales campaign.
          </p>
          <button className="bg-green-600 text-white font-semibold py-2.5 px-8 rounded-full text-base hover:bg-green-700 transition">
            Sales Data
          </button>
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
      <div className="flex flex-col md:flex-row-reverse items-center md:justify-between gap-10 animate__animated animate__fadeInUp animate__delay-4s"
      data-aos="fade-up">
        <div className="w-full md:w-auto text-center md:text-left flex flex-col items-center md:items-start">
          <h3 className="text-3xl font-bold mb-3 v">I’m Business!</h3>
          <p className="text-gray-700 mb-5 text-base md:text-lg">
            Looking for CRM or Data resources <br /> to boost my business.
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
