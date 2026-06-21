import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants';

export default function ProfileJsonLd() {
  const personId = `${SITE_CONFIG.url}/#person`;
  const websiteId = `${SITE_CONFIG.url}/#website`;
  const profilePageId = `${SITE_CONFIG.url}/#profile-page`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': personId,
        name: SITE_CONFIG.name,
        alternateName: SITE_CONFIG.nameEn,
        honorificPrefix: 'Lt.Gen.',
        jobTitle: [
          'ผู้บริหารยุทธศาสตร์ด้านความมั่นคง',
          'AI Governance Advisor',
          'Defense-Tech Strategist',
        ],
        description: SITE_CONFIG.description,
        url: SITE_CONFIG.url,
        image: `${SITE_CONFIG.url}/assets/krich-2026.png`,
        sameAs: [SOCIAL_LINKS.linkedin, SOCIAL_LINKS.marketsverse],
        knowsAbout: [
          'AI Governance',
          'Responsible AI',
          'Defense Technology',
          'Strategic Security',
          'Digital Transformation',
          'PMQA',
          'CQI',
          'Executive Coaching',
          'Knowledge Management',
          'Thailand public sector strategy',
        ],
        nationality: {
          '@type': 'Country',
          name: 'Thailand',
        },
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: SITE_CONFIG.url,
        name: SITE_CONFIG.name,
        alternateName: SITE_CONFIG.nameEn,
        inLanguage: 'th-TH',
        publisher: {
          '@id': personId,
        },
      },
      {
        '@type': 'ProfilePage',
        '@id': profilePageId,
        url: SITE_CONFIG.url,
        name: `${SITE_CONFIG.name} | Executive Portfolio`,
        inLanguage: 'th-TH',
        isPartOf: {
          '@id': websiteId,
        },
        mainEntity: {
          '@id': personId,
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
