import './home.css';
import Link from 'next/link';
import Header from '@/components/Header';
import Slider from '@/components/Slider';

export const metadata = {
  title: 'Digital Wedding Invitations with RSVP & Photo QR — $99',
  description:
    'Create a custom digital wedding invitation with RSVP tracking, personalized guest links, and a free wedding photo QR code. One-time $99, unlimited invitees.',
  alternates: { canonical: '/' },
  openGraph: {
    url: '/',
    title: 'Digital Wedding Invitations with RSVP & Photo QR — $99',
    description:
      'Custom digital wedding invitations with RSVP tracking, personalized guest links, and a free wedding photo QR code. One-time $99, unlimited invitees.',
  },
};

const homeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Digital Wedding Invitation with RSVP and Guest Photo QR',
  description:
    'A beautifully crafted digital wedding invitation tailored to your story. Includes RSVP management, custom guest links, music, location with map, and a free Guest Photo QR.',
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
    'Custom-designed digital wedding invitations with RSVP management, custom guest links, location with map, music, and a free Guest Photo QR for collecting every guest photo.',
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

      <main>
        <section className="home-hero">
          <div className="home-hero__copy">
            <p className="eyebrow">Digital wedding invitations</p>
            <h1>Digital Wedding Invitations with RSVP &amp; Photo QR</h1>
            <p>
              Create a custom online wedding invitation your guests can open instantly, RSVP
              from any phone, and use to upload wedding photos through a private QR-powered gallery.
              One beautiful invitation, unlimited invitees, one-time $99.
            </p>
            <div className="actions">
              <Link className="btn btn--accent" href="/digital-wedding-invitation">
                Create your invitation
              </Link>
              <Link className="btn btn--ghost" href="/wedding-photo-qr-code">
                Explore photo QR
              </Link>
            </div>
          </div>
          <div className="home-hero__media">
            <img
              src="/images/digital-wedding-invitation-phone-mockup.png"
              alt="A custom digital wedding invitation with RSVP details displayed on a phone"
              width="1072"
              height="1467"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </section>

        <section className="seo-panels" aria-labelledby="home-services-heading">
          <div className="seo-panels__head">
            <p className="eyebrow">Everything guests need</p>
            <h2 id="home-services-heading">A wedding invitation website built for RSVPs, details, and memories.</h2>
          </div>
          <div className="seo-panels__grid">
            <article>
              <h3>Custom digital wedding invitation</h3>
              <p>
                Share your wedding story with a paperless invitation customized to your colors,
                wording, venue, music, and guest list.
              </p>
              <Link href="/digital-wedding-invitation">See the invitation package</Link>
            </article>
            <article>
              <h3>Online RSVP management</h3>
              <p>
                Guests reply from their phones, and you receive every RSVP update without chasing
                messages across group chats.
              </p>
              <Link href="/digital-wedding-invitation#included">View RSVP features</Link>
            </article>
            <article>
              <h3>Free wedding photo QR code</h3>
              <p>
                Place one QR code on tables or signage so guests can upload candid photos and videos
                into one shared wedding gallery.
              </p>
              <Link href="/wedding-photo-qr-code">Learn about Guest Photo QR</Link>
            </article>
          </div>
        </section>

        <Slider />
      </main>

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
