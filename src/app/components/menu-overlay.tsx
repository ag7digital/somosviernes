"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import {
  SiFacebook,
  SiInstagram,
  SiTiktok,
  SiYoutube,
} from "@icons-pack/react-simple-icons";
import { Globe, Linkedin } from "lucide-react";

export default function MenuOverlay() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const socialLinks = [
    {
      icon: SiFacebook,
      href: "https://www.facebook.com/ViernesEstrategiaAudiovisual",
      label: "Facebook",
    },
    {
      icon: SiInstagram,
      href: "https://www.instagram.com/viernes_studio/",
      label: "Instagram",
    },
    {
      icon: Linkedin,
      href: "https://co.linkedin.com/company/viernesestrategiaaudiovisual",
      label: "LinkedIn",
    },
    {
      icon: SiYoutube,
      href: "https://www.youtube.com/channel/UC1F5W59jqCHAev3uoLr6lxw",
      label: "Youtube",
    },
    {
      icon: SiTiktok,
      href: "https://www.tiktok.com/@viernes.studio?is_from_webapp=1&sender_device=pc ",
      label: "TikTok",
    },
  ];

  return (
    <div>
      <button
        onClick={toggleMenu}
        className="fixed top-6 right-6 z-50 hover:text-primary focus:outline-none bg-white rounded-[50%] p-2 md:p-4"
        style={{ display: isOpen ? "none" : "flex" }}
        aria-label="Abrir menu"
      >
        <Menu size={32} className="tx-green" />
      </button>

      {/* Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#38b998] flex flex-col items-center justify-center z-40">
          {/* Botão de fechar */}
          <button
            className="absolute top-6 right-6 bg-white w-12 h-12 flex items-center justify-center rounded-full shadow-md"
            onClick={toggleMenu}
            aria-label="Fechar menu"
          >
            <X size={32} className="text-emerald-500 " />
          </button>

          {/* Conteúdo central */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col items-center text-white text-4xl font-bold space-y-1 mb-6 cardenio">
              <a href="blog" className="hover:underline">
                BLOG
              </a>
              <a href="#" className="hover:underline">
                INDUSTRIAS
              </a>
              <a href="#" className="hover:underline">
                WORK
              </a>
            </div>
          </div>
          {/* Social Media Icons */}
          <div className="flex justify-center lg:justify-end space-x-4 mb-8">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                className="w-12 h-12 text-emerald-500 bg-white rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                title={social.label}
              >
                <social.icon className="w-6 h-6" />
              </Link>
            ))}
          </div>
          {/* Bandeiras */}
          <div className="flex gap-2">
            <a
              href="https://es.viernes-studio.com"
              className="flex items-center gap-2 text-white"
            >
              <Globe size={32} />
              LATAM
            </a>
            <a
              href="https://viernes-studio.com"
              className="flex items-center gap-2 text-white"
            >
              <Globe size={32} />
              Global
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
