"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import lanesLogo from "./laneslogo.png";

function scrollToSection(id) {
  if (typeof window === "undefined") return;
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
          <div className="logo">
            <span className="logo-mark">
              <Image
                src={lanesLogo}
                alt="Lanes logo"
                className="logo-image"
                fill
                sizes="32px"
                priority
              />
            </span>
            <span className="logo-text">Lanes</span>
          </div>

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
              Contact
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
        <section className="hero" id="top">
          <div className="hero-bg-gradient" />
          <div className="hero-inner container">
            <div className="hero-content">
              <p className="eyebrow">
                Shipping facilitation for modern teams
                <span className="eyebrow-dot">•</span>
                Based in Lebanon
              </p>
              <h1>
                We orchestrate your shipping
                <br />
                so you can focus on growth.
              </h1>
              <p className="hero-subtitle">
                Lanes connects carriers, warehouses, and customs into one clean
                workflow. We remove friction, reduce costs, and give your team
                real-time visibility across every shipment — from Lebanon to the
                rest of the world.
              </p>

              <div className="hero-actions">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handlePrimaryCta}
                >
                  Book a consultation
                </button>
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={handleSecondaryCta}
                >
                  See how it works
                </button>
              </div>

              <div className="hero-metadata">
                <div>
                  <p className="metric-label">Average savings</p>
                  <p className="metric-value">12–18%</p>
                </div>
                <div>
                  <p className="metric-label">On-time deliveries</p>
                  <p className="metric-value">98.4%</p>
                </div>
                <div>
                  <p className="metric-label">Countries covered</p>
                  <p className="metric-value">120+</p>
                </div>
                <div>
                  <p className="metric-label">Headquarters</p>
                  <p className="metric-value">Beirut, Lebanon</p>
                </div>
              </div>
            </div>

            <div className="hero-panel" aria-hidden="true">
              <div className="hero-card primary">
                <div className="hero-card-header">
                  <span className="pill pill-green">Live lane</span>
                  <span className="hero-card-title">EU Fulfillment</span>
                </div>
                <div className="hero-card-body">
                  <div className="lane-row">
                    <span>Rotterdam → Berlin</span>
                    <span className="lane-status on-time">On time</span>
                  </div>
                  <div className="lane-row">
                    <span>Valencia → Paris</span>
                    <span className="lane-status delayed">Customs hold</span>
                  </div>
                  <div className="lane-row">
                    <span>Gdańsk → Stockholm</span>
                    <span className="lane-status on-time">Cleared</span>
                  </div>
                </div>
                <div className="hero-card-footer">
                  <span className="pill pill-soft">
                    Automated carrier routing
                  </span>
                </div>
              </div>

              <div className="hero-card secondary">
                <p className="secondary-label">Today’s overview</p>
                <div className="secondary-metrics">
                  <div>
                    <p className="secondary-number">142</p>
                    <p className="secondary-caption">Shipments in transit</p>
                  </div>
                  <div>
                    <p className="secondary-number">4</p>
                    <p className="secondary-caption">Exceptions flagged</p>
                  </div>
                </div>
                <div className="secondary-footer">
                  Exceptions are routed to your team with the exact context and
                  documents needed — before they become problems.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="services">
          <div className="container">
            <div className="section-header">
              <p className="eyebrow">What we do</p>
              <h2>Shipping facilitation from first quote to final delivery.</h2>
              <p className="section-subtitle">
                Lanes sits between your systems and the logistics world, turning
                scattered carriers and documents into one coordinated flow.
              </p>
            </div>

            <div className="grid grid-3">
              <article className="card">
                <h3>Carrier &amp; route orchestration</h3>
                <p>
                  We match your shipments with the best carrier and lane for
                  cost, speed, and reliability — automatically and at scale.
                </p>
                <ul className="card-list">
                  <li>Multi-carrier optimization</li>
                  <li>Dynamic routing rules</li>
                  <li>Performance-based allocation</li>
                </ul>
              </article>

              <article className="card">
                <h3>Customs &amp; documentation</h3>
                <p>
                  We prepare, validate, and route documents ahead of time to keep
                  customs from slowing your operations down.
                </p>
                <ul className="card-list">
                  <li>Automated document checks</li>
                  <li>Global customs partners</li>
                  <li>Exception handling workflows</li>
                </ul>
              </article>

              <article className="card">
                <h3>Control tower visibility</h3>
                <p>
                  See your entire network at a glance — with live statuses,
                  predictive delays, and alerts that your team can act on.
                </p>
                <ul className="card-list">
                  <li>Live shipment tracking</li>
                  <li>Predictive exception signals</li>
                  <li>On-time &amp; cost reporting</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="section section-alt" id="how-it-works">
          <div className="container">
            <div className="section-header">
              <p className="eyebrow">How it works</p>
              <h2>
                We plug into your stack, then orchestrate everything behind it.
              </h2>
            </div>

            <div className="steps">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-body">
                  <h3>Understand your lanes and constraints</h3>
                  <p>
                    We map your shipping flows, SLAs, carrier contracts, and
                    operational quirks to design the right facilitation layer.
                  </p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <div className="step-body">
                  <h3>Connect systems, carriers, and partners</h3>
                  <p>
                    Lanes integrates with your WMS, TMS, ERP, and carriers to pull
                    live data and push clean, structured instructions.
                  </p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <div className="step-body">
                  <h3>Automate decisions &amp; surface exceptions</h3>
                  <p>
                    We automate the repetitive logistics decisions while routing
                    edge cases to your team with full context and next steps.
                  </p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <div className="step-body">
                  <h3>Optimize continuously</h3>
                  <p>
                    We monitor performance, renegotiate lanes where needed, and
                    keep your network running smoothly as you scale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="why-lanes">
          <div className="container">
            <div className="section-layout">
              <div className="section-copy">
                <p className="eyebrow">Why Lanes</p>
                <h2>More than a broker. A facilitation partner.</h2>
                <p className="section-subtitle">
                  Traditional brokers move boxes from A to B. Lanes builds the
                  connective tissue that lets your entire operation move in sync.
                </p>
                <ul className="benefits-list">
                  <li>
                    <span className="benefit-dot" />
                    <div>
                      <h3>Designed for operators</h3>
                      <p>
                        We sit with your operations team to understand their real
                        day-to-day and design flows that actually work for them.
                      </p>
                    </div>
                  </li>
                  <li>
                    <span className="benefit-dot" />
                    <div>
                      <h3>Data, not guesswork</h3>
                      <p>
                        Every lane, carrier, and exception is measured so you can
                        make better contracts and capacity decisions.
                      </p>
                    </div>
                  </li>
                  <li>
                    <span className="benefit-dot" />
                    <div>
                      <h3>Implementation, not just software</h3>
                      <p>
                        Our team helps with integrations, process design, and
                        change management so you see value quickly.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <aside className="highlight-card">
                <h3>Ideal partners</h3>
                <p>We’re a strong fit if you are:</p>
                <ul className="card-list">
                  <li>Running multi-country fulfillment or e‑commerce</li>
                  <li>Managing 1000+ outbound shipments per month</li>
                  <li>Balancing multiple 3PLs, carriers, or warehouses</li>
                </ul>
                <p className="highlight-footnote">
                  Not sure where to start? We’ll review your current setup and
                  share a simple roadmap — no obligation.
                </p>
              </aside>
            </div>
          </div>
        </section>

        <section className="section section-alt" id="contact">
          <div className="container">
            <div className="section-header">
              <p className="eyebrow">Let’s talk</p>
              <h2>Tell us about your shipping network.</h2>
              <p className="section-subtitle">
                Share a few details and we’ll come back with practical
                recommendations, not a generic sales deck. Your primary contact
                will be Joe Ghaleb, based in Lebanon.
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
                      placeholder="Alex Rivera"
                      required
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="company">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      placeholder="Acme Fulfillment Co."
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
                      placeholder="alex@company.com"
                      required
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="volume">Monthly shipment volume</label>
                    <select id="volume" name="volume" required defaultValue="">
                      <option value="" disabled>
                        Select a range
                      </option>
                      <option value="lt-500">Under 500</option>
                      <option value="500-2000">500 – 2,000</option>
                      <option value="2000-10000">2,000 – 10,000</option>
                      <option value="gt-10000">10,000+</option>
                    </select>
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="regions">Regions you ship to</label>
                  <input
                    type="text"
                    id="regions"
                    name="regions"
                    placeholder="e.g. North America, EU, MENA"
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="message">Where are you feeling friction?</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Share a bit about your current setup and where you’d like support."
                  />
                </div>

                <button type="submit" className="btn btn-primary form-submit">
                  Request a call
                </button>
                <p className="form-footnote">
                  We typically respond within one business day. Your details are
                  kept confidential.
                </p>
                {formSubmitted && (
                  <p className="form-success">
                    Thank you — we’ve received your details. Someone from Lanes
                    will reach out shortly.
                  </p>
                )}
              </form>

              <aside className="contact-aside">
                <div className="mini-card">
                  <p className="mini-label">Your contact</p>
                  <p className="contact-person-name">Joe Ghaleb</p>
                  <p className="contact-person-role">
                    Client Partnerships · Beirut, Lebanon
                  </p>
                  <p className="mini-main">joe@lanes.ship</p>
                </div>
                <div className="mini-card">
                  <p className="mini-label">Example outcomes</p>
                  <ul className="mini-list">
                    <li>
                      Reduced lead times by 22% for a DTC brand shipping
                      globally
                    </li>
                    <li>
                      Consolidated 9 carrier portals into a single control view
                    </li>
                    <li>
                      Cut manual shipment touches by 40% for a 3PL partner
                    </li>
                  </ul>
                </div>
                <div className="mini-card secondary">
                  <p className="mini-label">Based in</p>
                  <p className="mini-main">
                    Headquartered in Lebanon, operating with partners across EU,
                    US, and MENA.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-left">
            <div className="logo footer-logo">
              <span className="logo-mark">
                <Image
                  src={lanesLogo}
                  alt="Lanes logo"
                  className="logo-image"
                  fill
                  sizes="32px"
                />
              </span>
              <span className="logo-text">Lanes</span>
            </div>
            <p className="footer-copy">
              Lanes is a shipping facilitation company helping teams orchestrate
              carriers, customs, and logistics with clarity and control.
            </p>
          </div>
          <div className="footer-right">
            <div className="footer-column">
              <p className="footer-heading">Company</p>
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
            <div className="footer-column">
              <p className="footer-heading">Contact</p>
              <button type="button" onClick={() => handleNavLinkClick("contact")}>
                Talk to our team
              </button>
                <span className="footer-text">Primary contact: Joe Ghaleb</span>
                <span className="footer-text">Email: joe@lanes.ship</span>
                <span className="footer-text">Location: Beirut, Lebanon</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container footer-bottom-inner">
            <span>© {year} Lanes. All rights reserved.</span>
            <span className="footer-bottom-sub">
              Built with reliability and operators in mind.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}




