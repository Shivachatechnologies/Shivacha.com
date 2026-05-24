export function SchemaOrg() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://www.shivacha.com/#organization',
        name: 'Shivacha Technologies',
        url: 'https://www.shivacha.com',
        logo: 'https://www.shivacha.com/logo.png',
        description: 'Global enterprise infrastructure company delivering blockchain, AI, fintech, forex, trading, and cloud ecosystems.',
        foundingDate: '2016',
        sameAs: [
          'https://twitter.com/Shivachatech',
          'https://linkedin.com/company/Shivachatech',
          'https://facebook.com/Shivachatech',
          'https://instagram.com/Shivachatech',
          'https://youtube.com/Shivachatech',
        ],
        contactPoint: [
          { '@type': 'ContactPoint', contactType: 'sales', areaServed: 'US', availableLanguage: 'English', telephone: '+1-800-SHIVACHA' },
          { '@type': 'ContactPoint', contactType: 'sales', areaServed: 'IN', availableLanguage: ['English', 'Hindi'], telephone: '+91-124-800-0000' },
          { '@type': 'ContactPoint', contactType: 'sales', areaServed: 'GB', availableLanguage: 'English', telephone: '+44-20-8000-0000' },
        ],
        address: [
          { '@type': 'PostalAddress', addressCountry: 'US', addressLocality: 'Silicon Valley', addressRegion: 'CA' },
          { '@type': 'PostalAddress', addressCountry: 'IN', addressLocality: 'Gurgaon', addressRegion: 'Haryana' },
          { '@type': 'PostalAddress', addressCountry: 'GB', addressLocality: 'London' },
        ],
        numberOfEmployees: { '@type': 'QuantitativeValue', value: 200 },
        areaServed: 'Worldwide',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Enterprise Technology Services',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Blockchain Development' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Development' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Fintech Infrastructure' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Crypto Exchange Development' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'DeFi Development' } },
          ],
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.shivacha.com/#website',
        url: 'https://www.shivacha.com',
        name: 'Shivacha Technologies',
        publisher: { '@id': 'https://www.shivacha.com/#organization' },
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://www.shivacha.com/search?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
