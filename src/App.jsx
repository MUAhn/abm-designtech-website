import { useState, Suspense, lazy } from "react"
import { AnimatePresence, motion } from "framer-motion"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import FloatingButtons from "./components/FloatingButtons"
import PageLoader from "./components/PageLoader"

// Lazy load pages
const Home = lazy(() => import("./pages/Home"))
const Services = lazy(() => import("./pages/Services"))
const Projects = lazy(() => import("./pages/Projects"))
const Contact = lazy(() => import("./pages/Contact"))

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      <AnimatePresence>
        {loading && <PageLoader onFinish={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-black text-white"
        >
          <Navbar />
          <Suspense fallback={null}>
            <Home />
            <Services />
            <Projects />
            <Contact />
          </Suspense>
          <Footer />
          <FloatingButtons />
        </motion.div>
      )}
    </>
  )
}
