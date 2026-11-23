/**
 * STYLE REMINDER — Ground truth: preserve Hassan's original editorial portfolio
 * language: Archivo Black + Space Grotesk, dark copper/cream palette, and the
 * original asymmetric work grid. Panorama is a sixth card only, not a redesign.
 */
import {
  ArrowDown,
  ArrowUpRight,
  Mail,
  Phone,
  Send,
} from "lucide-react";
import { Link } from "wouter";
import { caseStudies } from "@/lib/caseStudies";

const galleryWork = caseStudies.map((study, position) => ({
  ...study,
  image: study.pages[0].image,
  imageAlt: study.pages[0].alt,
  className: "work-card--featured",
  presentation: position === 0 ? "panorama" : undefined,
}));

function WorkCard({ item }: { item: (typeof galleryWork)[number] }) {
  const cardClass = `work-card ${item.className} ${item.presentation === "panorama" ? "is-panorama" : ""}`;
  return (
    <Link href={`/work/${item.slug}`} className={cardClass} aria-label={`Open ${item.title} case study`}>
      <div className="work-image-wrap">
        <img src={item.image} alt={item.imageAlt} />
        <div className="work-image-tint" />
        <span className="work-index">HM/{item.index}</span>
        <span className="work-tap-hint"><span>Tap to open</span><ArrowUpRight size={13} aria-hidden="true" /></span>
      </div>
      <div className="work-card-meta">
        <div>
          <p>{item.discipline}</p>
          <h3>{item.title}</h3>
        </div>
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <main id="top">
      <header className="site-header" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Back to top">
          <img src="/assets/hassan-logo.png" alt="Hassan Mohamed" />
        </a>
        <nav className="main-nav" aria-label="Section navigation">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="start-project" href="mailto:hassanshoman24@gmail.com">Start a project <ArrowUpRight size={14} aria-hidden="true" /></a>
      </header>

      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-image" aria-hidden="true" />
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-grain" aria-hidden="true" />
        <div className="hero-copy">
          <p className="section-tag"><span>00</span> Hassan Mohamed · Brand & Visual Designer</p>
          <p className="hero-kicker">I turn ideas into visual identities, campaigns and systems people remember.</p>
          <h1 id="hero-title">
            <span>Brands</span>
            <span className="hero-title-shift">built to</span>
            <span className="hero-title-accent">be seen.</span>
          </h1>
        </div>
        <a className="scroll-cue" href="#about">Scroll to explore <ArrowDown size={15} aria-hidden="true" /></a>
        <p className="hero-stamp">Hassan Mohamed<br />Brand & Visual Designer<br />Cairo / Egypt</p>
      </section>

      <section id="about" className="about-section" aria-labelledby="about-heading">
        <div className="about-orb" aria-hidden="true" />
        <div className="about-layout">
          <aside>
            <p className="section-tag"><span>01</span> Introduction</p>
            <p className="eyebrow-copy">A Cairo-based practice for brands that need a clear visual point of view.</p>
          </aside>
          <div className="about-copy">
            <h2 id="about-heading">Hello. I’m Hassan, a Brand & Visual Designer who gives good ideas a visual language.</h2>
            <p>For the past three years, I have been turning ideas into identity systems, campaigns, and brand materials that people can recognize, understand, and use.</p>
            <p>I work from the central mark to the surfaces people actually touch—building visual systems that remain clear, consistent, and ready for production.</p>
            <a className="text-arrow" href="#work">See selected work <ArrowUpRight size={16} aria-hidden="true" /></a>
          </div>
        </div>
        <div className="about-proof" aria-label="Professional experience">
          <span>Experience</span>
          <strong>03 years</strong>
          <p>Building identities, campaigns and visual systems with a practical, production-ready mindset.</p>
        </div>
        <div className="tool-rail" aria-label="Selected toolkit">
          <span>Selected toolkit</span>
          <div className="tool-list">
            <span>Photoshop</span><b>✦</b>
            <span>Illustrator</span><b>✦</b>
            <span>InDesign</span><b>✦</b>
            <span>Premiere Pro</span><b>✦</b>
            <span>CapCut</span><b>✦</b>
            <span>After Effects</span><b>✦</b>
            <span>Blender</span>
          </div>
        </div>
      </section>

      <section id="work" className="work-section" aria-labelledby="work-heading">
        <div className="work-heading">
          <p className="section-tag"><span>02</span> Selected work</p>
          <h2 id="work-heading">Five ways a <em>visual system</em> can make its mark.</h2>
          <p>Identity work, campaigns, and tactile brand moments chosen from Hassan’s portfolio.</p>
        </div>
        <div className="work-grid">
          {galleryWork.map((item) => <WorkCard item={item} key={item.index} />)}
        </div>
      </section>

      <section className="thinking-section" aria-labelledby="thinking-heading">
        <div className="thinking-layout">
          <div>
            <p className="section-tag"><span>03 /</span> How I think</p>
            <h2 id="thinking-heading">The work starts before the visual.</h2>
            <p className="thinking-intro">I do not treat a logo, campaign, or company profile as an isolated output. Each project needs one clear idea and a system strong enough to carry it.</p>
          </div>
          <ol className="thinking-list">
            <li><span>01</span><div><h3>Decode & Align</h3><p>Dig deep into the brief, ask the hard questions, and uncover the real business objective before touching a single pixel.</p></div></li>
            <li><span>02</span><div><h3>Research & Feed</h3><p>Absorb visual benchmarks, analyze competitors, and build a curated visual direction tailored specifically to the problem.</p></div></li>
            <li><span>03</span><div><h3>Concept First</h3><p>Translate insights into a core visual idea — ensuring every logo, layout, or art direction carries a distinct meaning, not just decoration.</p></div></li>
            <li><span>04</span><div><h3>Refine & Critique</h3><p>Stress-test the concept with the team, gather critical feedback, and iterate relentlessly until the execution is flawless.</p></div></li>
          </ol>
        </div>
      </section>

      <section id="contact" className="contact-section" aria-labelledby="contact-heading">
        <div className="contact-left">
          <p className="section-tag"><span>04</span> Get in touch</p>
          <h2 id="contact-heading">Let’s work<br /><span>together.</span></h2>
          <p>Have a project in mind? Let’s make something worth remembering.</p>
          <a className="contact-primary" href="mailto:hassanshoman24@gmail.com">Get in touch <ArrowUpRight size={17} aria-hidden="true" /></a>
        </div>
        <div className="contact-right">
          <a className="contact-action" href="mailto:hassanshoman24@gmail.com"><Mail size={18} aria-hidden="true" /><span>Email me<small>hassanshoman24@gmail.com</small></span><ArrowUpRight size={18} aria-hidden="true" /></a>
          <a className="contact-action" href="tel:+201017298165"><Phone size={18} aria-hidden="true" /><span>Call me<small>+20 101 729 8165</small></span><ArrowUpRight size={18} aria-hidden="true" /></a>
          <a className="contact-action" href="https://www.behance.net/hassanshoman" target="_blank" rel="noreferrer"><Send size={18} aria-hidden="true" /><span>Behance portfolio<small>behance.net/hassanshoman</small></span><ArrowUpRight size={18} aria-hidden="true" /></a>
        </div>
      </section>

      <footer className="site-footer">
        <a className="wordmark" href="#top"><img src="/assets/hassan-logo.png" alt="Hassan Mohamed" /></a>
        <p>Brand & Visual Designer / 2026</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
