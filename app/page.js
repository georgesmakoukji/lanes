"use client";

import Image from "next/image";
import { useCallback, useState } from "react";

function scrollToSection(id) {
  if (typeof window === "undefined") return;
  // For true "back to top", scroll to the very top of the page
  if (id === "top") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const el = document.getElementById(id);
  if (!el) return;
  const navOffset = 72;
  const rect = el.getBoundingClientRect();
  const offsetTop = rect.top + window.scrollY - navOffset + 4;
  window.scrollTo({ top: offsetTop, behavior: "smooth" });
}

export default function HomePage() {
  const [navOpen, setNavOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleNavToggle = useCallback(() => {
    setNavOpen((open) => !open);
  }, []);

  const handleNavLinkClick = useCallback((id) => {
    scrollToSection(id);
    setNavOpen(false);
  }, []);

  const handleFormSubmit = useCallback((event) => {
    event.preventDefault();
    setFormSubmitted(true);
    event.target.reset();
  }, []);

  const handlePrimaryCta = useCallback(() => {
    scrollToSection("contact");
  }, []);

  const handleSecondaryCta = useCallback(() => {
    scrollToSection("how-it-works");
  }, []);

  const year = new Date().getFullYear();

  return (
    <>
      <header className="nav">
        <div className="nav-inner container">
          <button
            type="button"
            className="logo"
            onClick={() => scrollToSection("top")}
          >
            <span className="logo-mark">
              <Image
                src="/lanes-logo.png"
                alt="Lanes logo"
                className="logo-image"
                width={170}
                height={68}
                priority
              />
            </span>
          </button>

          <nav
            className={`nav-links ${navOpen ? "open" : ""}`}
            aria-label="Primary navigation"
          >
            <button type="button" onClick={() => handleNavLinkClick("services")}>
              Services
            </button>
            <button
              type="button"
              onClick={() => handleNavLinkClick("how-it-works")}
            >
              How it works
            </button>
            <button type="button" onClick={() => handleNavLinkClick("why-lanes")}>
              Why Lanes
            </button>
            <button type="button" onClick={() => handleNavLinkClick("contact")}>
              Contact Us
            </button>
          </nav>

          <button className="nav-cta" onClick={handlePrimaryCta}>
            Talk to our team
          </button>

          <button
            className={`nav-toggle ${navOpen ? "open" : ""}`}
            aria-label="Toggle navigation"
            aria-expanded={navOpen}
            type="button"
            onClick={handleNavToggle}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero" id="top">
          <div className="hero-bg-gradient" />
          <div className="hero-inner container">
            <div className="hero-content">
              <p className="eyebrow">
                Global shipping partner
                <span className="eyebrow-dot">•</span>
                Sea · Air · Road
              </p>
              <h1>
                From Beirut
                <br />
                to every major port.
              </h1>
              <p className="hero-subtitle">
                Lanes is a global shipping company, coordinating reliable,
                modern logistics worldwide — from packing and delivering a
                single box to orchestrating a full network of containers.
              </p>

              <div className="hero-tags">
                <span className="hero-tag">Export &amp; import</span>
                <span className="hero-tag">Door-to-port &amp; port-to-door</span>
                <span className="hero-tag">Lebanon as your regional hub</span>
              </div>

              <div className="hero-actions">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handlePrimaryCta}
                >
                  Plan a shipment
                </button>
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={handleSecondaryCta}
                >
                  See how we operate
                </button>
              </div>

              <div className="hero-metadata">
                <div>
                  <p className="metric-label">Head office</p>
                  <p className="metric-value">Beirut, Lebanon</p>
                </div>
                <div>
                  <p className="metric-label">Countries served</p>
                  <p className="metric-value">120+</p>
                </div>
                <div>
                  <p className="metric-label">Primary modes</p>
                  <p className="metric-value">Ocean · Air · Road</p>
                </div>
              </div>
            </div>

            <div className="hero-panel" aria-hidden="true">
              <div className="hero-card primary">
                <div className="hero-card-header">
                  <span className="pill pill-green">Live overview</span>
                  <span className="hero-card-title">Beirut hub</span>
                </div>
                <div className="hero-card-body">
                  <div className="lane-row">
                    <span>Beirut → Rotterdam</span>
                    <span className="lane-status on-time">Sailing</span>
                  </div>
                  <div className="lane-row">
                    <span>Beirut → Dubai</span>
                    <span className="lane-status on-time">On time</span>
                  </div>
                  <div className="lane-row">
                    <span>Beirut → Jeddah</span>
                    <span className="lane-status delayed">Port traffic</span>
                  </div>
                </div>
                <div className="hero-card-footer">
                  <span className="pill pill-soft">
                    Your shipments, visible end to end
                  </span>
                </div>
              </div>

              <div className="hero-card secondary">
                <p className="secondary-label">Today&apos;s snapshot</p>
                <div className="secondary-metrics">
                  <div>
                    <p className="secondary-number">62</p>
                    <p className="secondary-caption">Containers in transit</p>
                  </div>
                  <div>
                    <p className="secondary-number">19</p>
                    <p className="secondary-caption">Air freight loads</p>
                  </div>
                </div>
                <div className="secondary-footer">
                  We coordinate with ports, airports, and road partners in Lebanon
                  so your cargo doesn&apos;t get stuck between systems.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="section" id="services">
          <div className="container">
            <div className="section-header">
              <p className="eyebrow">Services</p>
              <h2>Shipping across the globe, end to end.</h2>
              <p className="section-subtitle">
                Whether you&apos;re exporting, importing, or running complex
                multi‑lane networks, Lanes designs and runs the right routes for
                your cargo worldwide.
              </p>
            </div>

            <div className="grid grid-3">
              <article className="card">
                <h3>Global ocean freight</h3>
                <p>
                  Full-container and consolidated services through Beirut with
                  reliable global connections.
                </p>
                <ul className="card-list">
                  <li>FCL &amp; LCL to and from major ports</li>
                  <li>Coordinated origin and destination handling</li>
                  <li>Port-to-port and door-to-port options</li>
                </ul>
              </article>

              <article className="card">
                <h3>Time‑critical air freight</h3>
                <p>
                  Fast, time‑sensitive shipments through key global air hubs.
                </p>
                <ul className="card-list">
                  <li>Express and deferred air options</li>
                  <li>Temperature-sensitive and high-value cargo</li>
                  <li>Door pickup and airport handover</li>
                </ul>
              </article>

              <article className="card">
                <h3>Regional road &amp; cross‑border</h3>
                <p>
                  Road freight connecting your key markets across regions and
                  borders.
                </p>
                <ul className="card-list">
                  <li>Cross‑border lanes across MENA and Europe</li>
                  <li>Customs coordination at land borders</li>
                  <li>Dedicated and shared trucking options</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="section section-alt" id="how-it-works">
          <div className="container">
            <div className="section-header">
              <p className="eyebrow">How it works</p>
              <h2>A simple flow for complex shipping.</h2>
            </div>

            <div className="steps">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-body">
                  <h3>Share your origin, destination, and timing</h3>
                  <p>
                    Tell us where you&apos;re shipping from, where it&apos;s
                    going, and what matters most — speed, cost, or a balance of
                    both.
                  </p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <div className="step-body">
                  <h3>We design the best global lane</h3>
                  <p>
                    We build routes that balance speed, cost, and reliability,
                    whether that&apos;s direct or via key global hubs.
                  </p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <div className="step-body">
                  <h3>We coordinate carriers and customs</h3>
                  <p>
                    Our team manages bookings, documentation, and customs with
                    local and international partners.
                  </p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <div className="step-body">
                  <h3>You track everything in one place</h3>
                  <p>
                    Get clear updates on where your cargo is, what&apos;s
                    cleared, and what&apos;s next — without chasing multiple
                    portals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY LANES */}
        <section className="section" id="why-lanes">
          <div className="container">
            <div className="section-layout">
              <div className="section-copy">
                <p className="eyebrow">Why Lanes</p>
                <h2>A global team with a local view.</h2>
                <p className="section-subtitle">
                  You get the speed and pragmatism of a hands‑on operations team
                  with the reach and standards of an international forwarder.
                </p>
                <ul className="benefits-list">
                  <li>
                    <span className="benefit-dot" />
                    <div>
                      <h3>Local expertise, global network</h3>
                      <p>
                        We know how ports, airports, and borders really work in
                        the markets that matter to you — and we pair that with
                        trusted partners worldwide.
                      </p>
                    </div>
                  </li>
                  <li>
                    <span className="benefit-dot" />
                    <div>
                      <h3>Hands-on support</h3>
                      <p>
                        You speak directly with operators who can actually move
                        things, not a faceless ticketing system.
                      </p>
                    </div>
                  </li>
                  <li>
                    <span className="benefit-dot" />
                    <div>
                      <h3>Clear, honest communication</h3>
                      <p>
                        We&apos;d rather tell you what&apos;s really happening
                        with a shipment than hide behind vague status updates.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <aside className="highlight-card">
                <h3>Who we work best with</h3>
                <p>We&apos;re a strong fit if you are:</p>
                <ul className="card-list">
                  <li>Shipping regularly between global ports and regions</li>
                  <li>Running e‑commerce or B2B distribution across markets</li>
                  <li>
                    Looking for one team to own sea, air, and road coordination
                  </li>
                </ul>
                <p className="highlight-footnote">
                  Not sure if we&apos;re the right fit? Share your current setup
                  and we&apos;ll tell you honestly what we can and can&apos;t do.
                </p>
              </aside>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="section section-alt" id="contact">
          <div className="container">
            <div className="section-header">
              <p className="eyebrow">Contact Us</p>
              <h2>Tell us what you&apos;re moving and where.</h2>
              <p className="section-subtitle">
                Share a bit about your shipments and lanes. Our global team will
                get back to you with clear next steps.
              </p>
            </div>

            <div className="contact-layout">
              <form className="contact-form" onSubmit={handleFormSubmit}>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="company">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      placeholder="Company name"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="email">Work email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="you@company.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="lanes">
                    Typical lanes (from / to, modes, etc.)
                  </label>
                  <input
                    type="text"
                    id="lanes"
                    name="lanes"
                    placeholder="e.g. Beirut → Rotterdam by sea, Beirut → Dubai by air"
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="message">What do you need help with?</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Share a bit about your current setup and where you’d like support."
                  />
                </div>

                <button type="submit" className="btn btn-primary form-submit">
                  Contact us
                </button>
                <p className="form-footnote">
                  We aim to respond within one business day. Your details are
                  kept confidential and used only to contact you about shipping.
                </p>
                {formSubmitted && (
                  <p className="form-success">
                    Thank you — we&apos;ve received your details. We&apos;ll
                    reach out shortly.
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-left">
            <button
              type="button"
              className="logo footer-logo"
              onClick={() => scrollToSection("top")}
            >
              <span className="logo-mark">
                <Image
                  src="/lanes-logo.png"
                  alt="Lanes logo"
                  className="logo-image"
                  width={120}
                  height={72}
                />
              </span>
            </button>
            <p className="footer-copy">
              Lanes International SARL is a global shipping company,
              headquartered in Beirut, helping brands move everything from
              single boxes to full container loads with clarity and control.
            </p>
            <div className="footer-social">
              <a
                href="#"
                className="footer-social-icon footer-social-icon--facebook"
                aria-label="Lanes on Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M13.4 8H12a1.4 1.4 0 0 0-1.4 1.4V11H9v2h1.6v4h2v-4h1.4l.4-2H12.6V9.7c0-.3.2-.5.5-.5h1.3V8Z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/lanesinternational/?utm_source=ig_web_button_share_sheet"
                target="_blank"
                rel="noreferrer"
                className="footer-social-icon footer-social-icon--instagram"
                aria-label="Lanes on Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <rect
                    x="4"
                    y="4"
                    width="16"
                    height="16"
                    rx="5"
                    ry="5"
                    strokeWidth="2.4"
                  />
                  <circle cx="12" cy="12" r="4.5" strokeWidth="2.4" />
                  <circle cx="16.5" cy="7.5" r="1.4" />
                </svg>
              </a>
            </div>
            <p className="footer-bottom-copy">
              © {year} Lanes International SARL. All rights reserved.
            </p>
          </div>
          <div className="footer-right">
            <div className="footer-column">
              <p className="footer-heading">Quick links</p>
              <button type="button" onClick={() => scrollToSection("top")}>
                Home
              </button>
              <button type="button" onClick={() => handleNavLinkClick("services")}>
                Services
              </button>
              <button
                type="button"
                onClick={() => handleNavLinkClick("how-it-works")}
              >
                How it works
              </button>
              <button
                type="button"
                onClick={() => handleNavLinkClick("why-lanes")}
              >
                Why Lanes
              </button>
            </div>
            <div className="footer-column footer-contact">
              <p className="footer-heading">Contact us</p>
              <span className="footer-label">Phone number</span>
              <a
                href="tel:+9613644411"
                className="footer-text"
              >
                +961 3 644 411
              </a>
              <span className="footer-label">Address</span>
              <a
                href="https://www.google.com/maps?q=33.887827,35.572922"
                target="_blank"
                rel="noreferrer"
                className="footer-text"
              >
                Jdeideh, Metn, Lebanon
              </a>
              <a
                href="https://www.google.com/maps?q=33.887827,35.572922"
                target="_blank"
                rel="noreferrer"
                className="footer-text"
              >
                Palace of Justice street, Makoukji building
              </a>
              <a
                href="https://www.google.com/maps?q=33.887827,35.572922"
                target="_blank"
                rel="noreferrer"
                className="footer-text"
              >
                Ground Floor
              </a>
              <span className="footer-label">Email us</span>
              <a
                href="mailto:info@lanesinternational.com"
                className="footer-text"
              >
                info@lanesinternational.com
              </a>
            </div>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/9613644411"
        className="whatsapp-button"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Lanes on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          aria-hidden="true"
        >
          <path d="M16 6.2A9.77 9.77 0 0 0 6.2 16a9.6 9.6 0 0 0 1.4 5.1L6 26l5-1.6A9.9 9.9 0 0 0 16 25.8 9.77 9.77 0 0 0 25.8 16 9.74 9.74 0 0 0 16 6.2Zm0-2.2A12 12 0 0 1 28 16 12 12 0 0 1 16 28a12.2 12.2 0 0 1-5.2-1.2L4 28l1.2-6.7A11.9 11.9 0 0 1 4 16 12 12 0 0 1 16 4Zm5.2 14.8c-.3-.2-1.8-.9-2.1-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7 0a7.6 7.6 0 0 1-2.2-1.4 8.21 8.21 0 0 1-1.6-2c-.2-.3 0-.4.2-.6l.5-.5a2 2 0 0 0 .3-.5.55.55 0 0 0 0-.5c0-.2-.7-1.8-1-2.4s-.5-.5-.7-.5h-.6a1.1 1.1 0 0 0-.8.4 3.31 3.31 0 0 0-1 2.4 5.72 5.72 0 0 0 1.2 3.1 12.91 12.91 0 0 0 4.8 4.4 16.06 16.06 0 0 0 1.7.6 4.07 4.07 0 0 0 1.9.1 3.18 3.18 0 0 0 2.1-1.5 2.62 2.62 0 0 0 .2-1.5c-.1-.1-.2-.1-.5-.3Z" />
        </svg>
      </a>
    </>
  );
}




