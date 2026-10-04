import Hero from "../components/Hero"
import Services from "../components/Specialties"
import About from "../components/About"
import Resume from "../components/Resume"
import Portfolio from "../components/Portfolio"
import Testimonial from "../components/Testimonial"
import Blog from "../components/Blog"
import CallToAction from "../components/CallToAction"
import TechStack from "../components/TechStack"

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      {/* <About /> */}
      <TechStack />
      {/* <Resume /> */}
     
      <Portfolio />
      <Testimonial />
       <CallToAction />
      <Blog />
    </div>
  )
}

export default Home
