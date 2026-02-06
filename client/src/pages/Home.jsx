import React from 'react'
import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio'
import AboutSection from '../components/AboutSection'
import Footer from '../components/Footer'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      {/* <Hero /> */}
      <main>
        <Portfolio />
        <AboutSection />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
