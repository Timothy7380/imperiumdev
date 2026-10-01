// All portfolio content lives here — edit this file to update the site.

export const PROFILE = {
  name: 'Timothy Olaomoju',
  brand: 'Imperiumdev',
  roles: ['Product Designer', 'Full Stack Developer', 'Brand & Visual Designer'],
  location: 'Lagos, Nigeria',
  email: 'elitegraphicshub@gmail.com',
  whatsapp: 'https://wa.me/2349065563764',
  cv: 'cv.pdf',
  avatar: 'images/avatar.webp',
  portrait: 'images/timothy.webp',
  aboutPhoto: 'images/tim_backshot.webp',
}

export const SOCIALS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/timothy-olaomoju-00b10037a' },
  { label: 'Behance', href: 'https://www.behance.net/etechgraphix' },
  { label: 'Instagram', href: 'https://www.instagram.com/_impe_rium' },
  { label: 'Pinterest', href: 'https://pin.it/4QK27kECt' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@timothycodes_' },
]

export const NAV_LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Get in Touch', href: '#contact' },
]

export const TICKER = [
  'Product Design',
  'UI / UX',
  'Web Development',
  'App Development',
  'Brand Identity',
  'Visual Design',
]

export const CLIENTS = [
  { name: 'FoodBank4U', font: "'Inter', sans-serif", weight: 700 },
  { name: 'Caring2Share', font: 'Georgia, serif', weight: 700 },
  { name: 'GoSLNG', font: 'system-ui, sans-serif', weight: 800 },
  { name: 'SWI Texas', font: "'Source Serif 4', serif", weight: 600 },
  { name: 'Aku', font: "'Cedarville Cursive', cursive", weight: 700 },
  { name: 'Citypass', font: "'Inter', sans-serif", weight: 600 },
  { name: 'Bank 78', font: 'system-ui, sans-serif', weight: 800 },
  { name: 'Devfest Lagos', font: "'Inter', sans-serif", weight: 700 },
  { name: 'WellaHealth', font: 'Georgia, serif', weight: 500 },
  { name: 'Gobelins', font: "'Source Serif 4', serif", weight: 600 },
  { name: 'REEPOWER', font: 'system-ui, sans-serif', weight: 800 },
  { name: 'Globivance', font: "'Inter', sans-serif", weight: 600 },
  { name: 'Relentless Frames', font: "'Source Serif 4', serif", weight: 600 },
  { name: 'COTEF', font: 'system-ui, sans-serif', weight: 800 },
  { name: 'Sabeis Homes', font: 'Georgia, serif', weight: 700 },
  { name: 'Debit', font: 'system-ui, sans-serif', weight: 800 },
  { name: 'OMP Moments', font: "'Cedarville Cursive', cursive", weight: 700 },
  { name: 'WACPEOPLE', font: "'Inter', sans-serif", weight: 700 },
]

export const STATS = [
  { value: '10+', label: 'Apps shipped' },
  { value: '15+', label: 'Web projects' },
  { value: '4+', label: 'Years experience' },
  { value: '12+', label: 'Figma projects' },
]

export const SERVICES = [
  {
    id: 'uiux',
    num: '01',
    title: 'UI / UX Design',
    tagline: 'Crafting experiences that feel inevitable.',
    body: 'From discovery and wireframes to polished Figma prototypes — interfaces built around real user needs that guide, delight, and convert.',
    tags: ['UX Flow', 'UI Kit', 'Prototype', 'Design Tokens'],
  },
  {
    id: 'web',
    num: '02',
    title: 'Web Development',
    tagline: 'Full-stack builds that perform at scale.',
    body: 'Pixel-perfect frontends backed by robust architecture — from concept to deployment, designed for real users with real outcomes.',
    tags: ['Responsive UI', 'Fast Pages', 'CMS Ready', 'Conversion Flow'],
  },
  {
    id: 'apps',
    num: '03',
    title: 'App Development',
    tagline: 'Mobile apps shipped to the stores.',
    body: 'Cross-platform products across logistics, banking, health, events and commerce — live on the App Store and Google Play.',
    tags: ['iOS', 'Android', 'React Native', 'Store Ready'],
  },
  {
    id: 'brand',
    num: '04',
    title: 'Brand & Visual Design',
    tagline: 'Visual identities that leave a mark.',
    body: 'Identity systems, logo design, campaigns, typography, packaging and motion — visual design that tells a story people remember.',
    tags: ['Logo Marks', 'Color Worlds', 'Campaigns', 'Layouts'],
  },
]

