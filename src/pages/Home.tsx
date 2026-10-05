import Hero from "../components/Hero"
import Services from "../components/Specialties"
// import About from "../components/About"
// import Resume from "../components/Resume"
import Portfolio from "../components/Portfolio"
import Testimonial from "../components/Testimonial"
import Blog from "../components/Blog"
import CallToAction from "../components/CallToAction"
import TechStack from "../components/TechStack"
import Seo from "../components/Seo"

const Home = () => {
  return (
    <div>
      <Seo
        title="Zoidics Software Solutions"
        description="Zoidics Software Service builds modern websites, web applications, mobile apps, and custom software solutions for businesses."
        keywords="web development, app development, React development, Node.js development, full stack development, software development"
        url="https://zoidics.com/"
      />
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
