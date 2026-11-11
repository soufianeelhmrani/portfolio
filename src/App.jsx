import { MotionConfig } from "framer-motion";
import Background from "./components/Background";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import TechMarquee from "./components/TechMarquee";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
import { useLanguage } from "./context/LanguageContext";

export default function App() {
  const { t } = useLanguage();

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen overflow-x-hidden">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:bg-brand focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
        >
          {t("a11y.skipToContent")}
        </a>

        <Background />
        <ScrollProgress />
        <Navbar />

        <main id="main">
          <Hero />
          <TechMarquee />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </main>

        <Footer />
        <BackToTop />
      </div>
    </MotionConfig>
  );
}
