"use client";

import { motion } from "motion/react";
import ContactForm from "./contact-form";
import Image from "next/image";
import Link from "next/link";

import {
  SiFacebook,
  SiInstagram,
  SiTiktok,
  SiYoutube,
} from "@icons-pack/react-simple-icons";
import { Linkedin } from "lucide-react";

export default function Footer() {
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
    <>
      <ContactForm />
      <footer className="flex items-center sm:items-center sm:justify-center w-full bg-teal-500 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="montserrat grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Section - Company Info */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                Viernes Estrategia Audiovisual SAS
              </h2>

              <div className="space-y-3 text-lg">
                <p className="flex flex-wrap items-center gap-2">
                  <span>+57 323 429 8122</span>
                  <span className="text-white/70">|</span>
                  <span>+57 310 402 7769</span>
                </p>
                <p>Palmira - Colombia</p>
                <p>
                  <a
                    href="mailto:hola@viernes-studio.com"
                    className="hover:text-teal-200 transition-colors duration-300"
                  >
                    hola@somosviernes.com
                  </a>
                </p>
              </div>

              {/* Colombia Logo */}
              <div className="flex items-center space-x-3">
                <Image
                  src="/images/marca-pais-colombia.png"
                  alt="Marca País Colombia"
                  width={150}
                  height={150}
                />
              </div>
            </motion.div>

            {/* Right Section - Social Media */}
            <motion.div
              className="flex items-center flex-col justify-center space-y-8 w-full"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div>
                <div className="flex items-center justify-center">
                  <h3 className="cardenio text-xl md:text-3xl font-bold mb-6">
                    ENCUÉNTRENOS EN REDES
                  </h3>
                </div>

                {/* Social Media Icons */}
                <div className="flex justify-center lg:justify-end space-x-4 mb-8">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      title={social.label}
                    >
                      <social.icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Viernes Studio Logo */}
              <motion.div
                className="flex items-center justify-center lg:justify-end space-x-3"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Link href="/">
                  <Image
                    src="/images/logo-blanco-footer.png"
                    alt="Viernes Studio"
                    width={150}
                    height={150}
                    className="object-contain"
                  />
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Copyright */}
          <motion.div
            className="border-t border-white/20 mt-12 pt-8 text-center text-sm opacity-75"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.75 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p>
              &copy; 2024 Viernes Estrategia Audiovisual SAS. Todos los derechos
              reservados.
            </p>
          </motion.div>
        </div>
      </footer>
    </>
  );
}
