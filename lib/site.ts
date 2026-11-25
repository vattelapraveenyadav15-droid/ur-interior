/**
 * Single source of truth for business facts, content and SEO data.
 * Edit here — every component reads from this file.
 */

export const site = {
  name: "UR Interiors",
  legalName: "UR Interiors",
  tagline: "Interior Designers in Hyderabad",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ur-interiors.vercel.app",
  description:
    "UR Interiors is an interior design studio in Miyapur, Hyderabad crafting modular kitchens, wardrobes, false ceilings and full-home interiors for apartments and villas. 10+ years, 780+ homes, transparent pricing.",
  phone: "+91 90327 37596",
  phoneRaw: "+919032737596",
  whatsapp: "919032737596",
  email: "",
  address: {
    street: "Lakshmi's Emperia, B-806, Sri Rangapuram Colony, Rangapuram",
    locality: "Miyapur, Hyderabad",
    region: "Telangana",
    postalCode: "500049",
    country: "IN",
  },
  geo: { lat: 17.4968, lng: 78.3614 },
  hours: "Mon–Sat 10:00–19:30 · Sun by appointment",
  priceRange: "₹₹",
  founded: "2015",
  stats: [
    { value: "10+", label: "Years of design practice" },
    { value: "780+", label: "Homes delivered" },
    { value: "4.9", label: "Average client rating" },
    { value: "45", label: "Day handover promise" },
  ],
  areasServed: [
    "Miyapur",
    "Kukatpally",
    "Bachupally",
    "Nizampet",
    "Chandanagar",
    "Lingampally",
    "Madhapur",
    "Kondapur",
    "HITEC City",
    "Gachibowli",
    "Manikonda",
    "Secunderabad",
  ],
} as const;

export const nav = [
  { href: "#home", key: "home", en: "Home", te: "హోమ్" },
  { href: "#services", key: "services", en: "Services", te: "సేవలు" },
  { href: "#projects", key: "projects", en: "Projects", te: "ప్రాజెక్టులు" },
  { href: "#contact", key: "contact", en: "Contact", te: "సంప్రదించండి" },
] as const;

export const services = [
  {
    icon: "kitchen",
    title: "Modular Kitchens",
    body: "Ergonomic layouts, marine-ply carcasses, quartz counters and soft-close hardware built for Indian cooking.",
    price: "from ₹1.65 L",
  },
  {
    icon: "wardrobe",
    title: "Wardrobes & Storage",
    body: "Full-height sliding and walk-in wardrobes with internal lighting, mirrors and customised organisers.",
    price: "from ₹1.20 L",
  },
  {
    icon: "sofa",
    title: "Living & Dining",
    body: "TV consoles, crockery units, statement lighting and seating layouts sized to your room, not a catalogue.",
    price: "from ₹1.10 L",
  },
  {
    icon: "lamp",
    title: "False Ceiling & Lighting",
    body: "Cove-lit ceilings, profile lights and layered lighting plans that keep your home bright and your bills low.",
    price: "from ₹95 k",
  },
  {
    icon: "building",
    title: "Full Home Interiors",
    body: "One team for civil, electrical, carpentry, painting and décor — handed over in 45 working days.",
    price: "from ₹6.80 L",
  },
  {
    icon: "ruler",
    title: "Villa & Duplex Interiors",
    body: "Double-height volumes, staircases, home theatres and outdoor decks detailed by in-house designers.",
    price: "on request",
  },
] as const;

export const processSteps = [
  {
    no: "01",
    title: "Free consultation",
    body: "We visit your flat or villa in Hyderabad, measure every wall and listen to how you actually live.",
  },
  {
    no: "02",
    title: "3D design & quote",
    body: "Photoreal 3D views, material samples and a line-item quote — you approve before a single cut is made.",
  },
  {
    no: "03",
    title: "Factory + on-site build",
    body: "Modular units are machine-cut at our Kondapur facility and installed by our own supervisors.",
  },
  {
    no: "04",
    title: "45-day handover",
    body: "Snag-free handover with a 10-year warranty on carcass, 1-year service visits and a care guide.",
  },
] as const;

