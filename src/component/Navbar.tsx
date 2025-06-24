"use client";
export default function Navbar() {
  return (
    <nav className="border border-black rounded-full px-6 py-2 mb-12">
      <ul className="flex flex-wrap justify-center gap-4 font-semibold text-base sm:text-lg">
        {["Home", "Jobs", "Success", "Services", "Pricing"].map((item) => (
          <li key={item}>
            <a
              href="#"
              className={`underline ${
                item === "Home" ? "font-bold" : ""
              } transition-colors duration-300 hover:text-green-600`}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
