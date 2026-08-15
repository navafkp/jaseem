import { useState, useEffect } from 'react'
import { Link } from 'react-router'

/* ── Images ─────────────────────────────────────────────── */
import logoImg      from '@/imports/Benefits/d6ae71745f43c080f9c9208d4c8bc0f4b984154d.png'
import imgMint      from '@/imports/Benefits/5908f1f4cd0bd8405b19389dc617e55fa15c397e.png'
import imgClove     from '@/imports/Benefits/a4c0e0e8ef65d2843f5f53a369ccdf2961e0a5bc.png'
import imgCinnamon  from '@/imports/Benefits/5fc64c41f6f3e69eb116eeaeaf2b43a4c97f306c.png'
import imgRaw       from '@/imports/Benefits/c52ae250aa62d380bab88c85e53fe02f2746c7e6.png'
import imgGinger    from '@/imports/Benefits/3b8f416ac3f7d0cfed997c70bed6ceef28265898.png'
import imgChilli    from '@/imports/Benefits/86822d53d2532052065b1d82427c3da17abe89a7.png'
import imgBeekeeper from '@/imports/Benefits/bae1c8b59a2d0b162ac5b03b0d5eb5741b8cb06f.png'
import imgGingerRoot from '@/imports/Benefits/6651fdf6b2b035a206686cbb43e5abdef8e16080.png'
import imgChilliPepper from '@/imports/Benefits/111d7f8da45b21dd8c13710ad7d8f0ac28bfb8fd.png'

/* ── Scroll animation ────────────────────────────────────── */
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

/* ── Data ─────────────────────────────────────────────────── */
type Flavor = {
  id: string; label: string; name: string; color: string; rating: string;
  desc: string; benefits: string[]; img: string
}

const FLAVORS: Flavor[] = [
  {
    id: 'mint', label: 'MINT', name: 'Mint', color: '#94bf48', rating: '4.9',
    desc: 'Discover the sweet and delightful world of mint honey! This unique blend combines the refreshing essence of mint with the rich, golden sweetness of honey — perfect for drizzling over pancakes, stirring into tea, or enjoying straight from the sachet.',
    benefits: [
      'Refreshing Sensation — cool, clean flavour profile',
      'Aids Digestion — traditionally supports healthy digestion',
      'Soothes Throat — honey coats, mint refreshes',
      'Respiratory Comfort — cooling effect eases congestion',
      'Antioxidant Rich — protects cells from oxidative stress',
      'Natural Energy — quick carbohydrates, sustained fuel',
      'Freshens Breath — a great choice after meals',
    ],
    img: imgMint,
  },
  {
    id: 'clove', label: 'CLOVE', name: 'Clove', color: '#bf9a5c', rating: '4.9',
    desc: 'Explore the enchanting flavors of clove honey! This exquisite blend marries the warm, spicy notes of clove with the luscious sweetness of honey — ideal for enhancing desserts, sweetening beverages, or savoring by the sachet.',
    benefits: [
      'Antioxidant Power — honey and cloves protect cells',
      'Immune Support — antimicrobial and immune-boosting',
      'Oral Health Aid — soothes tooth and gum discomfort',
      'Digestive Aid — supports healthy digestion',
      'Throat Soother — warm, comforting sensation',
      'Respiratory Relief — eases seasonal discomfort',
      'Energy Boost — natural carbohydrates for vitality',
    ],
    img: imgClove,
  },
  {
    id: 'cinnamon', label: 'CINNAMON', name: 'Cinnamon', color: '#b7cc7a', rating: '4.7',
    desc: 'Discover the delightful taste of cinnamon honey! This unique combination brings together the warm, spicy essence of cinnamon with the rich sweetness of honey — perfect for elevating desserts or sweetening your favourite drinks.',
    benefits: [
      'Rich in Antioxidants — fights oxidative stress',
      'Supports Immune Health — natural antimicrobial properties',
      'Soothes Sore Throats — calms throat irritation',
      'Promotes Digestive Health — eases digestive discomfort',
      'Supports Heart Health — antioxidants aid cardiovascular health',
      'Helps Balance Blood Sugar — may improve insulin sensitivity',
      'Warming Comfort — perfect for cold-weather drinks',
    ],
    img: imgCinnamon,
  },
  {
    id: 'raw', label: 'RAW', name: 'Raw', color: '#be5baf', rating: '4.5',
    desc: 'Experience the pure goodness of raw honey! This natural sweetener is perfect for enhancing dishes, adding a touch of sweetness to beverages, or savoring by the sachet. Transform your meals with this wholesome delight!',
    benefits: [
      'Rich in Natural Antioxidants — phenolic compounds',
      'Natural Energy Source — fructose and glucose',
      'Supports Immune Health — natural antimicrobial compounds',
      'Soothes the Throat — coats and relieves coughs',
      'Supports Digestive Health — naturally occurring enzymes',
      'Contains Naturally Occurring Nutrients — vitamins & minerals',
      'A Natural Sweetener — wholesome alternative to refined sugar',
    ],
    img: imgRaw,
  },
  {
    id: 'ginger', label: 'GINGER', name: 'Ginger', color: '#c5a35c', rating: '4.7',
    desc: 'Discover the delightful taste of ginger honey! This natural sweetener enhances your dishes and adds a unique twist to your drinks. Enjoy it straight from the sachet or use it to elevate your meals!',
    benefits: [
      'Rich in Antioxidants — ginger and honey combined',
      'Supports Immune Health — bioactive compounds',
      'Soothes the Throat — warm and comforting',
      'Supports Digestive Health — relieves occasional nausea',
      'Supports Respiratory Comfort — seasonal relief',
      'Natural Energy Source — quick and lasting fuel',
      'Supports Overall Wellness — balanced healthy lifestyle',
    ],
    img: imgGinger,
  },
  {
    id: 'chilli', label: 'CHILLI', name: 'Chilli', color: '#be5b5b', rating: '4.7',
    desc: 'Savor the bold taste of chilli honey! This all-natural sweetener elevates your dishes while adding a fiery twist to your drinks. Use it directly from the sachet or incorporate it into your meals for an exciting flavour boost!',
    benefits: [
      'Natural Energy Source — natural carbohydrates',
      'Rich in Antioxidants — plant compounds for protection',
      'Supports Metabolism — capsaicin supports thermogenesis',
      'Supports Digestive Health — stimulates digestive juices',
      'Supports Healthy Circulation — capsaicin may aid blood flow',
      'Naturally Enhances Flavour — sweet heat on pizza and more',
      'Supports Overall Wellness — part of a balanced diet',
    ],
    img: imgChilli,
  },
]

