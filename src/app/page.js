import AboutUs from "./components/layout/AboutUs";
import Contact from "./components/layout/Contact";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";
import Menu from "./components/layout/Menu";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Menu />
      <AboutUs />
      <Contact />
      <Footer />
    </>
  );
}
