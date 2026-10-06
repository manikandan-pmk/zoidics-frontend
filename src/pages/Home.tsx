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
        description="Zoidics builds custom software, websites, mobile apps, AI chatbots, billing systems and business automation for growing businesses."
        keywords="software development company, web development, app development, AI chatbots, business automation, custom software"
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