const STATS = [
  { num: '6', label: 'Unique Flavours' },
  { num: '100%', label: 'Natural Ingredients' },
  { num: '1420+', label: 'Happy Customers' },
  { num: '0', label: 'Artificial Additives' },
]

const WHY_BENEFITS = [
  { icon: '🌿', title: 'Forest Harvested', body: 'Collected from pristine forests, far from pesticides and pollution.' },
  { icon: '🍯', title: '100% Raw Honey', body: "Pure, minimally processed, and unfiltered to retain nature's goodness." },
  { icon: '⚡', title: 'Natural Energy', body: 'A perfect, unrefined source of natural carbohydrates for sustained energy.' },
  { icon: '🛡️', title: 'Supports Immunity', body: 'Natural antibacterial properties support overall immune health.' },
  { icon: '🔬', title: 'Lab Certified', body: 'Every batch is rigorously tested for purity and authenticity.' },
  { icon: '🌱', title: 'Rich in Antioxidants', body: 'Naturally packed with goodness that helps protect your body.' },
]

/* ── Star rating ─────────────────────────────────────────── */
function Stars({ rating }: { rating: string }) {
  const val = parseFloat(rating)
  const full = Math.floor(val)
  const partial = val - full
  return (
    <div className="flex items-center gap-[3px]">
      {Array.from({ length: full }).map((_, i) => (
        <svg key={i} width="20" height="19" viewBox="0 0 24 23" fill="#D97706">
          <path d="M12 0l2.9 8.9H24l-7.5 5.5 2.9 8.9L12 18l-7.4 5.3 2.9-8.9L0 8.9h9.1z" />
        </svg>
      ))}
      {partial > 0 && (
        <svg width="20" height="19" viewBox="0 0 24 23">
          <defs><clipPath id="partial-b"><rect x="0" y="0" width={24 * partial} height="23" /></clipPath></defs>
          <path d="M12 0l2.9 8.9H24l-7.5 5.5 2.9 8.9L12 18l-7.4 5.3 2.9-8.9L0 8.9h9.1z" fill="#e5e7eb" />
          <path d="M12 0l2.9 8.9H24l-7.5 5.5 2.9 8.9L12 18l-7.4 5.3 2.9-8.9L0 8.9h9.1z" fill="#D97706" clipPath="url(#partial-b)" />
        </svg>
      )}
    </div>
  )
}

