export default function Footer() {
  return (
    <footer className="bg-black/90 text-gray-400 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-4 text-center md:text-left">
        <p className="mb-2">&copy; {new Date().getFullYear()} ABM DesignTech. All rights reserved.</p>
        <p className="text-sm">
          Contact us: <a href="mailto:contact@abmbuildtech.com" className="hover:text-yellow-400">contact@abmbuildtech.com</a> | +94 77 105 3402
        </p>
      </div>
    </footer>
  )
}
