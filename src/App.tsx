import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import logoImg from '@/imports/About/d6ae71745f43c080f9c9208d4c8bc0f4b984154d.png'
import heroVideo from '@/imports/hf_20260723_091911_e578e587-1f66-4d48-9f2f-b8b881c1d275.mp4'
import mintPack from '@/imports/Home/5908f1f4cd0bd8405b19389dc617e55fa15c397e.png'
import clovePack from '@/imports/Home/a4c0e0e8ef65d2843f5f53a369ccdf2961e0a5bc.png'
import cinnamonPack from '@/imports/Home/5fc64c41f6f3e69eb116eeaeaf2b43a4c97f306c.png'
import rawPack from '@/imports/Home/c52ae250aa62d380bab88c85e53fe02f2746c7e6.png'
import gingerPack from '@/imports/Home/3b8f416ac3f7d0cfed997c70bed6ceef28265898.png'
import chilliPack from '@/imports/Home/86822d53d2532052065b1d82427c3da17abe89a7.png'
import mintLeaf from '@/imports/Home/9be6ebd4636c65adfcee33f6f5d1976b8ea8ff97.png'
import cloveAccent from '@/imports/Home/1caca5e4a2cb8b75325db1bde668e293f147948e.png'
import cinnamonAccent from '@/imports/Home/b648fffbd92981389813f436b333f68fd87eb4b0.png'
import rawAccent from '@/imports/Home/fdb253c1fb59c78857a3556b4379d0b1c47e6bcc.png'
import gingerAccent from '@/imports/Home/2f782f5a37f016743d3f3835c2c7e5048a06086f.png'
import chilliAccent from '@/imports/Home/111d7f8da45b21dd8c13710ad7d8f0ac28bfb8fd.png'

/* ─── Scroll animation hook ─── */
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.fade-up, .fade-in, .slide-left, .slide-right').forEach((el) =>
      observer.observe(el)
    )
    return () => observer.disconnect()
  }, [])
}

/* ─── Types & data ─── */
type Flavor = {
  id: string; label: string; name: string; color: string;
  rating: string; desc: string; benefits: string[]; img: string; accent: string
}

const FLAVORS: Flavor[] = [
  {
    id: 'mint', label: 'MINT', name: 'Mint', color: '#94bf48', rating: '4.9',
    desc: 'Discover the sweet and delightful world of mint honey! This unique blend combines the refreshing essence of mint with the rich, golden sweetness of honey, perfect for drizzling over pancakes, stirring into tea, or enjoying straight from the jar.',
    benefits: ['Refreshing Sensation — cool, clean flavour profile', 'Aids Digestion — traditionally supports healthy digestion', 'Soothes Throat — honey coats, mint refreshes', 'Respiratory Comfort — cooling effect eases congestion', 'Antioxidant Rich — protects cells from oxidative stress', 'Natural Energy — quick carbohydrates, sustained fuel', 'Freshens Breath — a great choice after meals'],
    img: mintPack, accent: mintLeaf,
  },
  {
    id: 'clove', label: 'CLOVE', name: 'Clove', color: '#bf9a5c', rating: '4.9',
    desc: 'Explore the enchanting flavors of clove honey! This exquisite blend marries the warm, spicy notes of clove with the luscious sweetness of honey, making it ideal for enhancing desserts, sweetening beverages, or savoring by the spoonful.',
    benefits: ['Antioxidant Power — honey and cloves protect cells', 'Immune Support — antimicrobial and immune-boosting', 'Oral Health Aid — soothes tooth and gum discomfort', 'Digestive Aid — supports healthy digestion', 'Throat Soother — warm, comforting sensation', 'Respiratory Relief — eases seasonal discomfort', 'Energy Boost — natural carbohydrates for vitality'],
    img: clovePack, accent: cloveAccent,
  },
  {
    id: 'cinnamon', label: 'CINNAMON', name: 'Cinnamon', color: '#b7cc7a', rating: '4.7',
    desc: 'Discover the delightful taste of cinnamon honey! This unique combination brings together the warm, spicy essence of cinnamon with the rich sweetness of honey, perfect for elevating desserts or sweetening your favourite drinks.',
    benefits: ['Rich in Antioxidants — fights oxidative stress', 'Supports Immune Health — natural antimicrobial properties', 'Soothes Sore Throats — calms throat irritation', 'Promotes Digestive Health — eases digestive discomfort', 'Supports Heart Health — antioxidants aid cardiovascular health', 'Helps Balance Blood Sugar — may improve insulin sensitivity', 'Warming Comfort — perfect for cold-weather drinks'],
    img: cinnamonPack, accent: cinnamonAccent,
  },
  {
    id: 'raw', label: 'RAW', name: 'Raw', color: '#be5baf', rating: '4.5',
    desc: 'Experience the pure goodness of raw honey! This natural sweetener is perfect for enhancing your dishes, adding a touch of sweetness to beverages, or savoring by the spoonful. Transform your meals with this wholesome delight!',
    benefits: ['Rich in Natural Antioxidants — phenolic compounds', 'Natural Energy Source — fructose and glucose', 'Supports Immune Health — natural antimicrobial compounds', 'Soothes the Throat — coats and relieves coughs', 'Supports Digestive Health — naturally occurring enzymes', 'Contains Naturally Occurring Nutrients — vitamins & minerals', 'A Natural Sweetener — wholesome alternative to refined sugar'],
    img: rawPack, accent: rawAccent,
  },
  {
    id: 'ginger', label: 'GINGER', name: 'Ginger', color: '#c5a35c', rating: '4.7',
    desc: 'Discover the delightful taste of ginger honey! This natural sweetener not only enhances your dishes but also adds a unique twist to your drinks. Enjoy it straight from the jar or use it to elevate your meals!',
    benefits: ['Rich in Antioxidants — ginger and honey combined', 'Supports Immune Health — bioactive compounds', 'Soothes the Throat — warm and comforting', 'Supports Digestive Health — relieves occasional nausea', 'Supports Respiratory Comfort — seasonal relief', 'Natural Energy Source — quick and lasting fuel', 'Supports Overall Wellness — balanced healthy lifestyle'],
    img: gingerPack, accent: gingerAccent,
  },
  {
    id: 'chilli', label: 'CHILLI', name: 'Chilli', color: '#be5b5b', rating: '4.7',
    desc: 'Savor the bold taste of chili honey! This all-natural sweetener elevates your dishes while adding a fiery twist to your drinks. Use it directly from the jar or incorporate it into your meals for an exciting flavor boost!',
    benefits: ['Natural Energy Source — natural carbohydrates', 'Rich in Antioxidants — plant compounds for protection', 'Supports Metabolism — capsaicin supports thermogenesis', 'Supports Digestive Health — stimulates digestive juices', 'Supports Healthy Circulation — capsaicin may aid blood flow', 'Naturally Enhances Flavour — sweet heat on pizza and more', 'Supports Overall Wellness — part of a balanced diet'],
    img: chilliPack, accent: chilliAccent,
  },
]

