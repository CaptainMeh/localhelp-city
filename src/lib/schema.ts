import { SITE } from './site';

/** Organization schema — used on the platform homepage. */
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    description:
      'Local help for anyone new in town. A small local team you can message on WhatsApp — starting in Cluj-Napoca, Romania.',
    email: SITE.email,
    logo: `${SITE.url}/favicon.svg`,
  };
}

/** LocalBusiness schema — used on /cluj/ and local Cluj pages. */
export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE.name,
    url: `${SITE.url}/cluj/`,
    description:
      'Someone local when Cluj gets confusing. Practical, English-speaking local guidance for students, internationals, and newcomers in Cluj-Napoca — on WhatsApp.',
    email: SITE.email,
    priceRange: '€',
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.office.streetAddress, // TODO: real address before launch
      addressLocality: SITE.office.locality,
      postalCode: SITE.office.postalCode,
      addressCountry: SITE.office.country,
    },
    areaServed: {
      '@type': 'City',
      name: 'Cluj-Napoca',
    },
    // TODO: add geo coordinates and openingHours once the office details are final
  };
}
