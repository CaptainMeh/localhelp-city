/**
 * Single source of truth for site-wide constants.
 * Edit copy, contact details, and pre-filled WhatsApp messages here.
 */

export const SITE = {
  name: 'localhelp.city',
  url: 'https://localhelp.city',
  tagline: 'Someone local when Cluj gets confusing.',
  coreSentence:
    'Before you sign, pay, book, visit, decide, or panic — ask someone local.',
  whatsappNumber: '40748246019',
  // Office address: street withheld until it's public — schema and footer say central Cluj only.
  office: {
    locality: 'Cluj-Napoca',
    country: 'RO',
  },
  email: 'hello@localhelp.city', // placeholder — confirm before launch
};

/** Pre-filled WhatsApp messages, one per context. */
export const WA_MESSAGES = {
  general: "Hi, I'm new to Cluj and I have a question.",
  housing: "Hi, I found a rental listing in Cluj and I'd like a local sanity check.",
  paperwork: 'Hi, I need help understanding what to do for paperwork in Cluj.',
  student: "Hi, I'm moving to Cluj as a student and I have a question.",
  parent: "Hi, my child is moving to Cluj and I'd like to ask something.",
  pricing: "Hi, I'd like to ask one question and pay what feels fair if it helps.",
  inPerson: "Hi, I'd like to ask about in-person help in Cluj.",
  arrival: "Hi, I'm arriving in Cluj soon and I'd like help planning my first weeks.",
} as const;

export type WaMessageKey = keyof typeof WA_MESSAGES;

/** Build a wa.me link with a pre-filled message. */
export function waLink(message: string): string {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/** Gentle reference anchors — guidance, never tiers or packages. */
export const ANCHORS = [
  { label: 'A small question', detail: '“which bus app?”, “is this pharmacy open Sundays?”', range: 'usually €3–5' },
  { label: 'A rental listing or rent sanity check', detail: '“is this real? is this price fair?”', range: 'usually €5–15' },
  { label: 'Arrival planning', detail: 'what to sort before and after you land, in order, for your situation', range: 'usually €10–25' },
  { label: 'Something more complex', detail: 'we agree on it together before starting — never a surprise number after the fact', range: 'agreed in advance' },
  { label: 'In-person help', detail: 'viewings, offices, meetings — subject to availability', range: 'by the hour, agreed in advance' },
];

/** Main navigation. */
export const NAV = [
  { label: 'Cluj', href: '/cluj/' },
  { label: 'Services', href: '/cluj/#services' },
  { label: 'How it works', href: '/how-it-works/' },
  { label: 'Housing', href: '/cluj/housing-help/' },
  { label: 'Pricing', href: '/cluj/pricing/' },
  { label: 'About', href: '/about/' },
];