const PROCESS_STEPS = [
  { title: 'Ethical Honey Harvesting', body: 'Our honey is carefully harvested using ethical beekeeping practices that protect the bees and preserve their natural habitat. Every drop is collected with care to ensure sustainability and the highest quality.', img: 'https://images.unsplash.com/photo-1602867693070-f9db4f42463a?w=280&h=280&fit=crop', side: 'left' },
  { title: 'Natural Filtration', body: 'The harvested honey is gently filtered to remove natural impurities such as wax particles while retaining beneficial enzymes, pollen, antioxidants, and nutrients. No excessive processing or refining is involved.', img: 'https://images.unsplash.com/photo-1773957949154-a7d1ef35ae76?w=280&h=280&fit=crop', side: 'right' },
  { title: 'Infused with Natural Ingredients', body: 'Premium herbs and spices including mint, ginger, cinnamon, clove, and chilli are naturally infused with pure honey to create unique flavors without artificial colors, flavors, or preservatives.', img: 'https://images.unsplash.com/photo-1618130070080-91f4d55a2383?w=280&h=280&fit=crop', side: 'left' },
  { title: 'Packed for Freshness', body: 'The finished honey is hygienically packed into convenient single-serve sachets using food grade packaging that locks in freshness, purity, and natural taste, making it easy to enjoy anytime, anywhere.', img: 'https://images.unsplash.com/photo-1473973266408-ed4e27abdd47?w=280&h=280&fit=crop', side: 'right' },
]

const WHY_FEATURES = [
  { icon: '🌿', title: 'Forest Harvested', body: 'Collected from pristine forests, far from pesticides and pollution.' },
  { icon: '🍯', title: '100% Raw Honey', body: "Pure, minimally processed, and unfiltered to retain nature's goodness." },
  { icon: '⚡', title: 'Natural Energy', body: 'A perfect, unrefined source of natural carbohydrates for sustained energy.' },
  { icon: '🛡️', title: 'Supports Immunity', body: 'Natural antibacterial properties support overall immune health.' },
  { icon: '🔬', title: 'Lab Certified', body: 'Every batch is rigorously tested for purity and authenticity.' },
  { icon: '🌱', title: 'Rich in Antioxidants', body: 'Naturally packed with goodness that helps protect your body.' },
]

const FAQS = [
  { q: 'Is Kadleaf Honey Raw?', a: "Yes, Kadleaf honey is 100% raw and unfiltered. We minimally process our honey to preserve all natural enzymes, pollen, antioxidants, and beneficial compounds typically destroyed by excessive heat treatment." },
  { q: 'Does Honey Crystallize?', a: "Yes, crystallization is a completely natural process and a sign of pure, raw honey. It doesn't indicate spoilage. Simply warm the jar gently in warm water to return it to its liquid state." },
  { q: 'Where do you source your honey?', a: 'We source our honey from pristine wild forests, far from pesticides and pollution. Our beekeepers practise ethical, sustainable harvesting that protects both the bee colonies and their natural habitat.' },
]

