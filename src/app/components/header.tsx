"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useIsMobile } from "../hooks/mobile";
import MenuOverlay from "./menu-overlay";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  const isMobile = useIsMobile();

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

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-transparent py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="relative">
          <div className="absolute">
            <Link href="/">
              <Image
                src="/images/Logo-Viernes.png"
                width={isMobile ? 72 : 150}
                height={isMobile ? 72 : 150}
                alt="Somos Viernes"
                className="rounded-[50%] ml-2 w-[80px] h-[80px] md:w-[150px] md:h-[150px] lg:w-[150x] lg:h-[150x]"
              />
            </Link>
          </div>
        </div>
        <MenuOverlay />
      </nav>
    </>
  );
}
