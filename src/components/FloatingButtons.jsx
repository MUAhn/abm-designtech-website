import { Phone, Mail, MessageCircle } from "lucide-react"

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">

      {/* WhatsApp */}
      <a href="https://wa.me/94771053402" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center text-white shadow-lg hover:scale-110 transition">
        <MessageCircle />
      </a>

      {/* Call */}
      <a href="tel:+94772336318" aria-label="Call Now" className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center text-white shadow-lg hover:scale-110 transition">
        <Phone />
      </a>

      {/* Email */}
      <a href="mailto:contact@abmdesigntech.com" aria-label="Send Email" className="w-14 h-14 rounded-full bg-yellow-500 flex items-center justify-center text-black shadow-lg hover:scale-110 transition">
        <Mail />
      </a>

    </div>
  )
}
