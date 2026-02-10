interface JsonLdProps {
  data: Record<string, unknown>;
}

export const JsonLd = ({ data }: JsonLdProps) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'NGO',
  name: 'Dream On World',
  alternateName: 'Dream On: Global',
  url: 'https://dreamon.world',
  logo: 'https://dreamon.world/download.png',
  description: 'A 501(c)(3) nonprofit igniting faith and transforming lives across 6 countries through crusades, mission trips, water wells, and community outreach.',
  foundingDate: '2016',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '830 Glynwood Road',
    addressLocality: 'Wapakoneta',
    addressRegion: 'OH',
    postalCode: '45895',
    addressCountry: 'US',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'board@dreamon.world',
    contactType: 'Board of Directors',
  },
  sameAs: [
    'https://facebook.com/dreamonworld',
    'https://instagram.com/dreamonworld',
    'https://youtube.com/@dreamonworld',
  ],
  nonprofitStatus: '501(c)(3)',
  areaServed: [
    'United States',
    'Brazil',
    'Honduras',
    'Guatemala',
    'Dominican Republic',
    'Pakistan',
  ],
};

export const createArticleSchema = (post: {
  title: string;
  date: string;
  slug: string;
  image: string;
  content: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: post.title,
  datePublished: post.date,
  author: {
    '@type': 'Organization',
    name: 'Dream On World',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Dream On World',
    logo: {
      '@type': 'ImageObject',
      url: 'https://dreamon.world/download.png',
    },
  },
  image: `https://dreamon.world${post.image}`,
  url: `https://dreamon.world/blog/${post.slug}`,
  description: post.content.slice(0, 160),
});
