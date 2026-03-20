import React, { useState, useEffect } from 'react'
import { FiCheck } from 'react-icons/fi'
import donateGif from '../assets/donate_video.gif'
import impactImage from '../assets/natna_impact.jpg'

export default function Donate() {
  const [showZelle, setShowZelle] = useState(false)
  const [copied, setCopied] = useState(false)
  
  const zelleEmail = 'natnachildrensfoundation@gmail.com'

  useEffect(() => {
    if (document.querySelector('script[src*="buy-button.js"]')) return
    const script = document.createElement('script')
    script.src = 'https://js.stripe.com/v3/buy-button.js'
    script.async = true
    document.head.appendChild(script)
  }, [])

  const copyEmail = () => {
    navigator.clipboard.writeText(zelleEmail)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  
  const DonateButtons = () => (
    <>
      <div className="stripe-donate-wrapper">
        <stripe-buy-button
          buy-button-id="buy_btn_1TD6RtQQkg3V48JvuLQaeE5k"
          publishable-key="pk_live_51T65F9QQkg3V48JvfdqFzVDxV3Dd3DfGKPQACXQ0GpSWaaOREXu2eyhSj6FeAnJBv4NLrdBJdchhkozyn50ZjaLC00c3vzOsHH"
        >
        </stripe-buy-button>
      </div>

      <div className="donate-divider">
        <span>or donate via</span>
      </div>
      
      <button className="zelle-btn" onClick={() => setShowZelle(true)}>
        <span className="zelle-logo">Zelle</span>
        Pay with Zelle
      </button>
      
      {showZelle && (
        <div className="zelle-info">
          <p>Send your donation via Zelle to:</p>
          <div className="zelle-email">
            <span>{zelleEmail}</span>
            <button onClick={copyEmail} className="copy-btn">
              {copied ? <><FiCheck /> Copied</> : 'Copy'}
            </button>
          </div>
          <p className="zelle-note">Open your bank app, select Zelle, and send to the email above.</p>
        </div>
      )}
      
      <p className="donate-note" style={{ marginBottom: '2rem' }}>All donations are tax-deductible. We are a registered 501(c)(3).</p>
    </>
  )
  
  return (
    <section className="donate-page">
      <div className="container">
        {/* Make a Difference - Mobile First */}
        <div className="donate-form-mobile">
          <DonateButtons />
        </div>
        
        <div className="donate-grid">
          {/* Left Column */}
          <div className="donate-left">
            <h1>Support Our Mission</h1>
            <p className="donate-intro">
              Your contribution directly empowers communities and transforms lives. Every donation helps us provide essential services, educational opportunities, and sustainable support to those who need it most.
            </p>
            
            <div className="donate-form-desktop">
              <DonateButtons />
            </div>
            
            <div className="donate-left-image">
              <img src={impactImage} alt="Children supported by NATNA" />
            </div>
          </div>
          
          {/* Right Column */}
          <div className="donate-right">
            <div className="donate-video">
              <img src={donateGif} alt="NATNA community work in action" />
            </div>
            
            <div className="donate-impact">
              <h2>Your Impact</h2>
              <div className="impact-examples">
                <div className="impact-item">
                  <h3>$25</h3>
                  <p>Provides basic school supplies — including notebooks and pens — for three students for an entire year.</p>
                </div>
                <div className="impact-item">
                  <h3>$50</h3>
                  <p>Ensures a child receives three meals a day for a full month.</p>
                </div>
                <div className="impact-item">
                  <h3>$100</h3>
                  <p>Provides enough flour to sustain four households for an entire month.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
