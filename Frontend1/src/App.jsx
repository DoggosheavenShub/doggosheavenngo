import Header from "./components/Header"
import MainHero from "./components/MainHero"
import AdoptionSection from "./components/Adoption"
import AboutSection from "./components/About"
import TeamSection from "./components/TeamSection"
import TestimonialsSection from "./components/Testimonial"
import HelpSection from "./components/HelpSection"
import GallerySection from "./components/Gallery"
import Contact from "./components/Contact"
import StatsSection from "./components/Stats"
import Footer from "./components/Footer"
import Vedio from "./components/Vedio"
import { useRef } from "react"
import InstagramReelsGrid from "./components/Reels"

function App() {

  const petRef = useRef(null);
  const aboutRef = useRef(null);
  const helpRef = useRef(null);
  const teamRef = useRef(null);
  const contactRef = useRef(null);
  const testimonialRef = useRef(null);

  const scrollToSection = (section) => {
    if(section.current){
      section?.current?.scrollIntoView({behavior:'smooth'});
    }
  
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Header 
        onPetClick={() => scrollToSection(petRef)}
        onAboutClick={() => scrollToSection(aboutRef)}
        onHelpClick={() => scrollToSection(helpRef)}
        onTeamClick={()=> scrollToSection(teamRef)}
        onTestimonialClick={() => scrollToSection(testimonialRef)}
        onContactClick={() => scrollToSection(contactRef)}

      />
      <div> <MainHero /></div>
     
     <div ><AdoptionSection /></div> 
      <div ref={aboutRef}><AboutSection /></div>
      <InstagramReelsGrid/>
      <div ref={helpRef}><HelpSection 
        onContactClick={()=>scrollToSection(contactRef)}
      /></div>
  
     <div ><Vedio/></div> 
     <div ref={testimonialRef}><TestimonialsSection /></div> 
      
      <div ref={petRef}><GallerySection /></div>
      <div ref={teamRef}> <TeamSection/></div>
    
     
     <div ref={contactRef}><Contact/></div> 
      <StatsSection/>
      <Footer 
        onPetClick={() => scrollToSection(petRef)}
        onAboutClick={() => scrollToSection(aboutRef)}
        onHelpClick={() => scrollToSection(helpRef)}
        onTeamClick={()=>scrollToSection(teamRef)}
        onTestimonialClick={() => scrollToSection(testimonialRef)}
        onContactClick={() => scrollToSection(contactRef)}
      />
    </main>
  )
}

export default App