/* ─── Star rating ─── */
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
          <defs><clipPath id="partial"><rect x="0" y="0" width={24 * partial} height="23" /></clipPath></defs>
          <path d="M12 0l2.9 8.9H24l-7.5 5.5 2.9 8.9L12 18l-7.4 5.3 2.9-8.9L0 8.9h9.1z" fill="#e5e7eb" />
          <path d="M12 0l2.9 8.9H24l-7.5 5.5 2.9 8.9L12 18l-7.4 5.3 2.9-8.9L0 8.9h9.1z" fill="#D97706" clipPath="url(#partial)" />
        </svg>
      )}
    </div>
  )
}

/* ─── Navigation ─── */
function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header
      className="absolute top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-[80px] flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="block h-[40px]">
          <img src={logoImg} alt="Kadleaf" className="h-full w-auto object-contain" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {([
            { label: 'Home', active: true, href: '#home', to: '' },
            { label: 'About', active: false, href: '', to: '/about' },
            { label: 'Benefits', active: false, href: '', to: '/benefits' },
            { label: 'Contact', active: false, href: '', to: '/contact' },
          ] as { label: string; active: boolean; href: string; to: string }[]).map(({ label, active, to, href }) => {
            const base = {
              fontFamily: "'Roboto:Medium', Roboto, sans-serif",
              fontVariationSettings: '"wdth" 100' as const,
              fontSize: '17px',
              fontWeight: 500,
              lineHeight: '32px',
              color: active ? '#9a6506' : 'rgba(65,73,68,0.75)',
              display: 'inline-flex' as const,
              alignItems: 'center' as const,
              height: '38px',
              padding: '0 14px',
              borderRadius: '15px',
              whiteSpace: 'nowrap' as const,
              transition: 'color 0.2s ease, background 0.2s ease',
              textDecoration: 'none',
              ...(active ? {
                background: 'rgba(255,255,255,0.14)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.25), 0 1px 3px rgba(0,0,0,0.06)',
                border: '1px solid rgba(255,255,255,0.22)',
              } : {}),
            }

            return to ? (
              <Link
                key={label}
                to={to}
                style={base}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#9a6506'
                  e.currentTarget.style.background = 'rgba(154,101,6,0.07)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(65,73,68,0.75)'
                  e.currentTarget.style.background = 'transparent'
                }}
              >
                {label}
              </Link>
            ) : (
              <a
                key={label}
                href={href || '#'}
                style={base}
              >
                {label}
              </a>
            )
          })}
          <a
            href="#shop"
            className="ml-5 px-5 py-[7px] rounded-full text-[15px] font-medium transition-all duration-200 hover:scale-[1.04] hover:brightness-110 active:scale-[0.97]"
            style={{ background: '#9a6506', color: '#fefefe', fontFamily: "'Roboto:Medium', Roboto, sans-serif", boxShadow: '0 1px 4px rgba(154,101,6,0.25)' }}
          >
            Shop Now
          </a>
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
          <a href="#home" className="text-[17px] text-[#033425] py-1" onClick={() => setOpen(false)}>Home</a>
          <Link to="/about" className="text-[17px] text-[#033425] py-1" onClick={() => setOpen(false)}>About</Link>
          <Link to="/benefits" className="text-[17px] text-[#033425] py-1" onClick={() => setOpen(false)}>Benefits</Link>
          <Link to="/contact" className="text-[17px] text-[#033425] py-1" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  )
}

