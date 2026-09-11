import './home.css';
import Header from '@/components/Header';
import Slider from '@/components/Slider';

export const metadata = {
  title: 'Digital Wedding Invitations with RSVP & Photo QR — $99',
  description:
    'Create a beautiful digital wedding invitation with RSVP tracking and custom guest links for a one-time $99, plus a Guest Photo QR available separately for $49.',
  alternates: { canonical: '/' },
  openGraph: {
    url: '/',
    title: 'Digital Wedding Invitations with RSVP & Photo QR — $99',
    description:
      'Beautiful digital wedding invitations with RSVP tracking and custom guest links for a one-time $99, plus a Guest Photo QR available separately for $49.',
  },
};

const homeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Digital Wedding Invitation',
  description:
    'A beautifully crafted digital wedding invitation tailored to your story. Includes RSVP management, custom guest links, music, and location with map.',
  brand: { '@type': 'Brand', name: 'mywedding.events' },
  category: 'Wedding Invitations',
  image: 'https://mywedding.events/images/digital-wedding-invitation-phone-mockup.png',
  offers: {
    '@type': 'Offer',
    price: '99',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    url: 'https://mywedding.events/digital-wedding-invitation',
    priceValidUntil: '2099-12-31',
  },
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Digital Wedding Invitation Design',
  provider: { '@type': 'Organization', name: 'mywedding.events', url: 'https://mywedding.events' },
  areaServed: 'Worldwide',
  description:
    'Custom-designed digital wedding invitations with RSVP management, custom guest links, location with map, and music, plus an optional Guest Photo QR for collecting every guest photo.',
  offers: {
    '@type': 'Offer',
    price: '99',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
  },
};

export default function HomePage() {
  return (
    <div className="home" data-screen-label="Home">
      <Header centered withBrand={false} />
      <h1 className="visually-hidden">
        Digital Wedding Invitations with RSVP. Beautifully crafted, fully customized, one-time $99
      </h1>
      <p className="visually-hidden">
        mywedding.events creates beautiful digital wedding invitations with RSVP management,
        custom guest links, location and map, and music for a one-time $99, unlimited invitees,
        no subscriptions. Add the Guest Photo QR — which collects every guest&apos;s photos into
        one shared wedding gallery — for a one-time $49.
      </p>
      <Slider />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
    </div>
  );
}