/* ── Navigation ──────────────────────────────────────────── */
function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.85)',
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
            { label: 'Benefits', to: '/benefits', active: true },
            { label: 'Contact', to: '/contact' },
          ].map(({ label, to, active }) => (
            to
              ? (
                <Link
                  key={label}
                  to={to}
                  className="text-[17px] font-medium transition-colors duration-200"
                  style={{
                    fontFamily: "'Roboto:Medium', Roboto, sans-serif",
                    color: active ? '#9a6506' : 'rgba(65,73,68,0.75)',
                  }}
                >
                  {label}
                </Link>
              )
              : (
                <a
                  key={label}
                  href="#contact"
                  className="text-[17px] font-medium transition-colors duration-200"
                  style={{ fontFamily: "'Roboto:Medium', Roboto, sans-serif", color: 'rgba(65,73,68,0.75)' }}
                >
                  {label}
                </a>
              )
          ))}
          <a
            href="#products"
            className="ml-4 px-5 py-2 rounded-full text-[15px] font-medium transition-all duration-200 hover:scale-[1.03]"
            style={{ background: '#9a6506', color: '#fefefe', fontFamily: "'Roboto:Medium', Roboto, sans-serif" }}
          >
            Explore Now
          </a>
        </nav>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <div className="w-6 h-0.5 bg-[#033425] mb-1.5 transition-all" style={{ transform: open ? 'rotate(45deg) translateY(8px)' : 'none' }} />
          <div className="w-6 h-0.5 bg-[#033425] mb-1.5" style={{ opacity: open ? 0 : 1 }} />
          <div className="w-6 h-0.5 bg-[#033425] transition-all" style={{ transform: open ? 'rotate(-45deg) translateY(-8px)' : 'none' }} />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          <Link to="/" className="text-[17px] text-[#033425] py-1" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/about" className="text-[17px] text-[#033425] py-1" onClick={() => setOpen(false)}>About</Link>
          <Link to="/benefits" className="text-[17px] font-semibold py-1" style={{ color: '#9a6506' }} onClick={() => setOpen(false)}>Benefits</Link>
          <Link to="/contact" className="text-[17px] text-[#033425] py-1" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  )
}

