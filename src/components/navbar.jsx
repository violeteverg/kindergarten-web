import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white flex justify-between p-8">
      <h1 className="text-3xl">logo</h1>

      {/* Mobile Menu Button */}
      <div className="md:hidden relative">
        <div className="flex gap-2">
          <button className="bg-blue-200 rounded-xl p-[6px] text-[20px]">
            Enrique Now
          </button>
          <button className="text-xl" onClick={toggleMobileMenu}>
            ☰
          </button>
        </div>

        {/* Mobile Menu (Hidden by default) */}
        <div
          className={`absolute top-full right-[2px] ${
            isMobileMenuOpen ? "block" : "hidden"
          } z-10 md:hidden divide-y divide-gray-100 rounded-lg shadow w-44 bg-gray-700`}
        >
          <ul className="flex flex-col gap-2 text-xl items-center">
            <li>about</li>
            <li>Program</li>
          </ul>
        </div>
      </div>

      {/* Navigation Links */}
      <ul className={`md:flex gap-[3rem] text-xl items-center hidden`}>
        <li>About</li>
        <li>Program</li>
        <button className="bg-blue-200 rounded-xl p-[6px] text-[20px]">
          Enrique Now
        </button>
      </ul>
    </nav>
  );
}
