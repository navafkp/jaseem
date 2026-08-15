import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import logoImg from '@/imports/Contact/d6ae71745f43c080f9c9208d4c8bc0f4b984154d.png'

/* ── Scroll reveal ──────────────────────────────────────── */
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.fade-up, .fade-in, .slide-left, .slide-right').forEach((el) =>
      observer.observe(el)
    )
    return () => observer.disconnect()
  }, [])
}

/* ── Contact info SVG icons ─────────────────────────────── */
const IconEmail = () => (
  <svg width="19" height="15" viewBox="0 0 18.9999 14.9999" fill="none">
    <path d="M1.80768 14.9999C1.30255 14.9999 0.874992 14.8249 0.524995 14.4749C0.174998 14.1249 0 13.6974 0 13.1922V1.80768C0 1.30255 0.174998 0.874992 0.524995 0.524995C0.874992 0.174998 1.30255 0 1.80768 0H17.1922C17.6974 0 18.1249 0.174998 18.4749 0.524995C18.8249 0.874992 18.9999 1.30255 18.9999 1.80768V13.1922C18.9999 13.6974 18.8249 14.1249 18.4749 14.4749C18.1249 14.8249 17.6974 14.9999 17.1922 14.9999H1.80768ZM9.49996 8.05762L1.49996 2.94223V13.1922C1.49996 13.282 1.52881 13.3557 1.58651 13.4134C1.6442 13.4711 1.71793 13.5 1.80768 13.5H17.1922C17.282 13.5 17.3557 13.4711 17.4134 13.4134C17.4711 13.3557 17.5 13.282 17.5 13.1922V2.94223L9.49996 8.05762ZM9.49996 6.49996L17.3461 1.49996H1.65382L9.49996 6.49996Z" fill="#033425" />
  </svg>
)

const IconPhone = () => (
  <svg width="17" height="17" viewBox="0 0 16.9999 16.9999" fill="none">
    <path d="M15.9403 16.9999C14.0557 16.9999 12.1625 16.5618 10.2605 15.6855C8.35863 14.8092 6.6112 13.573 5.01825 11.9769C3.42531 10.3807 2.1907 8.63329 1.31442 6.73458C0.43814 4.83587 0 2.94422 0 1.05962C0 0.756868 0.1 0.504579 0.3 0.302747C0.5 0.100916 0.75 0 1.05 0H4.31148C4.56405 0 4.7868 0.082372 4.97975 0.247116C5.1727 0.41186 5.29546 0.615387 5.34803 0.857697L5.9211 3.79996C5.96084 4.07304 5.95251 4.30766 5.8961 4.50381C5.83969 4.69997 5.7384 4.86471 5.59225 4.99804L3.28264 7.24611C3.65444 7.92688 4.07912 8.57079 4.55669 9.17785C5.03425 9.7849 5.55124 10.3647 6.10765 10.9173C6.65637 11.466 7.23971 11.9756 7.85766 12.4461C8.47561 12.9166 9.14293 13.3545 9.8596 13.7596L12.1038 11.4961C12.2602 11.3333 12.4497 11.2192 12.6721 11.1538C12.8945 11.0885 13.1256 11.0724 13.3654 11.1058L16.1422 11.6711C16.3948 11.7378 16.6009 11.8666 16.7605 12.0577C16.9201 12.2487 16.9999 12.4654 16.9999 12.7077V15.9499C16.9999 16.2499 16.899 16.4999 16.6972 16.6999C16.4953 16.8999 16.2431 16.9999 15.9403 16.9999Z" fill="#033425" />
  </svg>
)

