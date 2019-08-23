import React from 'react'

// Components
import Banner from './Components/Banner/Banner'
import LandingPageCollapsible from './Components/ExpandableComponents/LandingPageCollapsible'
import Footer from './Components/Footer/Footer'
import ExpectChangeCom from './Components/ExpectChangeCom/ExpectChangeCom'
import Break1 from './Components/Break1/Break1'
import Nav from './Components/Nav/Nav'
import Nav2 from './Components/Nav2/Nav2'
import AboutTheOwner from './Components/AboutTheOwner/AboutTheOwner'
import Testimonials from './Components/Testimonials/Testimonials'
import Services from './Components/Services/Services'
import Donate from './Components/Donate/Donate'
import Contact from './Components/Contact/Contact' 

import './App.css'

function App() {
  return (
    <div className="App">
      <Nav />
      <Nav2 />
      <Banner />
      <Break1 />
      <LandingPageCollapsible />
      <Services />
      <Donate />
      <Testimonials />
      <AboutTheOwner />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;
