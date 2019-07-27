import React from 'react'

// Componets
import Header from './Components/Header/Header'
import Banner from './Components/Banner/Banner'
import LandingPageCollapsible from './Components/ExpandableComponents/LandingPageCollapsible'
import Footer from './Components/Footer/Footer'
import ExpectChange from './Components/ExpectChange/ExpectChange'

import './app.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <LandingPageCollapsible />
      <ExpectChange />
      <Footer />
    </div>
  )
}

export default App;
