import { SITE } from './site';

/**
 * Coherent structured-data graph with stable @ids:
 *   Organization  → https://localhelp.city/#organization   (homepage, about)
 *   WebSite       → https://localhelp.city/#website        (homepage)
 *   LocalBusiness → https://localhelp.city/#localbusiness  (defined ONCE, on /cluj/)
 *   Service       → per service page, provider = LocalBusiness @id
 *   Article       → per guide, publisher = Organization @id
 *   BreadcrumbList→ secondary pages (via Breadcrumbs component)
 * No invented ratings, reviews, people, or addresses.
 */

export const ORG_ID = `${SITE.url}/#organization`;
export const BUSINESS_ID = `${SITE.url}/#localbusiness`;
export const WEBSITE_ID = `${SITE.url}/#website`;

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: SITE.name,
    url: SITE.url,
    description:
      'Practical local help for people new in town: a real local person on WhatsApp. Available now in Cluj-Napoca, Romania.',
    email: SITE.email,
    logo: `${SITE.url}/favicon.svg`,
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: SITE.name,
    url: SITE.url,
    publisher: { '@id': ORG_ID },
    inLanguage: 'en',
  };
}

/** Full LocalBusiness. Use ONLY on /cluj/. Other pages reference BUSINESS_ID. */
export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': BUSINESS_ID,
    name: SITE.name,
    url: `${SITE.url}/cluj/`,
    description:
      'Ask a real local person about living in Cluj-Napoca: housing, paperwork, prices, arrival, and everyday problems. On WhatsApp, in English.',
    email: SITE.email,
    priceRange: '€',
    parentOrganization: { '@id': ORG_ID },
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.office.streetAddress,
      addressLocality: SITE.office.locality,
      addressCountry: SITE.office.country,
    },
    areaServed: { '@type': 'City', name: 'Cluj-Napoca' },
  };
}

/** Service schema for /cluj/ service pages. */
export function serviceSchema(opts: { name: string; description: string; path: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    url: new URL(opts.path, SITE.url).href,
    provider: { '@id': BUSINESS_ID },
    areaServed: { '@type': 'City', name: 'Cluj-Napoca' },
    availableChannel: {
      '@type': 'ServiceChannel',
      name: 'WhatsApp',
      serviceUrl: `https://wa.me/${SITE.whatsappNumber}`,
    },
  };
}

/** Article schema for published guides. Dates in YYYY-MM-DD. */
export function articleSchema(opts: {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.headline,
    description: opts.description,
    url: new URL(opts.path, SITE.url).href,
    mainEntityOfPage: new URL(opts.path, SITE.url).href,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    inLanguage: 'en',
    author: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
    ...(opts.image ? { image: new URL(opts.image, SITE.url).href } : {}),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: new URL(item.path, SITE.url).href,
    })),
  };
}