export const projects = [
  {
    name: "The Bougainvillea Home",
    location: "Jubilee Hills · 3BHK",
    img: "living-warm",
    alt: "Warm-toned living room with terracotta sofa, ochre joinery and art-led wall panelling designed by UR Interiors in Jubilee Hills, Hyderabad",
    width: 900,
    height: 1138,
  },
  {
    name: "Quiet Geometry",
    location: "Kokapet · 4BHK Villa",
    img: "living-cream",
    alt: "Cream modular sofa, sculptural pendants and an oversized abstract artwork in a Kokapet villa living room",
    width: 900,
    height: 1141,
  },
  {
    name: "Indigo Hours",
    location: "Banjara Hills · Duplex",
    img: "living-blue",
    alt: "Duplex living room in Banjara Hills with ivory seating, cobalt armchair and arc floor lamp",
    width: 900,
    height: 1138,
  },
  {
    name: "Marble & Mango Wood",
    location: "Financial District · 3BHK",
    img: "kitchen",
    alt: "Handleless modular kitchen with walnut shutters, quartz waterfall island and brass pendants in the Financial District",
    width: 1200,
    height: 2150,
  },
  {
    name: "Fluted Calm",
    location: "Gachibowli · Master Suite",
    img: "bedroom",
    alt: "Master bedroom with fluted walnut wardrobe, backlit profile lighting and cream linen bedding in Gachibowli",
    width: 1200,
    height: 2150,
  },
  {
    name: "Cove & Brass",
    location: "Kondapur · Dining",
    img: "dining",
    alt: "Dining area with sculpted false ceiling, hidden cove lighting, round marble table and brass jali partition in Kondapur",
    width: 1200,
    height: 2150,
  },
] as const;

export const latestSpaces = [
  {
    name: "Living room, Kokapet",
    img: "living-warm",
    alt: "Warm contemporary living room with terracotta seating and ochre storage unit, designed by UR Interiors in Kokapet",
    width: 900,
    height: 1138,
    w500: "/media/living-warm-500.webp",
  },
  {
    name: "Living room, Jubilee Hills",
    img: "living-cream",
    alt: "Minimal cream living room with pendant lighting and abstract art, designed by UR Interiors in Jubilee Hills",
    width: 900,
    height: 1141,
    w500: "/media/living-cream-500.webp",
  },
  {
    name: "Duplex lounge, Banjara Hills",
    img: "living-blue",
    alt: "Duplex lounge with curved cream sofas and cobalt accent chair, designed by UR Interiors in Banjara Hills",
    width: 900,
    height: 1138,
    w500: "/media/living-blue-500.webp",
  },
] as const;

export const testimonials = [
  {
    quote:
      "We had quotes from three studios. UR Interiors was the only one that showed us a 3D view before asking for money — and the kitchen they delivered is exactly that render, down to the brass handles.",
    name: "Sravani & Karthik",
    meta: "3BHK, Kokapet",
  },
  {
    quote:
      "My parents live with us, so they reworked the wardrobes and bathroom heights without me even asking. Handover happened on day 44. Zero calls after that.",
    name: "Dr. Meher Fatima",
    meta: "Villa, Jubilee Hills",
  },
  {
    quote:
      "We were out of the country for the whole build. Daily photos on WhatsApp, GST invoices, no surprise line items. Genuinely the easiest renovation we have done.",
    name: "Naveen Reddy",
    meta: "3BHK, Financial District",
  },
] as const;

export const faqs = [
  {
    q: "How much do interior design services cost in Hyderabad?",
    a: "A 2BHK usually lands between ₹4.5–6 lakh, a 3BHK between ₹6.8–9 lakh and a villa between ₹12–25 lakh depending on the scope, materials and carpentry. UR Interiors shares a line-item quote after the free site visit so you can add or remove items before work begins. Design consultation and 3D views are free when you build with us.",
  },
  {
    q: "How long does a full home interior take?",
    a: "Most 2BHK and 3BHK apartments are handed over in 45 working days from the day of design sign-off. Villas and duplexes typically take 60–75 working days. Modular units are factory-cut at our Kondapur facility while civil and electrical work happens on site, which is what keeps the timeline short.",
  },
  {
    q: "Which areas of Hyderabad do you serve?",
    a: "We work across Hyderabad and Secunderabad, including Jubilee Hills, Banjara Hills, Gachibowli, Kokapet, Financial District, Kondapur, HITEC City, Madhapur, Narsingi, Manikonda, Tellapur and Sainikpuri. Site visits within the ORR are free.",
  },
  {
    q: "What materials and warranty do you provide?",
    a: "We use BWP/BWR marine ply or high-density HDHMR for carcasses, branded hardware (Hettich, Hafele, Blum or equivalent) and 0.8–1.5 mm laminates or PU finishes. Every carcass comes with a 10-year warranty, hardware with the manufacturer's warranty and free service visits at 6 and 12 months.",
  },
  {
    q: "Can I start with just a kitchen or wardrobe?",
    a: "Yes. Around half our clients begin with a single room such as a modular kitchen or master wardrobe. The design language and hardware are logged in your file so later additions match exactly when you are ready for the rest of the home.",
  },
] as const;
