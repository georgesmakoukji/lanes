"use client";

import Image from "next/image";
import { useCallback, useState } from "react";

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
                src="/lanes-logo.png"
                alt="Lanes logo"
                className="logo-image"
                width={170}
                height={68}
                priority
              />
            </span>
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
                Lebanon-based global shipping
                <span className="eyebrow-dot">•</span>
                Sea · Air · Road
              </p>
              <h1>
                From Beirut
                <br />
                to every major port.
              </h1>
              <p className="hero-subtitle">
                Lanes is a shipping company headquartered in Lebanon. We turn
                Beirut into your gateway for reliable, modern logistics — whether
                you&apos;re moving a single container or a full global network.
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
                    Lebanon at the center, shipments everywhere
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
              <h2>Shipping from Lebanon to the world — and back.</h2>
              <p className="section-subtitle">
                Whether you&apos;re exporting from Lebanon, importing into it, or
                using it as a hub for the region, Lanes designs and runs the
                right routes for your cargo.
              </p>
            </div>

            <div className="grid grid-3">
              <article className="card">
                <h3>Ocean freight via Beirut</h3>
                <p>
                  Full-container and consolidated services through Beirut with
                  reliable global connections.
                </p>
                <ul className="card-list">
                  <li>FCL &amp; LCL from Beirut to major ports</li>
                  <li>Import routing into Lebanon</li>
                  <li>Port-to-port and door-to-port options</li>
                </ul>
              </article>

              <article className="card">
                <h3>Air freight through BEY</h3>
                <p>
                  Fast, time-sensitive shipments via Beirut Rafic Hariri
                  International Airport.
                </p>
                <ul className="card-list">
                  <li>Express and deferred air options</li>
                  <li>Temperature-sensitive and high-value cargo</li>
                  <li>Door pickup and airport handover</li>
                </ul>
              </article>

              <article className="card">
                <h3>Regional road &amp; cross-border</h3>
                <p>
                  Road freight connecting Lebanon with key cities across the
                  Middle East and beyond.
                </p>
                <ul className="card-list">
                  <li>Lebanon–GCC and regional lanes</li>
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
                  <h3>We design the best lane via Lebanon</h3>
                  <p>
                    We build a route that uses Lebanon as a hub when it makes
                    sense, or connects directly if that&apos;s better for you.
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
                <h2>A Lebanon team with a global view.</h2>
                <p className="section-subtitle">
                  You get the speed and pragmatism of a local Lebanese team with
                  the reach and standards of an international forwarder.
                </p>
                <ul className="benefits-list">
                  <li>
                    <span className="benefit-dot" />
                    <div>
                      <h3>Local expertise, global network</h3>
                      <p>
                        We know how Lebanon&apos;s ports, airports, and borders
                        really work — and we pair that with trusted partners
                        worldwide.
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
                  <li>Shipping regularly in or out of Lebanon</li>
                  <li>Running e‑commerce or B2B distribution across MENA</li>
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
              <p className="eyebrow">Contact</p>
              <h2>Talk to someone on the ground in Lebanon.</h2>
              <p className="section-subtitle">
                Share a bit about what you&apos;re moving, where, and how often.
                You&apos;ll hear back from Joe with clear next steps.
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
                  <div className="form-field">
                    <label htmlFor="volume">Monthly shipment volume</label>
                    <select id="volume" name="volume" required defaultValue="">
                      <option value="" disabled>
                        Select a range
                      </option>
                      <option value="lt-50">Under 50</option>
                      <option value="50-250">50 – 250</option>
                      <option value="250-1000">250 – 1,000</option>
                      <option value="gt-1000">1,000+</option>
                    </select>
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
                  Message Joe
                </button>
                <p className="form-footnote">
                  We aim to respond within one business day. Your details are
                  kept confidential and used only to contact you about shipping.
                </p>
                {formSubmitted && (
                  <p className="form-success">
                    Thank you — we&apos;ve received your details. Joe will reach
                    out shortly.
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
                  src="/lanes-logo.png"
                  alt="Lanes logo"
                  className="logo-image"
                  width={120}
                  height={72}
                />
              </span>
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




