"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-transparent py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="flex justify-between">
        <Link href="/">
          <Image
            src="/images/Logo-Viernes.png"
            width={150}
            height={150}
            alt="Somos Viernes"
            className="rounded-[50%] ml-2 w-[80px] h-[80px] md:w-[150px] md:h-[150px] lg:w-[150x] lg:h-[150x]"
          />
        </Link>
        {/* Mobile Menu Button */}
        <div className="flex flex-col justify-center mr-5">
          <button
            onClick={toggleMenu}
            className="hover:text-primary focus:outline-none bg-white rounded-[50%] p-2 md:p-4 lg:p-4"
          >
            {isOpen ? <X size={32} /> : <Menu size={32} className="tx-green" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4"
          >
            <div className="flex flex-col space-y-4 py-4"></div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
