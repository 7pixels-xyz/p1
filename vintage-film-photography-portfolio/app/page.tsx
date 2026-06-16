"use client"

import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    // Smooth scrolling for navigation
    document.querySelectorAll("nav a").forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
        const section = document.querySelector(this.getAttribute("href") as string)
        if (section) {
          window.scrollTo({
            top: (section as HTMLElement).offsetTop - 50,
            behavior: "smooth",
          })
        }
      })
    })
  }, [])

  return (
    <>
      <div className="grain-texture"></div>

      <header>
        <div className="logo-area">
          <img src="/vintage-35mm-film-camera-icon-retro-black-and-whit.jpg" className="camera-icon" alt="Retro Camera" />
          <h1>Elias Thorne</h1>
          <p className="subtitle">35mm &amp; Medium Format Storytelling</p>
        </div>
        <nav>
          <a href="#work">Portfolio</a>
          <a href="#timeline">The Journey</a>
          <a href="#journal">Analog Journal</a>
          <a href="#contact">Send a Letter</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-image-frame">
          <img src="/vintage-35mm-film-photography-old-medium-format-an.jpg" alt="Vintage Camera Setup" />
        </div>
        <div className="hero-text">
          <h2>Capturing the soul of a moment through silver halide.</h2>
          <p>
            I believe that photography should be felt, not just seen. Every frame is a chemical reaction—a physical
            preservation of light and time. Using restored Leica and Hasselblad cameras, I document life in its most
            raw, unpolished form.
          </p>
          <p>Based in Berlin. Working worldwide with a suitcase full of Portra 400 and Tri-X.</p>
        </div>
      </section>

      <div className="film-strip-container">
        <div className="film-strip">
          <div className="film-frame">
            <img src="/35mm-film-photography-vintage-nature-landscape-sep.jpg" alt="Nature" />
          </div>
          <div className="film-frame">
            <img src="/35mm-film-photography-vintage-portrait-black-and-w.jpg" alt="Portrait" />
          </div>
          <div className="film-frame">
            <img src="/35mm-film-photography-vintage-lifestyle-candid-sep.jpg" alt="Lifestyle" />
          </div>
          <div className="film-frame">
            <img src="/35mm-film-photography-vintage-urban-city-street-se.jpg" alt="Urban" />
          </div>
          <div className="film-frame">
            <img src="/35mm-film-photography-vintage-landscape-mountain-s.jpg" alt="Landscape" />
          </div>
        </div>
      </div>

      <section className="polaroid-section" id="work">
        <h2 className="section-title">Latest Captures</h2>
        <div className="polaroid-grid">
          <div className="polaroid">
            <img src="/35mm-film-photography-vintage-sicily-summer-coasta.jpg" alt="Summer in Sicily" />
            <div className="polaroid-caption">Summer in Sicily, 2023</div>
          </div>
          <div className="polaroid">
            <img src="/35mm-film-photography-vintage-paris-morning-street.jpg" alt="Paris Morning" />
            <div className="polaroid-caption">Paris Morning, Leica M3</div>
          </div>
          <div className="polaroid">
            <img src="/35mm-film-photography-vintage-alpine-mountain-peak.jpg" alt="Alpine Peaks" />
            <div className="polaroid-caption">Alpine Peaks, HP5 Plus</div>
          </div>
          <div className="polaroid">
            <img src="/35mm-film-photography-vintage-sculptor-artist-flor.jpg" alt="The Artist" />
            <div className="polaroid-caption">The Sculptor, Florence</div>
          </div>
          <div className="polaroid">
            <img src="/35mm-film-photography-vintage-kyoto-backstreet-all.jpg" alt="Street Scene" />
            <div className="polaroid-caption">Kyoto Backstreets, 2022</div>
          </div>
          <div className="polaroid">
            <img src="/35mm-film-photography-vintage-shadows-study-berlin.jpg" alt="Quiet Moments" />
            <div className="polaroid-caption">Study in Shadows, Berlin</div>
          </div>
        </div>
      </section>

      <section className="timeline-section" id="timeline">
        <h2 className="section-title">The Chronicle</h2>
        <div className="timeline clearfix">
          <div className="timeline-item">
            <span className="timeline-date">2015</span>
            <div className="timeline-content">
              <h3>The First Roll</h3>
              <p>Started the journey with a Pentax K1000 passed down from my grandfather.</p>
            </div>
          </div>
          <div className="timeline-item">
            <span className="timeline-date">2018</span>
            <div className="timeline-content">
              <h3>Darkroom Residency</h3>
              <p>Six months mastering traditional silver gelatin printing in London.</p>
            </div>
          </div>
          <div className="timeline-item">
            <span className="timeline-date">2020</span>
            <div className="timeline-content">
              <h3>&quot;Faded Realities&quot; Exhibition</h3>
              <p>First solo exhibition featuring medium format street photography.</p>
            </div>
          </div>
          <div className="timeline-item">
            <span className="timeline-date">2024</span>
            <div className="timeline-content">
              <h3>Analog Global Workshop</h3>
              <p>Teaching the art of film across three continents.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="clients-section">
        <h2 className="section-title">Notable Collaborators</h2>
        <div className="client-grid">
          <div className="client-logo">Kinfolk</div>
          <div className="client-logo">Vogue</div>
          <div className="client-logo">National Geo</div>
          <div className="client-logo">Leica</div>
          <div className="client-logo">Cereal Mag</div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="postcard">
          <div className="postcard-left">
            <div className="input-group">
              <label>Dear Elias,</label>
              <textarea placeholder="Write your message here..." rows={8}></textarea>
            </div>
            <div className="input-group">
              <label>From:</label>
              <input type="text" placeholder="Your Name" />
            </div>
            <button className="send-btn">Post Message</button>
          </div>
          <div className="postcard-right">
            <div className="stamp">
              <img src="/vintage-postage-stamp-retro-classic-sepia-old-film.jpg" alt="Postage Stamp" />
            </div>
            <div className="address-lines">
              <div className="address-line">Elias Thorne Photography</div>
              <div className="address-line">Studio 14, Kreuzberg</div>
              <div className="address-line">10997 Berlin, Germany</div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p>© 1974 - 2024 Elias Thorne. All rights reserved. Shot on 35mm film.</p>
        <p style={{ marginTop: "10px" }}>Processed with care. Printed on archival paper.</p>
      </footer>
    </>
  )
}
