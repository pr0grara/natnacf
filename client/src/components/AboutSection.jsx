import React from 'react'
import educationGif from '../assets/natna_education.gif'

export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <h2>Our Mission</h2>
            <p>
              Natna empowers communities in need: fostering reliable access to mutual aid, education, and medical support. We provide opportunities for leadership and sovereignty to flourish from within.
            </p>
            <p>
              We believe in sustainable, community-driven solutions that address immediate needs while building long-term resilience and self-determination. Through direct support, advocacy, and partnership, we work to create lasting change.
            </p>
            <p>
              Our approach centers on dignity, cultural responsiveness, and community leadership, ensuring that those we serve are at the center of all decision-making processes.
            </p>
          </div>
          <div className="about-image">
            <img src={educationGif} alt="NATNA education program in action" />
          </div>
        </div>
      </div>
    </section>
  )
}
