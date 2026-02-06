import React from 'react'

const items = [
    { id: 1, title: 'Project —  Education Access Program', desc: [`Provide school supplies, uniforms, and tuition assistance.`, 'Partner with schools to improve infrastructure and access to learning materials.'], image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200&q=60&auto=format&fit=crop' },
    { id: 2, title: 'Project — Psychosocial & Extracurricular Programs', desc: ['Safe spaces for creative expression, art, sports, and leadership workshops.', 'Trauma - informed activities for children affected by conflict or displacement.'], image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=60&auto=format&fit=crop' },
    { id: 3, title: 'Program — Family Mutual Aid Initiative', desc: ['Provide food packages, hygiene kits, and emergency relief to families.', 'Micro-grants or small stipends to reduce the economic pressure that forces children out of school.'], image: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=1200&q=60&auto=format&fit=crop' },
    { id: 4, title: 'Program — Advocacy & Awareness', desc: ['Advocate for child protection, educational rights, and rehabilitation of schools.', 'Collaborate with UN agencies, NGOs, and community leaders to influence policy and raise awareness globally.'], image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=1200&q=60&auto=format&fit=crop' }
]

export default function Portfolio() {
  return (
    <section id="work" className="portfolio-variant container">
      <h2>Projects and Programs</h2>
      <div className="portfolio-grid">
        {items.map(i => (
          <article key={i.id} className="portfolio-card">
            <div className="portfolio-thumb">
              <img src={i.image} alt={i.title} />
            </div>
            <div className="portfolio-body">
              <h3>{i.title}</h3>
              {i.desc.map(d => <p>{d}</p>)}
              <a className="link" href="#">Read</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
