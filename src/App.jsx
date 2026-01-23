import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Services from "./pages/Services"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"
import FloatingButtons from "./components/FloatingButtons"
import PageLoader from "./components/PageLoader"

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      <AnimatePresence>
        {loading && (
          <PageLoader onFinish={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-black text-white"
        >
          <Navbar />
          <Home />
          <Services />
          <Projects />
          <Contact />
          <Footer />
          <FloatingButtons />
        </motion.div>
      )}
    </>
  )
}