/* ─── Hero ─── */
function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex flex-col overflow-hidden"
      style={{ background: 'rgb(232,231,232)' }}
    >
      <div className="order-2 lg:order-none relative w-full mx-auto overflow-hidden"
        style={{ height: 'clamp(460px, 64vw, 680px)' }}>
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: 'center center', transform: 'scale(1.026) translateX(2%)' }}
        />
        {/* Fades only the blank tabletop margin now visible below the packets — doesn't touch product pixels */}
        <div className="absolute bottom-0 left-0 right-0 h-[36px] pointer-events-none"
          style={{ background: 'linear-gradient(180deg, transparent 0%, rgb(232,231,232) 100%)' }}
        />
      </div>

      {/* Text: stacks in normal flow on mobile (own height, no clipping); becomes an overlay anchored to the nav's width at desktop */}
      <div className="order-1 lg:order-none relative lg:absolute lg:inset-0 z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 py-10 lg:py-0 flex items-center pointer-events-none">
        <div className="pointer-events-auto lg:translate-y-[1%] lg:translate-x-[5%]">
          <div className="flex flex-col gap-4 max-w-[600px] slide-left">
            <p className="text-[10px] tracking-[2.4px] uppercase font-semibold"
              style={{ fontFamily: "'Roboto:SemiBold', Roboto, sans-serif", color: '#414944' }}>
              ARTISANAL MINIMALISM
            </p>
            <div>
              <h1 className="text-[clamp(38px,4.5vw,56px)] leading-[1.0] font-medium"
                style={{ fontFamily: "'Roboto:Medium', Roboto, sans-serif", color: '#1a1a18', letterSpacing: '-1.28px' }}>
                Pure <span style={{ color: '#9a6506' }}>Honey</span>
              </h1>
              <h1 className="text-[clamp(38px,4.5vw,56px)] leading-[1.0] font-medium"
                style={{ fontFamily: "'Roboto:Medium', Roboto, sans-serif", color: '#1a1a18', letterSpacing: '-1.28px' }}>
                Just as Nature<br />made it.
              </h1>
            </div>
            <p className="text-[15px] leading-[24px] max-w-[540px]"
              style={{ fontFamily: "'Roboto:Regular', Roboto, sans-serif", color: '#414944' }}>
              Crafted with minimal processing to protect the true essence of forest honey
            </p>
            <div className="flex gap-4 flex-wrap">
              <a href="#shop"
                className="inline-flex items-center px-6 py-[12px] rounded-full text-[14px] font-medium text-white transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
                style={{ fontFamily: "'Roboto:Medium', Roboto, sans-serif", background: '#9a6506', boxShadow: '0 1px 1px rgba(0,0,0,0.05)' }}>
                Shop Collection
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="order-3 lg:order-none relative z-10 w-full py-6 px-8 md:px-16">
        <div className="max-w-[1440px] mx-auto flex flex-wrap gap-6 md:gap-8 justify-center md:justify-between items-center">
          {[
            { path: 'M7.6 21L5.7 17.8L2.1 17L2.45 13.3L0 10.5L2.45 7.7L2.1 4L5.7 3.2L7.6 0L11 1.45L14.4 0L16.3 3.2L19.9 4L19.55 7.7L22 10.5L19.55 13.3L19.9 17L16.3 17.8L14.4 21L11 19.55L7.6 21V21M8.45 18.45L11 17.35L13.6 18.45L15 16.05L17.75 15.4L17.5 12.6L19.35 10.5L17.5 8.35L17.75 5.55L15 4.95L13.55 2.55L11 3.65L8.4 2.55L7 4.95L4.25 5.55L4.5 8.35L2.65 10.5L4.5 12.6L4.25 15.45L7 16.05L8.45 18.45V18.45M9.95 14.05L15.6 8.4L14.2 6.95L9.95 11.2L7.8 9.1L6.4 10.5L9.95 14.05V14.05', viewBox: '0 0 22 21', w: 22, h: 21, label: '100% RAW & UNFILTERED' },
            { path: 'M2.4 14.5923C1.65 13.8423 1.0625 12.9756 0.6375 11.9923C0.2125 11.009 0 9.99231 0 8.94231C0 7.89231 0.2 6.85481 0.6 5.82981C1 4.80481 1.65 3.84231 2.55 2.94231C3.13333 2.35897 3.85417 1.85897 4.7125 1.44231C5.57083 1.02564 6.5875 0.696474 7.7625 0.454808C8.9375 0.213141 10.2792 0.0673077 11.7875 0.0173077C13.2958 -0.0326923 14.9833 0.025641 16.85 0.192308C16.9833 1.95897 17.025 3.58397 16.975 5.06731C16.925 6.55064 16.7875 7.88814 16.5625 9.07981C16.3375 10.2715 16.0208 11.3131 15.6125 12.2048C15.2042 13.0965 14.7 13.8423 14.1 14.4423C13.2167 15.3256 12.2792 15.9715 11.2875 16.3798C10.2958 16.7881 9.28333 16.9923 8.25 16.9923C7.16667 16.9923 6.10833 16.7798 5.075 16.3548C4.04167 15.9298 3.15 15.3423 2.4 14.5923V14.5923M5.2 14.1923C5.68333 14.4756 6.17917 14.6798 6.6875 14.8048C7.19583 14.9298 7.71667 14.9923 8.25 14.9923C9.01667 14.9923 9.775 14.8381 10.525 14.5298C11.275 14.2215 11.9917 13.7256 12.675 13.0423C12.975 12.7423 13.2792 12.3215 13.5875 11.7798C13.8958 11.2381 14.1625 10.5298 14.3875 9.65481C14.6125 8.77981 14.7833 7.72147 14.9 6.47981C15.0167 5.23814 15.0333 3.75897 14.95 2.04231C14.1333 2.00897 13.2125 1.99647 12.1875 2.00481C11.1625 2.01314 10.1417 2.09231 9.125 2.24231C8.10833 2.39231 7.14167 2.63397 6.225 2.96731C5.30833 3.30064 4.55833 3.75897 3.975 4.34231C3.225 5.09231 2.70833 5.83397 2.425 6.56731C2.14167 7.30064 2 8.00897 2 8.69231C2 9.67564 2.1875 10.5381 2.5625 11.2798C2.9375 12.0215 3.26667 12.5423 3.55 12.8423C4.25 11.509 5.175 10.2298 6.325 9.00481C7.475 7.77981 8.81667 6.77564 10.35 5.99231C9.15 7.04231 8.10417 8.22981 7.2125 9.55481C6.32083 10.8798 5.65 12.4256 5.2 14.1923V14.1923Z', viewBox: '0 0 17 17', w: 17, h: 17, label: 'ETHICALLY HARVESTED' },
            { path: 'M2.0285 18C1.1785 18 0.574338 17.6208 0.216005 16.8625C-0.142329 16.1042 -0.0548287 15.4 0.478505 14.75L6.0285 8V2H5.0285C4.74517 2 4.50767 1.90417 4.316 1.7125C4.12434 1.52083 4.0285 1.28333 4.0285 1C4.0285 0.716667 4.12434 0.479167 4.316 0.2875C4.50767 0.0958333 4.74517 0 5.0285 0H13.0285C13.3118 0 13.5493 0.0958333 13.741 0.2875C13.9327 0.479167 14.0285 0.716667 14.0285 1C14.0285 1.28333 13.9327 1.52083 13.741 1.7125C13.5493 1.90417 13.3118 2 13.0285 2H12.0285V8L17.5785 14.75C18.1118 15.4 18.1993 16.1042 17.841 16.8625C17.4827 17.6208 16.8785 18 16.0285 18H2.0285V18M2.0285 16H16.0285L10.0285 8.7V2H8.0285V8.7L2.0285 16V16Z', viewBox: '0 0 18 18', w: 18, h: 18, label: 'LAB TESTED PURITY' },
            { path: 'M5 16C4.16667 16 3.45833 15.7083 2.875 15.125C2.29167 14.5417 2 13.8333 2 13H0V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H16V4H19L22 8V13H20C20 13.8333 19.7083 14.5417 19.125 15.125C18.5417 15.7083 17.8333 16 17 16C16.1667 16 15.4583 15.7083 14.875 15.125C14.2917 14.5417 14 13.8333 14 13H8C8 13.8333 7.70833 14.5417 7.125 15.125C6.54167 15.7083 5.83333 16 5 16V16M5 14C5.28333 14 5.52083 13.9042 5.7125 13.7125C5.90417 13.5208 6 13.2833 6 13C6 12.7167 5.90417 12.4792 5.7125 12.2875C5.52083 12.0958 5.28333 12 5 12C4.71667 12 4.47917 12.0958 4.2875 12.2875C4.09583 12.4792 4 12.7167 4 13C4 13.2833 4.09583 13.5208 4.2875 13.7125C4.47917 13.9042 4.71667 14 5 14V14M2 11H2.8C3.08333 10.7 3.40833 10.4583 3.775 10.275C4.14167 10.0917 4.55 10 5 10C5.45 10 5.85833 10.0917 6.225 10.275C6.59167 10.4583 6.91667 10.7 7.2 11H14V2H2V2V2V11V11M17 14C17.2833 14 17.5208 13.9042 17.7125 13.7125C17.9042 13.5208 18 13.2833 18 13C18 12.7167 17.9042 12.4792 17.7125 12.2875C17.5208 12.0958 17.2833 12 17 12C16.7167 12 16.4792 12.0958 16.2875 12.2875C16.0958 12.4792 16 12.7167 16 13C16 13.2833 16.0958 13.5208 16.2875 13.7125C16.4792 13.9042 16.7167 14 17 14V14M16 9H20.25L18 6H16V9V9M8 6.5V6.5V6.5V6.5V6.5V6.5V6.5V6.5V6.5V6.5V6.5V6.5V6.5Z', viewBox: '0 0 22 16', w: 22, h: 16, label: 'CARBON NEUTRAL SHIPPING' },
          ].map((b) => (
            <div key={b.label} className="flex items-center gap-2.5">
              <svg width={b.w} height={b.h} viewBox={b.viewBox} fill="none" className="shrink-0">
                <path d={b.path} fill="#7D5700" />
              </svg>
              <span className="text-[13px] tracking-[0.7px] uppercase font-normal"
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

/* ─── Product Showcase ─── */
function ProductShowcase() {
  const [active, setActive] = useState(0)
  const f = FLAVORS[active]

  return (
    <section id="shop" className="flavor-section relative overflow-hidden" style={{ background: f.color, transition: 'background-color 0.5s ease' }}>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{ width: '414px', height: '414px', background: 'radial-gradient(circle, rgba(246,246,246,0.5) 0%, transparent 70%)', filter: 'blur(50px)' }} />

      {/* Fades in from the page's gray so this section bleeds out of the hero above it */}
      <div className="absolute top-0 left-0 right-0 h-[160px] pointer-events-none"
        style={{ background: 'linear-gradient(180deg, rgb(232,231,232) 0%, transparent 100%)' }} />

      <div className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-16 py-20 flex flex-col lg:flex-row gap-12 items-start">
        <div className="flex-1 flex flex-col gap-4 min-w-0">
          <div className="flex flex-col">
            <p className="text-[clamp(52px,8vw,100px)] select-none"
              style={{ fontFamily: "'Roboto:Medium', Roboto, sans-serif", fontWeight: 500, color: 'rgba(255,255,255,0.85)', letterSpacing: 'clamp(5px,1vw,10px)', lineHeight: 'clamp(39px,6vw,75px)', verticalAlign: 'middle', textShadow: '0 0 20px rgba(125,87,0,0.15)' }}>
              {f.label}
            </p>
            <p className="text-[clamp(46px,7.2vw,90px)] select-none"
              style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 400, color: '#033425', letterSpacing: '-1.28px', lineHeight: 'clamp(39px,6vw,75px)', verticalAlign: 'middle', paddingLeft: 'clamp(30px, 5vw, 60px)' }}>
              Honey
            </p>
          </div>
          <p className="text-[11px] leading-[15px] font-medium uppercase mt-2"
            style={{ fontFamily: "'Roboto:Medium', Roboto, sans-serif", color: '#033425' }}>
            {f.name} Health Benefits
          </p>
          <p className="text-[14px] leading-[22px] mt-1 max-w-[340px]"
            style={{ fontFamily: "'Roboto:Regular', Roboto, sans-serif", color: '#033425' }}>
            {f.desc}
          </p>
          <ul className="flex flex-col gap-2.5 mt-2">
            {f.benefits.map((b, i) => {
              const [title, rest] = b.split(' — ')
              return (
                <li key={i} className="text-[13px] leading-[20px]"
                  style={{ fontFamily: "'Roboto:Regular', Roboto, sans-serif", color: '#033425' }}>
                  <span className="font-medium">{i + 1}. {title}</span>
                  {rest && <><br /><span className="pl-[18px] opacity-80">&gt; {rest}</span></>}
                </li>
              )
            })}
          </ul>
        </div>

        <div className="flex-1 flex justify-center items-center py-4">
          <div className="relative flex items-center justify-center" style={{ width: '360px', maxWidth: '90vw', height: '520px' }}>
            <img src={f.accent} alt="" key={`${f.id}-accent-1`} aria-hidden="true"
              className="absolute object-contain pointer-events-none select-none"
              style={{ width: '34%', top: '2%', right: '4%', filter: 'drop-shadow(0 8px 12px rgba(0,0,0,0.15))', animation: 'fadeSlideIn 0.4s ease' }}
            />
            <img src={f.accent} alt="" key={`${f.id}-accent-2`} aria-hidden="true"
              className="absolute object-contain pointer-events-none select-none"
              style={{ width: '26%', bottom: '4%', left: '2%', transform: 'rotate(-18deg) scaleX(-1)', filter: 'drop-shadow(0 8px 12px rgba(0,0,0,0.15))', animation: 'fadeSlideIn 0.4s ease' }}
            />
            <img src={f.img} alt={`${f.name} honey packet`} key={f.id}
              className="relative object-contain"
              style={{ height: '440px', maxWidth: '78%', filter: 'drop-shadow(0 32px 40px rgba(0,0,0,0.3))', animation: 'fadeSlideIn 0.4s ease' }}
            />
          </div>
        </div>

        <div className="flex-1 flex flex-col items-start lg:items-end gap-6 pt-4">
          <div className="flex items-start gap-4">
            <div className="flex flex-col gap-0.5">
              <p className="text-[32px] font-semibold leading-none"
                style={{ fontFamily: "'Roboto:SemiBold', Roboto, sans-serif", color: '#033425' }}>
                {f.rating}
              </p>
              <p className="text-[12px]" style={{ fontFamily: "'Inter:Medium', Inter, sans-serif", color: '#033425' }}>out of 5</p>
            </div>
            <div className="w-px self-stretch" style={{ background: 'rgba(3,52,37,0.2)' }} />
            <div className="flex flex-col gap-1.5">
              <Stars rating={f.rating} />
              <p className="text-[13px]" style={{ fontFamily: "'Inter:Medium', Inter, sans-serif", color: 'rgba(3,52,37,0.75)' }}>
                Based on 1,420+ reviews
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 mt-4">
            <p className="text-[14px] leading-[24px]"
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

      <div className="relative z-10 flex items-center justify-center gap-6 md:gap-12 pb-10 px-8 flex-wrap">
        {FLAVORS.map((fl, i) => (
          <button key={fl.id} onClick={() => setActive(i)} className="relative flex flex-col items-center gap-2 transition-all duration-200"
            style={{ transform: i === active ? 'scale(1.12)' : 'scale(0.9)', opacity: i === active ? 1 : 0.65 }}>
            <div className="w-[64px] h-[80px] rounded-lg overflow-hidden flex items-center justify-center p-1.5"
              style={{ boxShadow: i === active ? '0 8px 24px rgba(0,0,0,0.3)' : '0 2px 8px rgba(0,0,0,0.12)', background: 'rgba(255,255,255,0.5)', border: i === active ? '2px solid rgba(255,255,255,0.8)' : '2px solid transparent' }}>
              <img src={fl.img} alt={fl.name} className="w-full h-full object-contain" />
            </div>
            <span className="text-[10px] font-medium uppercase"
              style={{ fontFamily: "'Roboto:Medium', Roboto, sans-serif", color: '#033425' }}>
              {fl.name}
            </span>
            {i === active && <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-10 h-0.5 rounded-full" style={{ background: '#033425' }} />}
          </button>
        ))}
      </div>

      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}

/* ─── Process: From Hive to Home ─── */
function ProcessSection() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="max-w-[1280px] mx-auto px-8 md:px-16">
        <div className="text-center mb-16 fade-up">
          <h2 className="text-[clamp(40px,5vw,65px)] font-medium leading-[1.05]"
            style={{ fontFamily: "'Roboto:Medium', Roboto, sans-serif", color: '#033425' }}>
            From <span style={{ color: '#7d5700' }}>Hive</span> to <span style={{ color: '#7d5700' }}>Home</span>
          </h2>
          <p className="mt-4 text-[16px]"
            style={{ fontFamily: "'Roboto:Regular', Roboto, sans-serif", color: '#1b1b1c' }}>
            Our journey from the forest to your table.
          </p>
        </div>
        <div className="flex flex-col gap-20">
          {PROCESS_STEPS.map((step, i) => (
            <div key={i}
              className={`flex flex-col ${step.side === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} gap-10 items-center ${step.side === 'left' ? 'slide-left' : 'slide-right'}`}
              style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="shrink-0">
                <div className="w-[220px] h-[220px] rounded-full overflow-hidden"
                  style={{ boxShadow: '0 12px 40px rgba(0,0,0,0.12)' }}>
                  <img src={step.img} alt={step.title} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className={`flex-1 ${step.side === 'left' ? 'md:pl-8' : 'md:pr-8'}`}>
                <h3 className="text-[22px] font-medium leading-normal mb-4"
                  style={{ fontFamily: "'Roboto:Medium', Roboto, sans-serif", color: '#000' }}>
                  {step.title}
                </h3>
                <p className="text-[18px] leading-[30px]"
                  style={{ fontFamily: "'Inter:Regular', Inter, sans-serif", color: 'rgba(0,0,0,0.75)' }}>
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Why Choose Kadleaf ─── */
function WhySection() {
  return (
    <section id="benefits" className="bg-white py-24 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        <div className="text-center mb-16 fade-up">
          <h2 className="text-[clamp(40px,5vw,65px)] font-medium leading-[1.05]"
            style={{ fontFamily: "'Roboto:Medium', Roboto, sans-serif", color: '#033425' }}>
            Why Choose <span style={{ color: '#7d5700' }}>Kadleaf</span>
          </h2>
        </div>
        <div className="relative flex flex-col lg:flex-row gap-12 items-start">
          <div className="flex-1 flex flex-col gap-10">
            {WHY_FEATURES.slice(0, 3).map((f, i) => (
              <div key={f.title} className={`fade-up delay-${(i + 1) * 100}`}>
                <div className="flex gap-4 items-start">
                  <span className="text-2xl mt-0.5">{f.icon}</span>
                  <div>
                    <h4 className="text-[15px] font-normal mb-1"
                      style={{ fontFamily: "'Roboto:Regular', Roboto, sans-serif", color: '#033425' }}>{f.title}</h4>
                    <p className="text-[16px] leading-[24px]"
                      style={{ fontFamily: "'Inter:Regular', Inter, sans-serif", color: '#414944' }}>{f.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex-1 flex justify-center items-center fade-up delay-200 py-4">
            <div className="relative w-[340px] max-w-full"
              style={{ boxShadow: '68px 0px 19px rgba(0,0,0,0.01),43px 0px 17px rgba(0,0,0,0.04),24px 0px 15px rgba(0,0,0,0.14)' }}>
              <img src="https://images.unsplash.com/photo-1761416351532-ede97c29fab8?w=680&h=520&fit=crop"
                alt="Kadleaf honey selection" className="w-full object-cover rounded-xl" style={{ height: '380px' }} />
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-10">
            {WHY_FEATURES.slice(3).map((f, i) => (
              <div key={f.title} className={`fade-up delay-${(i + 1) * 100}`}>
                <div className="flex gap-4 items-start">
                  <span className="text-2xl mt-0.5">{f.icon}</span>
                  <div>
                    <h4 className="text-[15px] font-normal mb-1"
                      style={{ fontFamily: "'Roboto:Regular', Roboto, sans-serif", color: '#033425' }}>{f.title}</h4>
                    <p className="text-[16px] leading-[24px]"
                      style={{ fontFamily: "'Inter:Regular', Inter, sans-serif", color: '#414944' }}>{f.body}</p>
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

/* ─── Our Story ─── */
function StorySection() {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden" style={{ background: '#0a0a0a' }}>
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1473973266408-ed4e27abdd47?w=1600&h=700&fit=crop"
          alt="Beekeeper in forest" className="w-full h-full object-cover opacity-50"
          style={{ objectPosition: 'center 30%' }} />
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

/* ─── WhatsApp CTA ─── */
function WhatsAppSection() {
  return (
    <section className="bg-[#fefefe] py-24 flex flex-col items-center text-center px-8 fade-up">
      <h2 className="text-[clamp(40px,5vw,65px)] font-medium leading-[1.1]"
        style={{ fontFamily: "'Roboto:Medium', Roboto, sans-serif", color: '#1b1b1c' }}>
        Order on <span style={{ color: '#068b62' }}>WhatsApp</span>
      </h2>
      <p className="mt-6 text-[16px] leading-[24px]"
        style={{ fontFamily: "'Roboto:Regular', Roboto, sans-serif", color: '#1b1b1c' }}>
        Online Order made <strong style={{ fontFamily: "'Roboto:Medium', Roboto, sans-serif" }}>easy, fast &amp; reliable</strong>
      </p>
      <a href="https://wa.me/" target="_blank" rel="noopener noreferrer"
        className="mt-8 px-8 py-[17px] rounded-full text-[16px] font-medium transition-all duration-200 hover:scale-[1.03]"
        style={{ background: '#033425', color: '#f0eded', fontFamily: "'Roboto:Medium', Roboto, sans-serif", border: '1px solid #f6f3f2' }}>
        Chat with us now!
      </a>
    </section>
  )
}

/* ─── FAQ ─── */
function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)
  return (
    <section className="py-16 flex flex-col items-center px-8">
      <div className="w-full max-w-[640px] flex flex-col gap-8">
        <div className="text-center fade-up">
          <h2 className="text-[32px] font-medium leading-[40px]"
            style={{ fontFamily: "'Roboto:Medium', Roboto, sans-serif", color: '#033425' }}>
            Common Questions
          </h2>
        </div>
        <div className="flex flex-col gap-4 fade-up delay-100">
          {FAQS.map((faq, i) => (
            <div key={i} className="rounded-[12px] overflow-hidden" style={{ background: '#f0eded' }}>
              <button className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => setOpenIdx(openIdx === i ? null : i)}>
                <span className="text-[16px] font-medium"
                  style={{ fontFamily: "'Inter:Medium', Inter, sans-serif", color: '#033425' }}>
                  {faq.q}
                </span>
                <svg width="12" height="14" viewBox="0 0 12 13.4" fill="none"
                  className="shrink-0 ml-4 transition-transform duration-300"
                  style={{ transform: openIdx === i ? 'rotate(180deg)' : 'none' }}>
                  <path d="M6 13.4L0 0h12L6 13.4z" fill="#033425" />
                </svg>
              </button>
              <div className="faq-answer px-6"
                style={{ maxHeight: openIdx === i ? '300px' : '0', paddingBottom: openIdx === i ? '24px' : '0' }}>
                <p className="text-[15px] leading-[24px]"
                  style={{ fontFamily: "'Inter:Regular', Inter, sans-serif", color: 'rgba(65,73,68,0.9)' }}>
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Newsletter ─── */
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
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 min-w-[220px] max-w-[384px] px-6 py-[18px] rounded-full text-[16px] outline-none"
            style={{ background: 'white', color: '#414944', fontFamily: "'Inter:Regular', Inter, sans-serif", border: 'none' }} />
          <button className="px-8 py-[16px] rounded-full text-[16px] font-medium text-white transition-all duration-200 hover:scale-[1.03]"
            style={{ background: '#9a6506', fontFamily: "'Inter:Medium', Inter, sans-serif" }}>
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

/* ─── Home Page ─── */
export default function App() {
  useScrollReveal()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative" style={{ fontFamily: "'Roboto:Regular', Roboto, sans-serif", background: 'rgb(232,231,232)' }}>
      <Nav />
      <HeroSection />
      <ProductShowcase />
      <ProcessSection />
      <WhySection />
      <StorySection />
      <WhatsAppSection />
      <FAQSection />
      <NewsletterSection />
      <Footer />
    </div>
  )
}
