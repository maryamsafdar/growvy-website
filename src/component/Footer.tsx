'use client';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full py-12 px-6 md:px-12 lg:px-20 mt-20 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-12 text-center md:text-left">
        
        {/* Left: Description and Social Icons */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Growvy</h2>
          <p className="text-gray-700 text-sm md:text-base mb-4 leading-relaxed">
            Optimize your business with smart asset management, 
            growth strategies, and cutting-edge solutions to boost
            sales and efficiency with Growvy!
          </p>
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <Image src="/facebook.jpg" alt="Facebook" width={40} height={40} />
            <Image src="/instagram.jpg" alt="Instagram" width={40} height={40} />
            <Image src="/linkedin.jpg" alt="LinkedIn" width={40} height={40} />
          </div>
        </div>

        {/* Center: Links and Stars */}
        <div className="flex-1">
          <ul className="text-black space-y-2 text-sm md:text-base font-semibold">
            <li>• About Us</li>
            <li>• Services</li>
            <li>• Plans & Pricing</li>
            <li>• Business Solutions</li>
            <li>• Success Stories</li>
            <li>• Jobs</li>
          </ul>
          <div className="flex justify-center md:justify-start mt-4 text-green-600 text-xl">
            {'★★★★★'.split('').map((star, index) => (
              <span key={index} className="mx-0.5">{star}</span>
            ))}
          </div>
        </div>

        {/* Right: Arrow Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <Image
            src="/arrow.jpg"
            alt="Arrow Up"
            width={300}
            height={300}
            className="object-contain"
          />
        </div>
      </div>
    </footer>
  );
}
