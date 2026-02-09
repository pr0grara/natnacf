import React from 'react'
import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio'
import AboutSection from '../components/AboutSection'
import Footer from '../components/Footer'
import Contact from '../components/Contact'

export default function Home() {
    const heroHeaders = ['Empowering Youth.', 'Strengthening Communities.']
    const heroCopy = "To empower youth and communities in need by providing reliable access to mutual aid, education, medical support and opportunities for leadership and sovreignty to flourish from within."
  return (
    <>
      <div className="home-container">
        <Hero />
        {/* <div className="hero-container">
            <div className="hero-headers">{heroHeaders.map((head, i) => <div className="hero-header" key={i}>{head}</div>)}
            </div>
            <div className="hero-copy">{heroCopy}</div>
                <div className="donate-button-container">
                    <div className="donate-button">Donate</div>
                </div>
        </div> */}
        <Portfolio />
        <AboutSection />
        <Contact />
      </div>
      <Footer />
    </>
  )
}
