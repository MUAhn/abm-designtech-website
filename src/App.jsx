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
          <MemoNavbar />

          <main>
            <section id="home" aria-label="Home Section">
              <Suspense fallback={<div className="text-center py-20 text-gray-200">Loading...</div>}>
                <Home />
              </Suspense>
            </section>

            <section id="services" aria-label="Services Section">
              <Suspense fallback={<div className="text-center py-20 text-gray-200">Loading...</div>}>
                <Services />
              </Suspense>
            </section>

            <section id="projects" aria-label="Projects Section">
              <Suspense fallback={<div className="text-center py-20 text-gray-200">Loading...</div>}>
                <Projects />
              </Suspense>
            </section>

            <section id="contact" aria-label="Contact Section">
              <Suspense fallback={<div className="text-center py-20 text-gray-200">Loading...</div>}>
                <Contact />
              </Suspense>
            </section>
          </main>

          <MemoFooter />
          <MemoFloatingButtons />
        </motion.div>
      )}
    </>
  )
}
