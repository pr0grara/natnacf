import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="contact-variant container">
      <h2>Contact</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Reach out or connect on social media.</p>
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message" rows="4" />
        <button className="btn" type="submit">Send</button>
      </form>
    </section>
  )
}
