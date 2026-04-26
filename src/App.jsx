import React from 'react'

import Header from './components/Header'
import HeroSection from './components/HeroSection'
import OpportunitySection from './components/OpportunitySection'
import FundOverviewSection from './components/FundOverviewSection'
import AssetSection from './components/AssetSection'
import RevenueModelSection from './components/RevenueModelSection'
import ReturnsSection from './components/ReturnsSection'
import TeamSection from './components/TeamSection'
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
        <FundOverviewSection />
        <AssetSection />
        <RevenueModelSection />
        <ReturnsSection />
        <TeamSection />
        <LPPrivilegesSection />
        <ContactSection />
      </div>
      <Footer />
    </div>
  )
}

export default App