/* ── Hero ─────────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section
      id="top"
      className="relative pt-[80px] min-h-screen flex flex-col overflow-hidden"
      style={{
        background: 'linear-gradient(90deg, rgb(234,234,236) 0%, rgb(228,228,230) 27%, rgb(222,222,222) 52%, rgb(207,204,205) 77%, rgb(197,195,196) 94%)',
      }}
    >
      <div className="absolute left-0 top-0 bottom-0 w-[140px] hidden lg:block"
        style={{ background: 'linear-gradient(180deg, rgb(233,233,233) 0%, rgb(234,234,236) 15%, rgb(227,227,229) 52%, rgb(213,213,215) 94%)' }}
      />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 60% 50%, rgba(255,255,255,0.45) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 flex flex-col lg:flex-row items-center min-h-[calc(100vh-80px)] py-16 gap-12">
        {/* Left copy */}
        <div className="flex-1 flex flex-col gap-6 slide-left">
          <p className="text-[11px] tracking-[2.4px] uppercase font-semibold"
            style={{ fontFamily: "'Roboto:SemiBold', Roboto, sans-serif", color: '#414944' }}>
            ARTISANAL MINIMALISM
          </p>
          <div>
            <h1 className="text-[clamp(48px,5.5vw,72px)] leading-[1.0] font-medium"
              style={{ fontFamily: "'Roboto:Medium', Roboto, sans-serif", color: '#1a1a18', letterSpacing: '-1.28px' }}>
              Feel <span style={{ color: '#9a6506' }}>Good,</span>
            </h1>
            <h1 className="text-[clamp(48px,5.5vw,72px)] leading-[1.0] font-medium"
              style={{ fontFamily: "'Roboto:Medium', Roboto, sans-serif", color: '#1a1a18', letterSpacing: '-1.28px' }}>
              Naturally.
            </h1>
          </div>
          <p className="text-[17px] leading-[28px] max-w-[500px]"
            style={{ fontFamily: "'Roboto:Regular', Roboto, sans-serif", color: '#414944' }}>
            A great taste, pure natural goodness and healthy — naturally from hive to table. Discover the benefits of our six signature honey blends.
          </p>
          <a
            href="#products"
            className="self-start inline-flex items-center px-8 py-[17px] rounded-full text-[18px] font-medium text-white transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
            style={{ fontFamily: "'Roboto:Medium', Roboto, sans-serif", background: '#9a6506', boxShadow: '0 1px 1px rgba(0,0,0,0.05)' }}
          >
            Explore Products
          </a>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mt-4 max-w-[420px]">
            {STATS.map((s) => (
              <div key={s.label} className="bg-white/60 backdrop-blur-sm rounded-xl px-5 py-4 flex flex-col gap-1"
                style={{ border: '1px solid rgba(255,255,255,0.8)' }}>
                <span className="text-[28px] font-medium leading-none"
                  style={{ fontFamily: "'Roboto:Medium', Roboto, sans-serif", color: '#9a6506' }}>
                  {s.num}
                </span>
                <span className="text-[13px]"
                  style={{ fontFamily: "'Inter:Regular', Inter, sans-serif", color: '#414944' }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — ingredient images collage */}
        <div className="flex-1 flex justify-center items-center slide-right delay-200">
          <div className="relative w-[380px] md:w-[460px]">
            {/* Glow */}
            <div className="absolute inset-0 rounded-full scale-110 pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(154,101,6,0.13) 0%, transparent 70%)' }} />
            {/* Main sachet */}
            <img
              src={imgMint}
              alt="Kadleaf Mint Honey sachet"
              className="relative w-full object-contain"
              style={{ filter: 'drop-shadow(0 24px 48px rgba(0,0,0,0.18))', maxHeight: '560px' }}
            />
            {/* Floating ingredient bubble — ginger root */}
            <div className="absolute -right-8 top-1/4 w-[120px] h-[120px] rounded-full overflow-hidden bg-white/70 backdrop-blur-sm"
              style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.12)', border: '2px solid rgba(255,255,255,0.9)' }}>
              <img src={imgGingerRoot} alt="Ginger root" className="w-full h-full object-cover" />
            </div>
            {/* Floating ingredient bubble — chilli */}
            <div className="absolute -left-6 bottom-1/4 w-[100px] h-[100px] rounded-full overflow-hidden bg-white/70 backdrop-blur-sm"
              style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.12)', border: '2px solid rgba(255,255,255,0.9)' }}>
              <img src={imgChilliPepper} alt="Chilli pepper" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* Badge strip */}
      <div className="relative z-10 w-full py-6 px-8 md:px-16"
        style={{ background: 'rgba(255,255,255,0.3)', backdropFilter: 'blur(4px)' }}>
        <div className="max-w-[1440px] mx-auto flex flex-wrap gap-6 md:gap-12 justify-center md:justify-start items-center">
          {[
            { icon: '🍯', label: '100% RAW & UNFILTERED' },
            { icon: '🌿', label: 'ETHICALLY HARVESTED' },
            { icon: '🔬', label: 'LAB TESTED PURITY' },
            { icon: '🌍', label: 'CARBON NEUTRAL SHIPPING' },
          ].map((b) => (
            <div key={b.label} className="flex items-center gap-2.5">
              <span className="text-[17px]">{b.icon}</span>
              <span className="text-[13px] tracking-[0.7px] uppercase"
                style={{ fontFamily: "'Inter:Regular', Inter, sans-serif", color: '#414944' }}>
                {b.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Product Showcase ────────────────────────────────────── */
function ProductShowcase() {
  const [active, setActive] = useState(0)
  const f = FLAVORS[active]

  return (
    <section id="products" className="flavor-section relative overflow-hidden" style={{ background: f.color, transition: 'background-color 0.5s ease' }}>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{ width: '414px', height: '414px', background: 'radial-gradient(circle, rgba(246,246,246,0.5) 0%, transparent 70%)', filter: 'blur(50px)' }} />

      <div className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-16 py-20 flex flex-col lg:flex-row gap-12 items-start">
        {/* Benefits column */}
        <div className="flex-1 flex flex-col gap-4 min-w-0">
          <p className="text-[clamp(52px,8vw,100px)] font-medium leading-none opacity-40 select-none"
            style={{ fontFamily: "'Roboto:Medium', Roboto, sans-serif", color: '#e8e8e8', letterSpacing: '6px', textShadow: '0 0 20px rgba(125,87,0,0.2)' }}>
            {f.label}
          </p>
          <p className="text-[clamp(48px,5vw,80px)] font-normal -mt-4 select-none"
            style={{ fontFamily: 'Georgia, serif', color: '#033425', letterSpacing: '-1.28px', fontStyle: 'italic' }}>
            Honey
          </p>
          <p className="text-[11px] leading-[15px] font-medium uppercase mt-2"
            style={{ fontFamily: "'Roboto:Medium', Roboto, sans-serif", color: '#033425' }}>
            {f.name} Health Benefits
          </p>
          <p className="text-[14px] leading-[22px] mt-1 max-w-[340px]"
            style={{ fontFamily: "'Roboto:Regular', Roboto, sans-serif", color: '#033425' }}>
            {f.desc}
          </p>
          <ul className="flex flex-col gap-1 mt-2">
            {f.benefits.map((b, i) => (
              <li key={i} className="text-[13px] leading-[20px]"
                style={{ fontFamily: "'Roboto:Regular', Roboto, sans-serif", color: '#033425' }}>
                {i + 1}. {b}
              </li>
            ))}
          </ul>
        </div>

        {/* Sachet image */}
        <div className="flex-1 flex justify-center items-center py-4">
          <div className="relative" style={{ width: '280px', maxWidth: '80vw' }}>
            <img
              src={f.img}
              alt={`Kadleaf ${f.name} Honey sachet`}
              key={f.id}
              className="w-full object-contain"
              style={{
                maxHeight: '520px',
                filter: 'drop-shadow(0 32px 80px rgba(0,0,0,0.3))',
                animation: 'fadeSlideIn 0.4s ease',
              }}
            />
          </div>
        </div>

        {/* Rating + CTA */}
        <div className="flex-1 flex flex-col items-start lg:items-end gap-6 pt-4">
          <div className="flex flex-col gap-1">
            <p className="text-[40px] font-semibold leading-none"
              style={{ fontFamily: "'Roboto:SemiBold', Roboto, sans-serif", color: '#033425' }}>
              {f.rating}
            </p>
            <p className="text-[12px]" style={{ fontFamily: "'Inter:Medium', Inter, sans-serif", color: '#033425' }}>out of 5</p>
            <Stars rating={f.rating} />
            <p className="text-[13px] mt-1" style={{ fontFamily: "'Inter:Medium', Inter, sans-serif", color: 'rgba(3,52,37,0.75)' }}>
              Based on 1,420+ reviews
            </p>
          </div>
          <div className="flex flex-col gap-3 mt-4">
            <p className="text-[14px] leading-[24px] max-w-[200px]"
              style={{ fontFamily: "'Roboto:Regular', Roboto, sans-serif", color: 'rgba(3,52,37,0.75)' }}>
              Online Order made <strong style={{ fontFamily: "'Roboto:Medium', Roboto, sans-serif" }}>easy, fast &amp; reliable</strong>
            </p>
            <button className="px-8 py-4 rounded-full text-[16px] font-medium transition-all duration-200 hover:scale-[1.03]"
              style={{ background: 'rgba(255,255,255,0.25)', color: '#033425', fontFamily: "'Roboto:Medium', Roboto, sans-serif", border: '1px solid rgba(3,52,37,0.2)', backdropFilter: 'blur(8px)' }}>
              Chat with us now!
            </button>
          </div>
        </div>
      </div>

      {/* Flavour selector */}
      <div className="relative z-10 flex items-end justify-center gap-4 md:gap-8 pb-12 px-8 flex-wrap">
        {FLAVORS.map((fl, i) => (
          <button
            key={fl.id}
            onClick={() => setActive(i)}
            className="relative flex flex-col items-center gap-2 transition-all duration-300"
            style={{ transform: i === active ? 'scale(1.12)' : 'scale(0.85)', opacity: i === active ? 1 : 0.6 }}
          >
            <div className="w-[64px] h-[80px] md:w-[80px] md:h-[100px] overflow-hidden flex items-center justify-center"
              style={{ border: i === active ? '2px solid rgba(3,52,37,0.4)' : '2px solid transparent', borderRadius: '6px', background: 'rgba(255,255,255,0.15)', transition: 'border-color 0.3s ease' }}>
              <img src={fl.img} alt={fl.name} className="w-full h-full object-contain" />
            </div>
            <span className="text-[10px] font-medium uppercase"
              style={{ fontFamily: "'Roboto:Medium', Roboto, sans-serif", color: '#033425' }}>
              {fl.name}
            </span>
            {i === active && (
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full" style={{ background: '#033425' }} />
            )}
          </button>
        ))}
      </div>

      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}

/* ── Why Kadleaf ─────────────────────────────────────────── */
function WhySection() {
  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        <div className="text-center mb-16 fade-up">
          <h2 className="text-[clamp(40px,5vw,65px)] font-medium leading-[1.05]"
            style={{ fontFamily: "'Roboto:Medium', Roboto, sans-serif", color: '#033425' }}>
            Why Choose <span style={{ color: '#7d5700' }}>Kadleaf</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_BENEFITS.map((item, i) => (
            <div key={item.title}
              className={`fade-up delay-${Math.min((i % 3 + 1) * 100, 300)} p-8 rounded-2xl flex flex-col gap-3 transition-all duration-300 hover:-translate-y-1`}
              style={{ background: i % 2 === 0 ? '#f6f3f2' : 'white', border: '1px solid rgba(192,200,194,0.3)', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
              <span className="text-3xl">{item.icon}</span>
              <h3 className="text-[18px] font-medium"
                style={{ fontFamily: "'Roboto:Medium', Roboto, sans-serif", color: '#033425' }}>
                {item.title}
              </h3>
              <p className="text-[15px] leading-[24px]"
                style={{ fontFamily: "'Inter:Regular', Inter, sans-serif", color: '#414944' }}>
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Story: Where it all began ───────────────────────────── */
function StorySection() {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden" style={{ background: '#0a0a0a' }}>
      <div className="absolute inset-0">
        <img
          src={imgBeekeeper}
          alt="Beekeeper in forest"
          className="w-full h-full object-cover opacity-55"
          style={{ objectPosition: 'center 30%' }}
        />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(90deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 50%, rgba(120,104,104,0) 100%)' }} />
      </div>
      <div className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-16 py-24">
        <div className="max-w-[560px] flex flex-col gap-5 slide-left">
          <p className="text-[12px] tracking-[2.4px] font-semibold uppercase"
            style={{ fontFamily: "'Inter:Semi Bold', Inter, sans-serif", color: '#7d5700' }}>
            OUR STORY
          </p>
          <h2 className="text-[clamp(40px,5vw,65px)] font-medium leading-[1.05] text-white"
            style={{ fontFamily: "'Roboto:Medium', Roboto, sans-serif" }}>
            Where it all began
          </h2>
          <p className="text-[16px] leading-[24px] pt-2"
            style={{ fontFamily: "'Roboto:Regular', Roboto, sans-serif", color: '#c4c4c4' }}>
            Kadleaf was born from a simple belief: the best honey doesn't need changing, only preserving. Every harvest reflects our respect for the bees, the forests they call home, and the people who welcome Kadleaf into their everyday lives.
          </p>
          <ul className="flex flex-col gap-4 py-4">
            {['Sustainably Harvested', '100% Natural', 'No Added Sugar', 'Crafted in Small Batches'].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zm-1 15l-4-4 1.4-1.4 2.6 2.6 5.6-5.6L16 8l-7 7z" fill="#7D5700" />
                </svg>
                <span className="text-[16px]"
                  style={{ fontFamily: "'Roboto:Regular', Roboto, sans-serif", color: '#9a9a9a' }}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <Link
            to="/about"
            className="self-start px-8 py-[17px] rounded-full text-[16px] font-medium transition-all duration-200 hover:scale-[1.03]"
            style={{ background: 'rgba(75,75,75,0.5)', color: '#f0eded', fontFamily: "'Roboto:Medium', Roboto, sans-serif", border: '1px solid #f6f3f2' }}>
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ── Newsletter ──────────────────────────────────────────── */
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

/* ── Footer ──────────────────────────────────────────────── */
function Footer() {
  const cols = [
    { heading: 'Explore', items: ['Shop', 'About Us', 'Our Process', 'Blog'] },
    { heading: 'Support', items: ['Contact', 'FAQ'] },
    { heading: 'Connect', items: ['Instagram', 'Facebook', 'YouTube'] },
  ]
  return (
    <footer id="contact" style={{ background: '#f6f3f2' }}>
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
            <a key={l} href="#"
              className="text-[14px] hover:text-[#033425] transition-colors"
              style={{ fontFamily: "'Inter:Regular', Inter, sans-serif", color: '#414944' }}>
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

/* ── Page ─────────────────────────────────────────────────── */
export default function BenefitsPage() {
  useScrollReveal()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-[#fefefe]" style={{ fontFamily: "'Roboto:Regular', Roboto, sans-serif" }}>
      <Nav />
      <HeroSection />
      <ProductShowcase />
      <WhySection />
      <StorySection />
      <NewsletterSection />
      <Footer />
    </div>
  )
}
