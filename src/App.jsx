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

      {/* Push content below fixed navbar */}
      <main className="pt-24">
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
