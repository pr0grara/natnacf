import React from 'react'

export default function AboutSection() {
  return (
    <section id="about" className="about-variant container">
      <div className="about-grid">
        <div className="about-text">
          <h2>About</h2>
          <p>
            Natna empowers the youth and communities in need by providing reliable access to mutual aid, education, medical support and avenues for leadership and sovereignty to flourish from within.
          </p>
          <p>
            Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.
          </p>
        </div>
        <div className="about-image">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=60&auto=format&fit=crop" alt="About" />
        </div>
      </div>
    </section>
  )
}
