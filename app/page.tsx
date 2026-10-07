import Hero from "./components/homelayout/banner";
import About from "./components/homelayout/about";
import Stats from "./components/homelayout/impact";
import Services from "./components/homelayout/services";
import Testimonials from "./components/homelayout/testimonial";
import Blog from "./components/homelayout/blog";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Stats />
      <Services limit={6} />
      <Testimonials />
      <Blog />
    </>
  );
}
