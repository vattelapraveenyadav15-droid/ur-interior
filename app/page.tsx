import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import LatestProjects from "@/components/LatestProjects";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <div className="page-shell">
          <Hero />
          <LatestProjects />
        </div>
        <Stats />
        <About />
        <Services />
        <Process />
        <ProjectsShowcase />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
