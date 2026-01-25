export default function FloatingButtons() {
  return (
    <div className="fixed right-6 bottom-6 z-50 flex flex-col gap-4">

      {/* WhatsApp */}
      <a
        href="https://wa.me/94772336318"
        target="_blank"
        className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center text-white text-2xl shadow-lg hover:scale-110 transition"
        aria-label="WhatsApp"
      >
        💬
      </a>

      {/* Call */}
      <a
        href="tel:+94772336318"
        className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl shadow-lg hover:scale-110 transition"
        aria-label="Call"
      >
        📞
      </a>

      {/* Email */}
      <a
        href="mailto:info@abmdesigntech.com"
        className="w-14 h-14 rounded-full bg-gold flex items-center justify-center text-black text-2xl shadow-lg hover:scale-110 transition"
        aria-label="Email"
      >
        ✉️
      </a>

    </div>
  );
}
