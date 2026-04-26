import React from 'react'

import Header from './components/Header'
import HeroSection from './components/HeroSection'
import OpportunitySection from './components/OpportunitySection'
import FundOverviewSection from './components/FundOverviewSection'
import GallerySection from './components/GallerySection'
import AssetSection from './components/AssetSection'
import LPPrivilegesSection from './components/LPPrivilegesSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Header />
      <div style={{ paddingTop: '80px' }}>
        <HeroSection />
        <div id="opportunity"><OpportunitySection /></div>
        <GallerySection />
        <FundOverviewSection />
        <AssetSection />
        <LPPrivilegesSection />
        <ContactSection />
      </div>
      <Footer />
    </div>
  )
}

export default App
