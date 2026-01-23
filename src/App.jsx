import { useState, Suspense, lazy, memo } from "react"
import { motion, AnimatePresence } from "framer-motion"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import FloatingButtons from "./components/FloatingButtons"
import PageLoader from "./components/PageLoader"

// Lazy-loaded pages
const Home = lazy(() => import("./pages/Home"))
const Services = lazy(() => import("./pages/Services"))
const Projects = lazy(() => import("./pages/Projects"))
const Contact = lazy(() => import("./pages/Contact"))

// Memoize static components
const MemoNavbar = memo(Navbar)
const MemoFooter = memo(Footer)
const MemoFloatingButtons = memo(FloatingButtons)

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      {/* Page Loader */}
      <AnimatePresence>
        {loading && <PageLoader onFinish={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Main Content */}
      {!loading && (
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-black text-white"
        >
          <MemoNavbar />
          <Suspense fallback={<div className="text-center py-20 text-gray-300">Loading content...</div>}>
            <Home />
            <Services />
            <Projects />
            <Contact />
          </Suspense>
          <MemoFooter />
          <MemoFloatingButtons />
        </motion.div>
      )}
    </>
  )
}
