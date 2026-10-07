import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/banner";
import About from "./components/about";
import Stats from "./components/impact";
import Services from "./components/services";
import Testimonials from "./components/testimonial";
import Blog from "./components/blog";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Stats/>
    <Services/>
    <Testimonials/>
    <Blog/>
    <Footer/>
    </>
  );
}