const IconPin = () => (
  <svg width="15" height="19" viewBox="0 0 15.0961 19.0095" fill="none">
    <path d="M7.54804 9.36534C8.04676 9.36534 8.47272 9.18874 8.82592 8.83554C9.17912 8.48233 9.35572 8.05637 9.35572 7.55766C9.35572 7.05895 9.17912 6.63299 8.82592 6.27979C8.47272 5.92658 8.04676 5.74998 7.54804 5.74998C7.04933 5.74998 6.62337 5.92658 6.27017 6.27979C5.91697 6.63299 5.74037 7.05895 5.74037 7.55766C5.74037 8.05637 5.91697 8.48233 6.27017 8.83554C6.62337 9.18874 7.04933 9.36534 7.54804 9.36534ZM7.54804 19.0095C5.03139 16.8288 3.14422 14.7993 1.88653 12.9211C0.628844 11.0429 0 9.31855 0 7.74804C0 5.44037 0.74647 3.57211 2.23941 2.14326C3.73235 0.714421 5.50189 0 7.54804 0C9.59419 0 11.3637 0.714421 12.8567 2.14326C14.3496 3.57211 15.0961 5.44037 15.0961 7.74804C15.0961 9.31855 14.4672 11.0429 13.2096 12.9211C11.9519 14.7993 10.0647 16.8288 7.54804 19.0095Z" fill="#033425" />
  </svg>
)

const IconClock = () => (
  <svg width="19" height="19" viewBox="0 0 18.9999 18.9999" fill="none">
    <path d="M12.9731 14.0269L14.0269 12.9731L10.2499 9.19589V4.49996H8.74998V9.8038L12.9731 14.0269ZM9.49996 17.5C7.2833 17.5 5.3958 16.7208 3.83746 15.1625C2.27913 13.6041 1.49996 11.7166 1.49996 9.49996C1.49996 7.2833 2.27913 5.3958 3.83746 3.83746C5.3958 2.27913 7.2833 1.49996 9.49996 1.49996C11.7166 1.49996 13.6041 2.27913 15.1625 3.83746C16.7208 5.3958 17.5 7.2833 17.5 9.49996C17.5 11.7166 16.7208 13.6041 15.1625 15.1625C13.6041 16.7208 11.7166 17.5 9.49996 17.5ZM9.50164 18.9999C8.18771 18.9999 6.95267 18.7506 5.79653 18.2519C4.64039 17.7533 3.63471 17.0765 2.77948 16.2217C1.92426 15.3668 1.2472 14.3616 0.748323 13.206C0.249441 12.0503 0 10.8156 0 9.50164C0 8.18771 0.24933 6.95267 0.74799 5.79653C1.24665 4.64039 1.9234 3.63471 2.77825 2.77948C3.6331 1.92426 4.63833 1.24721 5.79396 0.748323C6.94958 0.249441 8.18436 0 9.49829 0C10.8122 0 12.0473 0.24933 13.2034 0.74799C14.3595 1.24665 15.3652 1.9234 16.2204 2.77825C17.0757 3.6331 17.7527 4.63833 18.2516 5.79396C18.7505 6.94958 18.9999 8.18436 18.9999 9.49829C18.9999 10.8122 18.7506 12.0473 18.2519 13.2034C17.7533 14.3595 17.0765 15.3652 16.2217 16.2204C15.3668 17.0757 14.3616 17.7527 13.206 18.2516C12.0503 18.7505 10.8156 18.9999 9.50164 18.9999Z" fill="#033425" />
  </svg>
)

