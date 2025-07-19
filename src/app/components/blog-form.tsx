"use client";
import { motion } from "motion/react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";

export default function BlogForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    empresa: "",
  });
  const [status, setStatus] = useState<
    "idle" | "success" | "error" | "loading"
  >("idle");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [open, setOpen] = useState(false);

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

    const portalId = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID;
    const formId = process.env.NEXT_PUBLIC_HUBSPOT_FORM_BLOG_ID;

    const endpoint = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: [
            { objectTypeId: "0-1", name: "email", value: formData.email },
            { objectTypeId: "0-1", name: "firstname", value: formData.nombre },
            { objectTypeId: "0-1", name: "company", value: formData.empresa },
          ],
          context: {
            pageUri: window.location.href,
            pageName: document.title,
          },
        }),
      });

      if (res.ok) {
        setStatus("success");
        setIsSubmitting(false);
        setOpen(true);

        // Reset form
        setFormData({
          nombre: "",
          email: "",
          empresa: "",
        });
      } else {
        setStatus("error");
        setOpen(false);
      }
    } catch {
      setStatus("error");
      setOpen(false);
    }
  };
  return (
    <>
      <motion.form
        onSubmit={handleSubmit}
        className="space-y-6 w-full px-5 md:mr-30"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col w-full">
          <div>
            <label
              htmlFor="nombre"
              className="text-white montserrat text-[0.8rem] font-bold"
            >
              Nombre
              <span className="text-red-800 ml-1">*</span>
            </label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 h-[40px] text-[0.8rem] bg-gray-200 border-0 rounded-lg text-gray-700 focus:bg-white focus:ring-2 focus:ring-teal-500 focus:outline-none transition-all duration-300"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="text-white montserrat text-[0.8rem] font-bold"
            >
              E-mail
              <span className="text-red-800 ml-1">*</span>
            </label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 h-[40px] text-[0.8rem] bg-gray-200 border-0 rounded-lg text-gray-700 focus:bg-white focus:ring-2 focus:ring-teal-500 focus:outline-none transition-all duration-300"
            />
          </div>
          <div>
            <label
              htmlFor="empresa"
              className="text-white montserrat text-[0.8rem] font-bold"
            >
              Empresa
              <span className="text-red-800 ml-1">*</span>
            </label>
            <input
              type="text"
              name="empresa"
              value={formData.empresa}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 h-[40px] text-[0.8rem] bg-gray-200 border-0 rounded-lg text-gray-700 focus:bg-white focus:ring-2 focus:ring-teal-500 focus:outline-none transition-all duration-300"
            />
          </div>
        </div>
        {/* Submit Button */}
        <div>
          <motion.button
            type="submit"
            className="px-8 py-3 bg-white text-emerald-700 font-medium rounded-lg hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isSubmitting ? "ENVIANDO..." : "ENVIAR"}
          </motion.button>
        </div>
        {status === "success" && (
          <p className="text-green-600">Enviado com sucesso!</p>
        )}
        {status === "error" && (
          <p className="text-red-600">Erro ao enviar. Tente novamente.</p>
        )}
      </motion.form>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md bg-white border-0 h-auto w-[330px] md:w-auto flex flex-col justify-center items-center">
          <DialogHeader className="flex items-center">
            <DialogTitle className="cardenio text-3xl text-emerald-800 ">
              Recibimos tu contacto!
            </DialogTitle>
          </DialogHeader>
          <div className="py-2 montserrat text-[1.2rem]">
            Prometemos enviarte solo contenido relevante y útil. Mantente al
            tanto de nuestras próximas ediciones en tu bandeja de entrada.
          </div>
          <Button
            onClick={() => setOpen(false)}
            className="cardenio text-3xl py-8 w-[100px] bg-emerald-600 text-white"
          >
            Cerrar
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}
