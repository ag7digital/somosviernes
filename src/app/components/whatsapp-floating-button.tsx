import { SiWhatsapp } from "@icons-pack/react-simple-icons";

const whatsappNumber = "573234298122";
const whatsappMessage =
  "Hola, Viernes Studio. Vi su trabajo y me gustaría recibir más información sobre sus servicios y posibles formas de trabajar con ustedes";

const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage,
)}`;

export default function WhatsAppFloatingButton() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar a Viernes Studio por WhatsApp"
      className="fixed bottom-5 right-5 z-30 flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-[0_18px_40px_rgba(37,211,102,0.35)] transition-transform duration-200 hover:scale-[1.03] hover:bg-[#1ebe5d] focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 md:bottom-8 md:right-8"
    >
      <SiWhatsapp className="h-8 w-8 shrink-0" />
    </a>
  );
}
