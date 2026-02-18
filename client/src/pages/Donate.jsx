import React from 'react'
import donateGif from '../assets/donate_video.gif'
import impactImage from '../assets/natna_impact.jpg'

export default function Donate() {
  return (
    <section className="donate-page">
      <div className="container">
        <div className="donate-grid">
          {/* Left Column */}
          <div className="donate-left">
            <h1>Support Our Mission</h1>
            <p className="donate-intro">
              Your contribution directly empowers communities and transforms lives. Every donation helps us provide essential services, educational opportunities, and sustainable support to those who need it most.
            </p>
            
            <div className="donate-form-clean">
              <h2>Make a Difference Today</h2>
              <div className="donate-buttons">
                <button className="donate-btn">$25</button>
                <button className="donate-btn featured">$50</button>
                <button className="donate-btn">$100</button>
              </div>
              <button className="donate-btn-custom">Custom Amount</button>
              <p className="donate-note">All donations are tax-deductible. We are a registered 501(c)(3).</p>
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
                  <p>Provides school supplies for one student for a month</p>
                </div>
                <div className="impact-item">
                  <h3>$50</h3>
                  <p>Supports a family's emergency relief package</p>
                </div>
                <div className="impact-item">
                  <h3>$100</h3>
                  <p>Funds a youth leadership workshop</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
