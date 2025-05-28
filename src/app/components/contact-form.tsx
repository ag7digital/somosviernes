"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    mensaje: "",
    acceptPolicy: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Form submitted:", formData);
    setIsSubmitting(false);

    // Reset form
    setFormData({
      nombre: "",
      apellido: "",
      email: "",
      mensaje: "",
      acceptPolicy: false,
    });
  };

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="cardenio text-[#6D6D6D] text-3xl md:text-4xl font-bold text-center  mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          ¿necesita un video?
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Name and Last Name Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                name="nombre"
                placeholder="Nombre"
                value={formData.nombre}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-4 bg-gray-200 border-0 rounded-lg placeholder-gray-500 text-gray-700 focus:bg-white focus:ring-2 focus:ring-teal-500 focus:outline-none transition-all duration-300"
              />
            </div>
            <div>
              <input
                type="text"
                name="apellido"
                placeholder="Apellido"
                value={formData.apellido}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-4 bg-gray-200 border-0 rounded-lg placeholder-gray-500 text-gray-700 focus:bg-white focus:ring-2 focus:ring-teal-500 focus:outline-none transition-all duration-300"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Correo Electrónico"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-4 bg-gray-200 border-0 rounded-lg placeholder-gray-500 text-gray-700 focus:bg-white focus:ring-2 focus:ring-teal-500 focus:outline-none transition-all duration-300"
            />
          </div>

          {/* Message */}
          <div>
            <textarea
              name="mensaje"
              placeholder="Mensaje"
              value={formData.mensaje}
              onChange={handleInputChange}
              required
              rows={6}
              className="w-full px-4 py-4 bg-gray-200 border-0 rounded-lg placeholder-gray-500 text-gray-700 focus:bg-white focus:ring-2 focus:ring-teal-500 focus:outline-none transition-all duration-300 resize-none"
            />
          </div>

          {/* Privacy Policy Checkbox */}
          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              name="acceptPolicy"
              id="acceptPolicy"
              checked={formData.acceptPolicy}
              onChange={handleInputChange}
              required
              className="mt-1 w-4 h-4 text-teal-600 bg-gray-200 border-gray-300 rounded focus:ring-teal-500 focus:ring-2"
            />
            <label
              htmlFor="acceptPolicy"
              className="montserrat text-sm tx-gray leading-relaxed"
            >
              Autorizo a Viernes Estrategia Audiovisual, para enviarme la
              información solicitada y registrar los datos que he suministrado
              de manera libre y voluntaria en su base de datos y que serán
              tratados de acuerdo a la{" "}
              <Link
                href="/politica-privacidad"
                className="text-teal-600 underline cursor-pointer hover:text-teal-700"
              >
                Política de Protección de Datos
              </Link>
            </label>
          </div>

          {/* Submit Button */}
          <div>
            <motion.button
              type="submit"
              disabled={isSubmitting || !formData.acceptPolicy}
              className="px-8 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? "ENVIANDO..." : "ENVIAR"}
            </motion.button>
          </div>
        </motion.form>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="cardenio text-[#6D6D6D] text-2xl md:text-4xl font-bold tracking-wide">
            llámese a los de viernes
          </h3>
        </motion.div>
      </div>
    </section>
  );
}
