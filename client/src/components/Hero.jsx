import React from 'react'


export default function Hero() {
    const heroHeaders = ['Empowering Youth.', 'Strengthening Communities.']
    const heroCopy = "To empower youth and communities in need by providing reliable access to mutual aid, education, medical support and opportunities for leadership and sovreignty to flourish from within."
    return (
        <div className="hero-container">
            <div className="hero-headers">{heroHeaders.map((head, i) => <div className="hero-header" key={i}>{head}</div>)}
            </div>
            <div className="hero-copy">{heroCopy}</div>
                <div className="donate-button-container">
                    <div className="donate-button">Donate</div>
                </div>
        </div>
    )
//   return (
//     <section className="hero-variant">
//       <div className="hero-variant-inner container">
//         <div className="hero-variant-text">
//           <div className="eyebrow">Portfolio & Writing</div>
//           <h1>
//             Lorem ipsum dolor sit amet,
//             <br />consectetur adipiscing elit
//           </h1>
//           <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
//           <div className="hero-actions">
//             <a className="btn large" href="#work">See work</a>
//             <a className="btn ghost" href="#about">About</a>
//           </div>
//         </div>
//         <div className="hero-variant-media" aria-hidden>
//           <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=1400&q=60&auto=format&fit=crop" alt="Placeholder" />
//         </div>
//       </div>
//     </section>
//   )
}
