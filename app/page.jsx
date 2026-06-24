import './home.css';
import Header from '@/components/Header';
import Slider from '@/components/Slider';

export const metadata = {
  title: 'Digital Wedding Invitation — Elegant, Customized, $99',
  description:
    'mywedding.events creates beautiful digital wedding invitations with RSVP management, custom guest links, and a free Guest Photo QR. One-time $99, unlimited invitees.',
  alternates: { canonical: '/' },
  openGraph: {
    url: '/',
    title: 'Digital Wedding Invitation — Elegant, Customized, $99',
    description:
      'Beautiful digital wedding invitations with RSVP management and a free Guest Photo QR. One-time $99, unlimited invitees.',
  },
};

const homeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Digital Wedding Invitation',
  description:
    'A beautifully crafted digital wedding invitation tailored to your story. Includes RSVP management, custom guest links, music, location with map, and a free Guest Photo QR.',
  brand: { '@type': 'Brand', name: 'mywedding.events' },
  category: 'Wedding Invitations',
  offers: {
    '@type': 'Offer',
    price: '99',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    url: 'https://mywedding.events/invitation',
  },
};

export default function HomePage() {
  return (
    <div className="home" data-screen-label="Home">
      <Header centered withBrand={false} />
      <h1 className="visually-hidden">
        Digital Wedding Invitations — beautifully crafted, fully customized
      </h1>
      <Slider />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
    </div>
  );
}
