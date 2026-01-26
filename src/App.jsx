import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      {/* Main Content Landmark */}
      <main id="main-content" className="pt-24" role="main">
        <Home />
        <Services />
        <Projects />
        <Contact />
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
}