export const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'uiux', label: 'UI / UX' },
  { id: 'web', label: 'Web' },
  { id: 'apps', label: 'Apps' },
  { id: 'brand', label: 'Brand' },
  { id: 'github', label: 'GitHub' },
]

const img = (f) => `images/projects/${f}.webp`
const ios = (href) => ({ label: 'App Store', href })
const play = (href) => ({ label: 'Play Store', href })
const gh = (repo) => ({ label: 'View Code', href: `https://github.com/Timothy7380/${repo}` })
const live = (href) => ({ label: 'Live Site', href })

export const PROJECTS = [
  // ---------- UI / UX ----------
  {
    cat: 'uiux',
    title: 'Gobelins Paris Website Redesign',
    year: 2024,
    image: img('gobelins'),
    tags: ['Website Redesign', 'Education'],
    desc: 'A refined redesign concept focused on clearer course discovery, stronger editorial hierarchy, and a more immersive creative-school experience.',
    links: [{ label: 'View on Figma', href: 'https://www.figma.com/proto/B9gYbhv5gxdx8lQgZ7uPbP?node-id=1:10597' }],
  },
  {
    cat: 'uiux',
    title: 'REEPOWER E-Commerce',
    year: 2023,
    image: img('reepower'),
    tags: ['E-Commerce', 'Product UX'],
    desc: 'Improved product browsing, conversion-focused product pages, and a cleaner purchase flow.',
    links: [{ label: 'View on Figma', href: 'https://www.figma.com/file/g2XjTKp43u0ay6OGaXLPa4?node-id=376:10913&locale=en&type=design' }],
  },
  {
    cat: 'uiux',
    title: 'Suits Website Experience',
    year: 2023,
    image: img('suits'),
    tags: ['Fashion', 'Luxury Brand'],
    desc: 'A polished fashion concept for suits and formalwear, balancing premium product presentation with simple browsing and enquiry flows.',
    links: [{ label: 'View on Figma', href: 'https://www.figma.com/file/bBgx5ooPw0XaRUnvecYMpD?locale=en&type=design' }],
  },

  // ---------- Web ----------
  {
    cat: 'web',
    title: 'FoodBank4U',
    year: 2024,
    image: img('foodbank'),
    tags: ['Food Ordering', 'Web App'],
    desc: 'An online food ordering platform that lets customers order from home and get meals delivered quickly, with smooth browsing and checkout.',
    links: [{ label: 'Visit Site', href: 'https://foodbank4u.com/' }],
  },
  {
    cat: 'web',
    title: 'Caring2Share',
    year: 2024,
    image: img('caring'),
    tags: ['Charity', 'UI/UX'],
    desc: 'A charitable giving platform designed to make social impact accessible and personal for everyday donors.',
    links: [{ label: 'Visit Site', href: 'https://caring2share.org/' }],
  },
  {
    cat: 'web',
    title: 'SchoolOS',
    year: 2026,
    image: img('globivance'),
    tags: ['School ERP', 'Web App'],
    desc: 'A complete school management ERP — enrollment, fee billing, attendance, academic results, parent communication, and multi-campus operations.',
    links: [{ label: 'Visit Site', href: 'https://schoolos.globivance.com/' }],
  },
  {
    cat: 'web',
    title: 'InventoryBoss',
    year: 2026,
    image: img('inventoryboss'),
    tags: ['Inventory', 'Dashboard'],
    desc: 'An inventory management platform that helps businesses track stock, manage product records, and run operations from one dashboard.',
    links: [{ label: 'Visit Site', href: 'https://inventoryboss.globivance.com/' }],
  },
  {
    cat: 'web',
    title: 'ABOM Integrated Services',
    year: 2026,
    image: img('abom'),
    tags: ['Business', 'Responsive'],
    desc: 'A polished business website presenting the company, its services, and contact pathways in a clear, responsive experience.',
    links: [{ label: 'Visit Site', href: 'https://timothy7380.github.io/abom-integrated-services/' }],
  },
  {
    cat: 'web',
    title: 'Madey Global Travel',
    year: 2026,
    image: img('madey'),
    tags: ['Travel', 'UI/UX'],
    desc: 'A travel agency website designed to inspire wanderlust and make trip planning easy.',
    links: [{ label: 'Visit Site', href: 'https://www.madeyglobal.com/' }],
  },
  {
    cat: 'web',
    title: 'GoSLNG',
    year: 2023,
    image: img('goslng'),
    tags: ['Energy', 'Full Stack'],
    desc: 'A platform for the LNG industry, built with performance and complex data presentation in mind.',
    links: [{ label: 'Visit Site', href: 'https://www.goslng.com/' }],
  },
  {
    cat: 'web',
    title: 'SWI Texas',
    year: 2023,
    image: img('texas'),
    tags: ['Corporate', 'React'],
    desc: 'Corporate website and digital presence for a Texas-based business — clean, professional, and conversion-focused.',
    links: [{ label: 'Visit Site', href: 'https://www.switexas.com/' }],
  },

  // ---------- GitHub (open repos with live demos) ----------
  {
    cat: 'github',
    title: 'WACPEOPLE',
    year: 2026,
    image: img('gh-wac'),
    tags: ['Redesign Concept', 'Creative Network'],
    desc: 'A homepage redesign for WACPEOPLE, a network of reliable creatives — a fanned card gallery of member work, a Scout → Test → Position → Deploy story, and paths for creatives and hirers.',
    links: [live('https://timothy7380.github.io/wacpeople-site/'), gh('wacpeople-site')],
  },
  {
    cat: 'github',
    title: 'OMP Moments',
    year: 2026,
    image: img('gh-omp'),
    tags: ['Photography', 'Interactive 3D'],
    desc: 'A portfolio for a top Lagos event photographer — an intro film, a drag-to-rotate 3D sphere of 250+ photos, and a filterable archive of weddings, portraits and celebrations.',
    links: [live('https://timothy7380.github.io/omp-moments/'), gh('omp-moments')],
  },
  {
    cat: 'github',
    title: 'Debit Streetwear',
    year: 2026,
    image: img('gh-debit'),
    tags: ['E-Commerce', 'Fashion'],
    desc: 'A storefront for Debit, a luxury streetwear label with a modern Nigerian identity — collections, product filters, a shopping bag, and checkout straight to WhatsApp.',
    links: [live('https://timothy7380.github.io/debitbyrecent/'), gh('debitbyrecent')],
  },
  {
    cat: 'github',
    title: '329 Grooming Lounge',
    year: 2026,
    image: img('gh-grooming'),
    tags: ['HTML / CSS / JS', 'Salon & Lounge'],
    desc: 'A fully branded site for a unisex salon and lounge in Ikorodu — services, pricing, real photography and video, with scroll reveals and a marquee.',
    links: [live('https://329groominglounge.com/'), gh('329-grooming-lounge')],
  },
  {
    cat: 'github',
    title: 'COTEF Foundation',
    year: 2026,
    image: img('gh-cotef'),
    tags: ['NGO', 'GitHub Pages'],
    desc: 'The official site for the Complete Teenagers Empowerment Foundation, a Lagos NGO running COTEF Academy, school outreaches and the ESOHE support programme.',
    links: [live('https://timothy7380.github.io/cotef-website/'), gh('cotef-website')],
  },
  {
    cat: 'github',
    title: 'Relentless Frames',
    year: 2026,
    image: img('gh-relentlessframes'),
    tags: ['Photography', 'Git-based CMS'],
    desc: 'A St. Louis photography studio portfolio with a filmstrip carousel, hash routing, and a private /admin page so the owner can swap photos without touching code.',
    links: [live('https://relentlessframes.com/'), gh('relentless-frames')],
  },
  {
    cat: 'github',
    title: 'Sabeis Homes',
    year: 2026,
    image: img('gh-sabeis'),
    tags: ['Hospitality', 'Booking'],
    desc: 'A boutique hotel website for a fourteen-suite short-let house in Igbogbo, Ikorodu — suites, amenities, and direct booking that saves guests 10%.',
    links: [live('https://timothy7380.github.io/sabeis-homes/'), gh('sabeis-homes')],
  },
  {
    cat: 'github',
    title: 'Go Global Pathway',
    year: 2026,
    image: img('gh-goglobal'),
    tags: ['Education', 'Lead Gen'],
    desc: 'A study-abroad consultancy site helping Nigerian students secure admission, scholarships and visas for the UK, Ireland and Canada.',
    links: [live('https://timothy7380.github.io/goglobal-pathway/'), gh('goglobal-pathway')],
  },
  {
    cat: 'github',
    title: 'SMPIS Dashboard',
    year: 2026,
    image: img('gh-smpi'),
    tags: ['Supabase', 'Chart.js'],
    desc: 'A Social Media Performance Intelligence System for GeoInfotech — tracks followers, engagement, leads and SEO by week, month and quarter across brands.',
    links: [live('https://timothy7380.github.io/SMPI/'), gh('SMPI')],
  },
  {
    cat: 'github',
    title: 'Speaker Portfolio',
    year: 2026,
    image: img('gh-relentlesslove'),
    tags: ['Template', 'Dark / Light Theme'],
    desc: 'A personal portfolio for an engineer, speaker and writer — talks carousel with keyboard controls, podcast, book and writing sections, and a saved theme toggle.',
    links: [live('https://timothy7380.github.io/relentlesslovepursues/'), gh('relentlesslovepursues')],
  },

  // ---------- Apps ----------
  {
    cat: 'apps',
    title: 'Faith Companion',
    year: 2024,
    image: img('faith'),
    tags: ['React Native', 'iOS & Android'],
    desc: 'A spiritual companion app offering daily devotionals, prayer reminders, and faith-based community features.',
    links: [
      ios('https://apps.apple.com/za/app/faith-companion/id6479662568'),
      play('https://play.google.com/store/apps/details?id=com.faith.companion.app'),
    ],
  },
  {
    cat: 'apps',
    title: 'Citypass',
    year: 2024,
    image: img('cityPass'),
    tags: ['Transit', 'FinTech'],
    desc: 'A city-wide access and transit pass system enabling seamless movement through urban infrastructure.',
    links: [
      ios('https://apps.apple.com/ng/app/citypas/id6741069304'),
      play('https://play.google.com/store/apps/details?id=com.aku.citypass.app'),
    ],
  },
  {
    cat: 'apps',
    title: 'Citypass Merchant',
    year: 2024,
    image: img('cityPassMerchant'),
    tags: ['Merchant', 'FinTech'],
    desc: 'The merchant portal for Citypass, letting businesses accept pass payments and manage transactions.',
    links: [
      ios('https://apps.apple.com/ng/app/citypass-merchant/id6741530722'),
      play('https://play.google.com/store/apps/details?id=com.aku.citypass_merchant.app'),
    ],
  },
  {
    cat: 'apps',
    title: 'Devfest Lagos 2024',
    year: 2024,
    image: img('devFest'),
    tags: ['Event', 'iOS'],
    desc: 'The official conference app for Devfest Lagos 2024 — schedules, speakers, sessions, and real-time event updates.',
    links: [ios('https://apps.apple.com/ng/app/devfest-lagos-2024/id6737826901')],
  },
  {
    cat: 'apps',
    title: 'WellaPartner',
    year: 2024,
    image: img('wellaPartner'),
    tags: ['Health', 'Android'],
    desc: 'A health reporting and partner management tool for WellaHealth, enabling partners to track and manage health data.',
    links: [play('https://play.google.com/store/apps/details?id=com.wellahealth.wellareport')],
  },
  {
    cat: 'apps',
    title: 'Simple Heirs Life',
    year: 2024,
    image: img('insurance'),
    tags: ['Insurance', 'Android'],
    desc: 'A life insurance and estate planning app that turns complex financial planning into an accessible mobile experience.',
    links: [play('https://play.google.com/store/search?q=simple+heirs+life+app&c=apps')],
  },
  {
    cat: 'apps',
    title: 'Aku',
    year: 2023,
    image: img('aku'),
    tags: ['Logistics', 'Real-time'],
    desc: 'A customer-facing delivery and logistics app with real-time tracking and seamless order management.',
    links: [
      ios('https://apps.apple.com/us/app/aku/id1609211914'),
      play('https://play.google.com/store/apps/details?id=com.aku.customer.app&hl=en'),
    ],
  },
  {
    cat: 'apps',
    title: 'Aku Agents',
    year: 2023,
    image: img('akuAgent'),
    tags: ['Logistics', 'Agent Tools'],
    desc: 'The agent-side companion to Aku, built for delivery agents to manage routes, earnings, and deliveries on the go.',
    links: [
      ios('https://apps.apple.com/us/app/aku-agents/id6444590183'),
      play('https://play.google.com/store/apps/details?id=com.aku.agent.app&hl=en'),
    ],
  },
  {
    cat: 'apps',
    title: 'Bank 78',
    year: 2023,
    image: img('bank78'),
    tags: ['FinTech', 'Banking'],
    desc: 'A modern digital banking app with clean financial dashboards, transfers, and personal finance tools.',
    links: [
      ios('https://apps.apple.com/us/app/bank-78/id6470311222'),
      play('https://play.google.com/store/apps/details?id=com.bank78.mobile_app'),
    ],
  },
  {
    cat: 'apps',
    title: 'Ajé',
    year: 2023,
    image: img('aje'),
    tags: ['Marketplace', 'Commerce'],
    desc: 'A marketplace app for Nigerian users, connecting buyers and sellers in a fluid experience.',
    links: [
      ios('https://apps.apple.com/ng/app/aj%C3%A9/id1620800198'),
      play('https://play.google.com/store/apps/details?id=com.aje.app'),
    ],
  },

  // ---------- Brand ----------
  {
    cat: 'brand',
    title: 'Behance Portfolio',
    year: 2024,
    image: img('behance'),
    tags: ['Identity Systems', 'Logo Design'],
    desc: 'Full brand identity projects, logo design systems, and campaign visuals presented in detail.',
    links: [{ label: 'View on Behance', href: 'https://www.behance.net/etechgraphix' }],
  },
  {
    cat: 'brand',
    title: 'Pinterest Board',
    year: 2024,
    image: img('pinterest'),
    tags: ['Mood Boards', 'Campaigns'],
    desc: 'A curated collection of brand visuals, mood boards, and visual explorations.',
    links: [{ label: 'View on Pinterest', href: 'https://pin.it/4QK27kECt' }],
  },
]

export const LOGO_MARKS = [
  { name: 'Buffalo', bg: 'dark', scale: 1.6, src: 'images/logos/buffalo.webp' },
  { name: 'Onyx', bg: 'dark', scale: 2.2, src: 'images/logos/onyx.webp' },
  { name: 'ScaleNXT', bg: 'white', scale: 1, src: 'images/logos/scaleNXT.webp' },
  { name: 'Windfall', bg: 'light', scale: 2.2, src: 'images/logos/windfall.webp' },
]

export const SKILLS = [
  { group: 'Design', items: ['Product Design', 'UI/UX', 'Figma', 'Prototyping', 'Brand Identity', 'Visual Design'] },
  { group: 'Engineering', items: ['React / React Native', 'Node.js', 'JavaScript', 'Flutter', 'REST APIs', 'Firebase'] },
  { group: 'Tools', items: ['Figma', 'Webflow', 'Git', 'Vercel', 'Notion'] },
]
