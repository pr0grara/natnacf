import React from 'react'

const items = [
  { id: 1, title: 'Project — Echoes', desc: 'A short project summary with lorem ipsum.', image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200&q=60&auto=format&fit=crop' },
  { id: 2, title: 'Project — Signal', desc: 'A short project summary with lorem ipsum.', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=60&auto=format&fit=crop' },
  { id: 3, title: 'Project — Network', desc: 'A short project summary with lorem ipsum.', image: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=1200&q=60&auto=format&fit=crop' },
  { id: 4, title: 'Project — Archive', desc: 'A short project summary with lorem ipsum.', image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=1200&q=60&auto=format&fit=crop' }
]

export default function Portfolio() {
  return (
    <section id="work" className="portfolio-variant container">
      <h2>Selected Work</h2>
      <div className="portfolio-grid">
        {items.map(i => (
          <article key={i.id} className="portfolio-card">
            <div className="portfolio-thumb">
              <img src={i.image} alt={i.title} />
            </div>
            <div className="portfolio-body">
              <h3>{i.title}</h3>
              <p>{i.desc}</p>
              <a className="link" href="#">Read</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
