import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router'
import honeyBowlImg from '@/imports/About/9c4c317a9cd68b607c21bd3097f96c508ffa2c8f.png'
import logoImg from '@/imports/About/d6ae71745f43c080f9c9208d4c8bc0f4b984154d.png'

/* ─── Scroll animation hook ─── */
function useScrollReveal() {
  useEffect(() => {
    const run = () => {
      const observer = new IntersectionObserver(
        (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
        { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
      )
      document.querySelectorAll('.fade-up, .fade-in, .slide-left, .slide-right').forEach((el) => observer.observe(el))
      return observer
    }
    const obs = run()
    return () => obs.disconnect()
  }, [])
}

/* ─── Nav ─── */
function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(12px)',
        boxShadow: scrolled ? '0 1px 16px rgba(0,0,0,0.07)' : 'none',
      }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-[80px] flex items-center justify-between">
        <Link to="/" className="block h-[40px]">
          <img src={logoImg} alt="Kadleaf" className="h-full w-auto object-contain" />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: 'Home', to: '/' },
            { label: 'About', to: '/about' },
            { label: 'Benefits', to: '/benefits' },
            { label: 'Contact', to: '/contact' },
          ].map(({ label, to }) => {
            const isActive = label === 'About'
            return (
              <Link
                key={label}
                to={to}
                className="text-[17px] font-medium transition-colors duration-200"
                style={{
                  fontFamily: "'Roboto:Medium', Roboto, sans-serif",
                  color: isActive ? '#9a6506' : 'rgba(65,73,68,0.75)',
                }}
                onMouseEnter={(e) => { if (!isActive) (e.target as HTMLElement).style.color = '#033425' }}
                onMouseLeave={(e) => { if (!isActive) (e.target as HTMLElement).style.color = 'rgba(65,73,68,0.75)' }}
              >
                {label}
              </Link>
            )
          })}
          <button
            onClick={() => navigate('/#shop')}
            className="ml-4 px-5 py-2 rounded-full text-[15px] font-medium transition-all duration-200 hover:scale-[1.03]"
            style={{
              background: '#9a6506',
              color: '#fefefe',
              fontFamily: "'Roboto:Medium', Roboto, sans-serif",
            }}
          >
            Shop Now
          </button>
        </nav>

        {/* Mobile hamburger */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <div className="w-6 h-0.5 bg-[#033425] mb-1.5 transition-all" style={{ transform: open ? 'rotate(45deg) translateY(8px)' : 'none' }} />
          <div className="w-6 h-0.5 bg-[#033425] mb-1.5 transition-all" style={{ opacity: open ? 0 : 1 }} />
          <div className="w-6 h-0.5 bg-[#033425] transition-all" style={{ transform: open ? 'rotate(-45deg) translateY(-8px)' : 'none' }} />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {['Home', 'About', 'Benefits', 'Contact'].map((item) => (
            <Link key={item} to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-[17px] text-[#033425] py-1" onClick={() => setOpen(false)}>
              {item}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section
      className="pt-[80px] flex items-center justify-center min-h-[55vh] relative overflow-hidden"
      style={{ background: '#fefefe' }}
    >
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(154,101,6,0.06) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-8 py-20 fade-up">
        <p
          className="text-[11px] tracking-[3px] uppercase font-semibold mb-6"
          style={{ fontFamily: "'Inter:Semi Bold', Inter, sans-serif", color: '#7d5700' }}
        >
          ESTABLISHED 2025
        </p>

        <h1
          className="text-[clamp(48px,7vw,96px)] font-normal leading-[1.0] mb-8"
          style={{ fontFamily: "'EB Garamond:Regular', 'EB Garamond', Georgia, serif", color: '#1a1a18' }}
        >
          About{' '}
          <span style={{ color: '#7d5700' }}>Kadleaf</span>
        </h1>

        <p
          className="text-[16px] leading-[26px] max-w-[560px] mb-10"
          style={{ fontFamily: "'Inter:Regular', Inter, sans-serif", color: '#414944' }}
        >
          Every drop begins with nature's quiet brilliance. At Kadleaf, we preserve this purity, keeping
          the soul of forest honey beautifully intact.
        </p>

        <Link
          to="/#shop"
          className="inline-flex items-center px-8 py-[15px] rounded-full text-[15px] font-medium transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
          style={{
            background: '#033425',
            color: '#fefefe',
            fontFamily: "'Roboto:Medium', Roboto, sans-serif",
          }}
        >
          Our Honey
        </Link>
      </div>
    </section>
  )
}

/* ─── Heritage ─── */
function Heritage() {
  return (
    <section className="bg-[#f8f8f6] py-20 px-8">
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-16 items-start">
        {/* Left: text */}
        <div className="flex-1 slide-left">
          <p
            className="text-[11px] tracking-[2.4px] font-semibold uppercase mb-4"
            style={{ fontFamily: "'Inter:Semi Bold', Inter, sans-serif", color: '#7d5700' }}
          >
            HERITAGE
          </p>
          <h2
            className="text-[clamp(36px,4vw,56px)] font-normal leading-[1.1] mb-6"
            style={{ fontFamily: "'EB Garamond:Regular', 'EB Garamond', Georgia, serif", color: '#1a1a18' }}
          >
            Heritage
          </h2>

          <p
            className="text-[16px] leading-[28px] mb-4"
            style={{ fontFamily: "'Roboto:Regular', Roboto, sans-serif", color: '#414944' }}
          >
            Kadleaf began in the heart of the forest.
          </p>
          <p
            className="text-[15px] leading-[26px] mb-4"
            style={{ fontFamily: "'Roboto:Regular', Roboto, sans-serif", color: '#414944' }}
          >
            Kadleaf began with a simple belief: the best honey is the one nature has already perfected. Surrounded by ancient trees, wildflowers, and thriving bees, we discovered honey in its purest form. Rich in goodness, it didn't need changing. It simply deserved to be preserved.
          </p>
          <p
            className="text-[15px] leading-[26px] mb-4"
            style={{ fontFamily: "'Roboto:Regular', Roboto, sans-serif", color: '#414944' }}
          >
            So we harvest with care, taking only what the bees can spare. Every sachet is thoughtfully crafted to preserve its delicate enzymes, floral notes, and antioxidant goodness.
          </p>
          <p
            className="text-[15px] leading-[26px]"
            style={{ fontFamily: "'Roboto:Regular', Roboto, sans-serif", color: '#414944' }}
          >
            Every jar of Kadleaf is minimally processed, cold-strained, and never heated, preserving the complex flavor profiles and vital nutrients that make raw honey a true gift from the earth.
          </p>
        </div>

        {/* Right: Mission + Vision cards */}
        <div className="flex-1 flex flex-col gap-5 slide-right delay-200">
          {/* Our Mission card — light */}
          <div
            className="rounded-2xl p-8 flex flex-col gap-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            style={{ background: '#ffffff', boxShadow: '0 2px 16px rgba(0,0,0,0.06)' }}
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: '#f0f7e8' }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zm-1 15l-4-4 1.4-1.4 2.6 2.6 5.6-5.6L16 8l-7 7z" fill="#7d5700" />
              </svg>
            </div>
            <h3
              className="text-[18px] font-medium"
              style={{ fontFamily: "'Roboto:Medium', Roboto, sans-serif", color: '#1a1a18' }}
            >
              Our Mission
            </h3>
            <p
              className="text-[15px] leading-[24px]"
              style={{ fontFamily: "'Inter:Regular', Inter, sans-serif", color: '#414944' }}
            >
              To create pure, raw, and honest products that enrich everyday living, support healthier choices, and protect the bees and forests we depend on.
            </p>
          </div>

          {/* Our Vision card — dark green */}
          <div
            className="rounded-2xl p-8 flex flex-col gap-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            style={{ background: '#033425', boxShadow: '0 4px 24px rgba(3,52,37,0.3)' }}
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: 'rgba(255,255,255,0.12)' }}
            >
              <svg width="20" height="20" viewBox="0 0 22 16" fill="none">
                <path d="M11 0C6 0 1.73 3.11 0 7.5 1.73 11.89 6 15 11 15s9.27-3.11 11-7.5C20.27 3.11 16 0 11 0zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" fill="white" />
              </svg>
            </div>
            <h3
              className="text-[18px] font-medium text-white"
              style={{ fontFamily: "'Roboto:Medium', Roboto, sans-serif" }}
            >
              Our Vision
            </h3>
            <p
              className="text-[15px] leading-[24px]"
              style={{ fontFamily: "'Inter:Regular', Inter, sans-serif", color: 'rgba(255,255,255,0.8)' }}
            >
              To make nature's sweetest gift with every home, preserving its purity while nurturing the bees, blossoms, and forests that bring it to life.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── What We Believe ─── */
const BELIEFS = [
  {
    icon: '🌿',
    title: "Purpose Don't Change",
    subtitle: 'Nature sustains it. We preserve it.',
    desc: "Honey has always been nature's gift — timeless, pure, and perfect.",
  },
  {
    icon: '🐝',
    title: 'Respect Every Hive',
    subtitle: 'Every hive has its voice. Protect it.',
    desc: 'We harvest with care, ensuring every colony thrives and flourishes.',
  },
  {
    icon: '☀️',
    title: 'Everyday Goodness',
    subtitle: 'A little splash of nature\'s goodness.',
    desc: 'Small joys, daily rituals — honey as part of a healthy life.',
  },
  {
    icon: '🤝',
    title: 'Trust',
    subtitle: 'Honest honey you can trust.',
    desc: 'No secrets in our jar — just pure, traceable, ethical honey.',
  },
]

function WhatWeBelieve() {
  return (
    <section className="bg-white py-24 px-8">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-16 fade-up">
          <h2
            className="text-[clamp(36px,4.5vw,64px)] font-normal leading-[1.1]"
            style={{ fontFamily: "'EB Garamond:Regular', 'EB Garamond', Georgia, serif", color: '#1a1a18' }}
          >
            What We Believe
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BELIEFS.map((b, i) => (
            <div
              key={b.title}
              className={`flex flex-col gap-4 p-6 rounded-2xl fade-up transition-all duration-300 hover:shadow-md hover:-translate-y-1`}
              style={{
                transitionDelay: `${i * 80}ms`,
                background: i % 2 === 0 ? '#f8f8f6' : '#ffffff',
                border: '1px solid rgba(0,0,0,0.04)',
              }}
            >
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center text-xl"
                style={{ background: 'rgba(154,101,6,0.1)' }}
              >
                {b.icon}
              </div>
              <h3
                className="text-[17px] font-medium"
                style={{ fontFamily: "'Roboto:Medium', Roboto, sans-serif", color: '#1a1a18' }}
              >
                {b.title}
              </h3>
              <p
                className="text-[13px] font-medium"
                style={{ fontFamily: "'Inter:Medium', Inter, sans-serif", color: '#7d5700' }}
              >
                {b.subtitle}
              </p>
              <p
                className="text-[14px] leading-[22px]"
                style={{ fontFamily: "'Inter:Regular', Inter, sans-serif", color: '#414944' }}
              >
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Why Choose Kadleaf (About variant) ─── */
const WHY_FEATURES = [
  { icon: '🌿', title: '100% Raw Honey', body: "Pure, minimally processed, and unfiltered to retain nature's goodness." },
  { icon: '🌲', title: 'Forest Harvested', body: 'Collected from pristine forests, far from pesticides and pollution.' },
  { icon: '⚡', title: 'Natural Energy', body: 'A perfect, unrefined source of natural carbohydrates for sustained energy.' },
  { icon: '🛡️', title: 'Supports Immunity', body: 'Natural antibacterial properties support overall immune health.' },
  { icon: '🔬', title: 'Lab Certified', body: 'Every batch is rigorously tested for purity and authenticity.' },
  { icon: '🌸', title: 'Rich in Antioxidants', body: 'Naturally packed with goodness that helps protect your body.' },
]

function WhyChoose() {
  return (
    <section className="bg-[#f8f8f6] py-24 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        <div className="text-center mb-16 fade-up">
          <h2
            className="text-[clamp(36px,4.5vw,65px)] font-medium leading-[1.05]"
            style={{ fontFamily: "'Roboto:Medium', Roboto, sans-serif", color: '#033425' }}
          >
            Why Choose{' '}
            <span style={{ color: '#7d5700' }}>Kadleaf</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left features */}
          <div className="flex-1 flex flex-col gap-10">
            {WHY_FEATURES.slice(0, 3).map((f, i) => (
              <div key={f.title} className={`fade-up delay-${(i + 1) * 100}`}>
                <div className="flex gap-4 items-start">
                  <span className="text-2xl mt-0.5 shrink-0">{f.icon}</span>
                  <div>
                    <h4
                      className="text-[15px] font-normal mb-1"
                      style={{ fontFamily: "'Roboto:Regular', Roboto, sans-serif", color: '#033425' }}
                    >
                      {f.title}
                    </h4>
                    <p
                      className="text-[15px] leading-[24px]"
                      style={{ fontFamily: "'Inter:Regular', Inter, sans-serif", color: '#414944' }}
                    >
                      {f.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Center honey bowl image */}
          <div className="flex-1 flex justify-center items-center fade-up delay-200 py-4">
            <div className="relative w-[320px] max-w-full">
              <img
                src={honeyBowlImg}
                alt="Pure Kadleaf honey in a ceramic bowl"
                className="w-full object-contain drop-shadow-2xl"
                style={{ filter: 'drop-shadow(0 24px 48px rgba(154,101,6,0.18))' }}
              />
            </div>
          </div>

          {/* Right features */}
          <div className="flex-1 flex flex-col gap-10">
            {WHY_FEATURES.slice(3).map((f, i) => (
              <div key={f.title} className={`fade-up delay-${(i + 1) * 100}`}>
                <div className="flex gap-4 items-start">
                  <span className="text-2xl mt-0.5 shrink-0">{f.icon}</span>
                  <div>
                    <h4
                      className="text-[15px] font-normal mb-1"
                      style={{ fontFamily: "'Roboto:Regular', Roboto, sans-serif", color: '#033425' }}
                    >
                      {f.title}
                    </h4>
                    <p
                      className="text-[15px] leading-[24px]"
                      style={{ fontFamily: "'Inter:Regular', Inter, sans-serif", color: '#414944' }}
                    >
                      {f.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Committed to Purity ─── */
function Commitment() {
  return (
    <section className="bg-white py-20 px-8 flex flex-col items-center text-center fade-up">
      <p
        className="text-[11px] tracking-[2.4px] font-semibold uppercase mb-6"
        style={{ fontFamily: "'Inter:Semi Bold', Inter, sans-serif", color: '#7d5700' }}
      >
        IT'S A KADLEAF THING
      </p>

      <h2
        className="text-[clamp(28px,3.5vw,48px)] font-normal leading-[1.2] max-w-[700px] mb-8"
        style={{ fontFamily: "'EB Garamond:Regular', 'EB Garamond', Georgia, serif", color: '#1a1a18' }}
      >
        Committed to Purity, Dedicated to Nature.
      </h2>

      <p
        className="text-[16px] leading-[28px] max-w-[560px] mb-3"
        style={{ fontFamily: "'Inter:Regular', Inter, sans-serif", color: '#414944' }}
      >
        For us, it's never just about honey. It's about honoring nature, caring for the bees, and creating something truly honest with every follow.
      </p>

      <p
        className="text-[15px] leading-[26px] max-w-[500px] italic"
        style={{ fontFamily: "'Inter:Italic', Inter, sans-serif", fontStyle: 'italic', color: '#7d5700' }}
      >
        That's the promise behind every Kadleaf sachet, boldly and always.
      </p>
    </section>
  )
}

/* ─── Newsletter ─── */
function Newsletter() {
  const [email, setEmail] = useState('')

  return (
    <section className="py-20 px-8 flex justify-center" style={{ background: '#033425' }}>
      <div className="w-full max-w-[672px] flex flex-col items-center gap-10 fade-up">
        <h2
          className="text-[clamp(36px,5vw,65px)] font-medium leading-none text-center"
          style={{ fontFamily: "'Roboto:Medium', Roboto, sans-serif", color: '#ffdeaa' }}
        >
          Stay Close to Nature.
        </h2>
        <p
          className="text-[16px] leading-[24px] text-center"
          style={{ fontFamily: "'Inter:Regular', Inter, sans-serif", color: 'rgba(255,255,255,0.9)' }}
        >
          Subscribe for early access to limited harvests, exclusive offers, and wellness tips.
        </p>
        <div className="w-full flex gap-4 flex-wrap justify-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 min-w-[220px] max-w-[384px] px-6 py-[18px] rounded-full text-[16px] outline-none"
            style={{ background: 'white', color: '#414944', fontFamily: "'Inter:Regular', Inter, sans-serif", border: 'none' }}
          />
          <button
            className="px-8 py-[16px] rounded-full text-[16px] font-medium text-white transition-all duration-200 hover:scale-[1.03]"
            style={{ background: '#9a6506', fontFamily: "'Inter:Medium', Inter, sans-serif" }}
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  )
}

/* ─── Footer ─── */
function Footer() {
  const cols = [
    { heading: 'Explore', items: ['Shop', 'About Us', 'Our Process', 'Blog'] },
    { heading: 'Support', items: ['Contact', 'FAQ'] },
    { heading: 'Connect', items: ['Instagram', 'Facebook', 'YouTube'] },
  ]

  return (
    <footer id="contact" style={{ background: '#f6f3f2' }}>
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 py-16" style={{ borderBottom: '1px solid rgba(192,200,194,0.3)' }}>
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="max-w-[320px] flex flex-col gap-4">
            <Link to="/" className="block h-[40px]">
              <img src={logoImg} alt="Kadleaf" className="h-full w-auto object-contain" />
            </Link>
            <p
              className="text-[15px] leading-[24px]"
              style={{ fontFamily: "'Inter:Regular', Inter, sans-serif", color: '#414944' }}
            >
              Artisanal Minimalism in every drop. Sourced ethically from pristine wild forests.
            </p>
          </div>
          <div className="flex flex-wrap gap-12 flex-1">
            {cols.map((col) => (
              <div key={col.heading} className="flex flex-col gap-4 min-w-[100px]">
                <p
                  className="text-[16px] font-medium"
                  style={{ fontFamily: "'Inter:Medium', Inter, sans-serif", color: '#033425' }}
                >
                  {col.heading}
                </p>
                {col.items.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-[15px] hover:text-[#033425] transition-colors"
                    style={{ fontFamily: "'Inter:Regular', Inter, sans-serif", color: '#414944' }}
                  >
                    {item}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 py-5 flex flex-wrap items-center justify-between gap-4">
        <p className="text-[14px]" style={{ fontFamily: "'Inter:Regular', Inter, sans-serif", color: '#414944' }}>
          © 2024 Kadleaf. All rights reserved.
        </p>
        <div className="flex gap-6">
          {['Privacy Policy', 'Terms of Service'].map((l) => (
            <a key={l} href="#" className="text-[14px] hover:text-[#033425] transition-colors" style={{ fontFamily: "'Inter:Regular', Inter, sans-serif", color: '#414944' }}>
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

/* ─── About Page ─── */
export default function AboutPage() {
  useScrollReveal()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-[#fefefe]" style={{ fontFamily: "'Roboto:Regular', Roboto, sans-serif" }}>
      <Nav />
      <Hero />
      <Heritage />
      <WhatWeBelieve />
      <WhyChoose />
      <Commitment />
      <Newsletter />
      <Footer />
    </div>
  )
}
