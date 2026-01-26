export default function FloatingButtons() {
  return (
    <div
      className="fixed right-6 bottom-6 z-50 flex flex-col gap-4"
      aria-label="Quick contact buttons"
    >

      {/* WhatsApp */}
      <a
        href="https://wa.me/94772336318"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
        className="w-14 h-14 min-w-[56px] min-h-[56px] rounded-full bg-green-500 flex items-center justify-center text-white text-2xl shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
      >
        💬
      </a>

      {/* Call */}
      <a
        href="tel:+94772336318"
        aria-label="Call us"
        title="Call us"
        className="w-14 h-14 min-w-[56px] min-h-[56px] rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
      >
        📞
      </a>

      {/* Email */}
      <a
        href="mailto:info@abmdesigntech.com"
        aria-label="Send us an email"
        title="Send us an email"
        className="w-14 h-14 min-w-[56px] min-h-[56px] rounded-full bg-yellow-400 flex items-center justify-center text-black text-2xl shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-white"
      >
        ✉️
      </a>

    </div>
  );
}