/* ── Navigation ─────────────────────────────────────────── */
function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Benefits', to: '/benefits' },
    { label: 'Contact', to: '/contact', active: true },
  ]

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.9)',
        backdropFilter: 'blur(12px)',
        boxShadow: scrolled ? '0 1px 16px rgba(0,0,0,0.07)' : 'none',
      }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-[80px] flex items-center justify-between">
        <Link to="/" className="block h-[40px]">
          <img src={logoImg} alt="Kadleaf" className="h-full w-auto object-contain" />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ label, to, active }) => (
            active ? (
              <div key={label} className="relative">
                <div className="absolute inset-0 -mx-3 rounded-full" style={{ background: 'rgba(0,0,0,0.08)' }} />
                <Link
                  to={to}
                  className="relative text-[17px] font-medium px-3 py-1"
                  style={{ fontFamily: "'Roboto:Medium', Roboto, sans-serif", color: '#7d5700' }}
                >
                  {label}
                </Link>
              </div>
            ) : (
              <Link
                key={label}
                to={to}
                className="text-[17px] font-medium transition-colors duration-200 hover:text-[#033425]"
                style={{ fontFamily: "'Roboto:Medium', Roboto, sans-serif", color: 'rgba(65,73,68,0.75)' }}
              >
                {label}
              </Link>
            )
          ))}
        </nav>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <div className="w-6 h-0.5 bg-[#033425] mb-1.5 transition-all" style={{ transform: open ? 'rotate(45deg) translateY(8px)' : 'none' }} />
          <div className="w-6 h-0.5 bg-[#033425] mb-1.5" style={{ opacity: open ? 0 : 1 }} />
          <div className="w-6 h-0.5 bg-[#033425] transition-all" style={{ transform: open ? 'rotate(-45deg) translateY(-8px)' : 'none' }} />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {links.map(({ label, to, active }) => (
            <Link
              key={label}
              to={to}
              className="text-[17px] py-1"
              style={{ color: active ? '#7d5700' : '#033425', fontWeight: active ? 600 : 400 }}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}

/* ── Hero ───────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section className="pt-[80px] pb-0 bg-[#fefefe] flex flex-col items-center">
      <div className="w-full max-w-[1440px] mx-auto px-8 md:px-16 pt-20 pb-24 flex flex-col items-center text-center gap-4 fade-up">
        <p className="text-[16px] tracking-[3.2px] uppercase"
          style={{ fontFamily: "'Inter:Regular', Inter, sans-serif", color: '#7d5700' }}>
          NATURAL WELLNESS
        </p>
        <h1 className="text-[clamp(48px,5.5vw,75px)] font-medium leading-[1.15]"
          style={{ fontFamily: "'Roboto:Medium', Roboto, sans-serif", color: '#033425', letterSpacing: '-0.5px' }}>
          {"We're Always Here to "}
          <span style={{ color: '#7d5700' }}>Help</span>
        </h1>
        <p className="text-[16px] leading-[24px] max-w-[600px] mt-2"
          style={{ fontFamily: "'Inter:Regular', Inter, sans-serif", color: '#414944' }}>
          Whether you have a question about our products, your order, wholesale opportunities, or simply want to know more about Kadleaf, we'd love to hear from you. Our team is always ready to assist you with care and attention.
        </p>
      </div>
    </section>
  )
}

/* ── Contact Info Cards ─────────────────────────────────── */
type CardDef = {
  icon: React.ReactNode; label: string; primary: string; secondary: string
}

const CONTACT_CARDS: CardDef[] = [
  {
    icon: <IconEmail />,
    label: 'Email',
    primary: 'support@kadleaf.com',
    secondary: 'Press: media@kadleaf.com',
  },
  {
    icon: <IconPhone />,
    label: 'Phone',
    primary: '+91 98765 43210',
    secondary: 'Toll Free: 1800-KAD-LEAF',
  },
  {
    icon: <IconPin />,
    label: 'Address',
    primary: 'Munnar Valley Estate',
    secondary: 'Idukki, Kerala, India',
  },
  {
    icon: <IconClock />,
    label: 'Hours',
    primary: 'Mon — Sat: 9am — 6pm',
    secondary: 'Closed on Sundays',
  },
]

function InfoCards() {
  return (
    <section className="w-full bg-[#fefefe] px-8 md:px-16 pb-16">
      <div className="max-w-[1120px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 fade-up delay-100">
        {CONTACT_CARDS.map((card) => (
          <div
            key={card.label}
            className="flex flex-col items-center text-center p-8 rounded-[20px] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            style={{
              background: 'rgba(255,255,255,0.8)',
              backdropFilter: 'blur(6px)',
              border: '1px solid rgba(31,75,58,0.05)',
              boxShadow: '0 2px 16px rgba(0,0,0,0.04)',
            }}
          >
            {/* Icon circle */}
            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
              style={{ background: 'rgba(3,52,37,0.05)' }}>
              {card.icon}
            </div>
            {/* Label */}
            <p className="text-[12px] font-semibold tracking-[1.2px] uppercase mb-2"
              style={{ fontFamily: "'Inter:Semi Bold', Inter, sans-serif", color: '#7d5700' }}>
              {card.label}
            </p>
            {/* Primary */}
            <p className="text-[16px] leading-[24px]"
              style={{ fontFamily: "'Inter:Regular', Inter, sans-serif", color: '#1b1b1c' }}>
              {card.primary}
            </p>
            {/* Secondary */}
            <p className="text-[16px] leading-[24px] mt-1"
              style={{ fontFamily: "'Inter:Regular', Inter, sans-serif", color: '#414944' }}>
              {card.secondary}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ── Contact Form ───────────────────────────────────────── */
function ContactForm() {
  const [form, setForm] = useState({
    fullName: '', email: '', phone: '', subject: 'General Inquiry', message: '',
  })
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  const fieldStyle = {
    borderBottom: '1px solid rgba(192,200,194,0.3)',
    background: 'transparent',
    outline: 'none',
    width: '100%',
    padding: '8px 0 9px',
    fontSize: '16px',
    fontFamily: "'Inter:Regular', Inter, sans-serif",
    color: '#1b1b1c',
  }

  const labelStyle: React.CSSProperties = {
    fontFamily: "'Inter:Semi Bold', Inter, sans-serif",
    fontSize: '12px',
    letterSpacing: '1.2px',
    textTransform: 'uppercase',
    color: '#414944',
    marginBottom: '4px',
    display: 'block',
  }

  return (
    <section className="px-8 md:px-16 pb-20 bg-[#fefefe]">
      <div
        className="max-w-[1116px] mx-auto p-10 md:p-12 rounded-[20px] slide-left"
        style={{
          background: '#fcf9f8',
          border: '1px solid rgba(31,75,58,0.05)',
          boxShadow: '-2px 6px 7px rgba(0,0,0,0.03),-6px 24px 12.5px rgba(0,0,0,0.02),-14px 54px 16.5px rgba(0,0,0,0.01)',
        }}
      >
        <h2 className="text-[32px] font-medium mb-8"
          style={{ fontFamily: "'EB Garamond:Regular', Georgia, serif", color: '#033425' }}>
          Send a Message
        </h2>

        {sent ? (
          <div className="flex flex-col items-center gap-4 py-12 text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{ background: 'rgba(3,52,37,0.07)' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M5 13l4 4L19 7" stroke="#033425" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="text-[22px] font-medium" style={{ fontFamily: "'Roboto:Medium', Roboto, sans-serif", color: '#033425' }}>
              Message Sent!
            </p>
            <p className="text-[16px]" style={{ fontFamily: "'Inter:Regular', Inter, sans-serif", color: '#414944' }}>
              Thank you for reaching out. We'll get back to you within 1–2 business days.
            </p>
            <button
              onClick={() => { setSent(false); setForm({ fullName: '', email: '', phone: '', subject: 'General Inquiry', message: '' }) }}
              className="mt-2 text-[14px] underline"
              style={{ color: '#7d5700', fontFamily: "'Inter:Regular', Inter, sans-serif" }}
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Row 1: Full name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label style={labelStyle}>Full Name</label>
                <input
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  style={{ ...fieldStyle, color: form.fullName ? '#1b1b1c' : undefined }}
                  className="placeholder:text-[rgba(113,121,116,0.4)]"
                />
              </div>
              <div>
                <label style={labelStyle}>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  style={fieldStyle}
                  className="placeholder:text-[rgba(113,121,116,0.4)]"
                />
              </div>
            </div>

            {/* Row 2: Phone + Subject */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label style={labelStyle}>Phone</label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 00000 00000"
                  style={fieldStyle}
                  className="placeholder:text-[rgba(113,121,116,0.4)]"
                />
              </div>
              <div className="relative">
                <label style={labelStyle}>Subject</label>
                <div className="relative">
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    style={{ ...fieldStyle, appearance: 'none', paddingRight: '32px', cursor: 'pointer' }}
                  >
                    {['General Inquiry', 'Product Questions', 'Order Support', 'Wholesale', 'Press & Media', 'Other'].map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M7.2 9.6L12 14.4L16.8 9.6" stroke="#6B7280" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Message */}
            <div>
              <label style={labelStyle}>Your Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="How can we help you?"
                required
                rows={5}
                style={{ ...fieldStyle, resize: 'vertical', paddingTop: '8px' }}
                className="placeholder:text-[rgba(113,121,116,0.4)]"
              />
            </div>

            <button
              type="submit"
              className="self-start px-10 py-4 rounded-full text-[12px] font-semibold uppercase tracking-[1.2px] text-white transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
              style={{
                background: '#7d5700',
                fontFamily: "'Inter:Semi Bold', Inter, sans-serif",
                boxShadow: '0 10px 15px -3px rgba(125,87,0,0.1), 0 4px 6px -4px rgba(125,87,0,0.1)',
              }}
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

/* ── Newsletter ─────────────────────────────────────────── */
function NewsletterSection() {
  const [email, setEmail] = useState('')
  return (
    <section className="py-20 px-8 flex justify-center" style={{ background: '#033425' }}>
      <div className="w-full max-w-[672px] flex flex-col items-center gap-10 fade-up">
        <h2 className="text-[clamp(36px,5vw,65px)] font-medium leading-none text-center"
          style={{ fontFamily: "'Roboto:Medium', Roboto, sans-serif", color: '#ffdeaa' }}>
          Stay Close to Nature.
        </h2>
        <p className="text-[16px] leading-[24px] text-center"
          style={{ fontFamily: "'Inter:Regular', Inter, sans-serif", color: 'rgba(255,255,255,0.9)' }}>
          Subscribe for early access to limited harvests, exclusive offers, and wellness tips.
        </p>
        <div className="w-full flex gap-4 flex-wrap justify-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 min-w-[220px] max-w-[384px] px-6 py-[18px] rounded-full text-[16px] outline-none"
            style={{ background: 'white', color: '#414944', fontFamily: "'Inter:Regular', Inter, sans-serif" }}
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

/* ── Footer ─────────────────────────────────────────────── */
function Footer() {
  const cols = [
    { heading: 'Explore', items: ['Shop', 'About Us', 'Our Process', 'Blog'] },
    { heading: 'Support', items: ['Contact', 'FAQ'] },
    { heading: 'Connect', items: ['Instagram', 'Facebook', 'YouTube'] },
  ]
  return (
    <footer style={{ background: '#f6f3f2' }}>
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 py-16"
        style={{ borderBottom: '1px solid rgba(192,200,194,0.3)' }}>
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="max-w-[320px] flex flex-col gap-4">
            <Link to="/" className="block h-[40px]">
              <img src={logoImg} alt="Kadleaf" className="h-full w-auto object-contain" />
            </Link>
            <p className="text-[16px] leading-[24px]"
              style={{ fontFamily: "'Inter:Regular', Inter, sans-serif", color: '#414944' }}>
              Artisanal Minimalism in every drop. Sourced ethically from pristine wild forests.
            </p>
          </div>
          <div className="flex flex-wrap gap-12 flex-1">
            {cols.map((col) => (
              <div key={col.heading} className="flex flex-col gap-4 min-w-[100px]">
                <p className="text-[16px] font-medium"
                  style={{ fontFamily: "'Inter:Medium', Inter, sans-serif", color: '#033425' }}>
                  {col.heading}
                </p>
                {col.items.map((item) => (
                  <a key={item} href="#"
                    className="text-[16px] transition-colors duration-150 hover:text-[#033425]"
                    style={{ fontFamily: "'Inter:Regular', Inter, sans-serif", color: '#414944' }}>
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
            <a key={l} href="#" className="text-[14px] hover:text-[#033425] transition-colors"
              style={{ fontFamily: "'Inter:Regular', Inter, sans-serif", color: '#414944' }}>
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

/* ── Page ───────────────────────────────────────────────── */
export default function ContactPage() {
  useScrollReveal()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-[#fefefe]" style={{ fontFamily: "'Inter:Regular', Inter, sans-serif" }}>
      <Nav />
      <HeroSection />
      <InfoCards />
      <ContactForm />
      <NewsletterSection />
      <Footer />
    </div>
  )
}
