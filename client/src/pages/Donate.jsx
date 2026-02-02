import React from 'react'

export default function Donate() {
  return (
    <section className="container donate-page">
      <h1>Donate</h1>
      <p>
        Support our work. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="donate-actions">
        <button className="btn">Donate $5</button>
        <button className="btn">Donate $25</button>
        <button className="btn ghost">Custom amount</button>
      </div>
      <p className="small">All donations are processed securely.</p>
    </section>
  )
}
