import './invitation.css';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Digital Wedding Invitation — Customized & Elegant, $99',
  description:
    'A beautifully crafted digital wedding invitation tailored to your story. Unlimited invitees, RSVP management, custom guest links, location & map, music, and a free Guest Photo QR — one-time $99.',
  keywords: [
    'digital wedding invitation',
    'digital wedding invitations',
    'online wedding invitation',
    'electronic wedding invitation',
    'custom digital wedding invitation',
    'wedding invite online',
    'wedding RSVP management',
    'paperless wedding invitation',
  ],
  alternates: { canonical: '/digital-wedding-invitation' },
  openGraph: {
    url: '/digital-wedding-invitation',
    title: 'Digital Wedding Invitation — Customized & Elegant, $99',
    description:
      'A beautifully crafted digital wedding invitation tailored to your story. Unlimited invitees, RSVP management, and a free Guest Photo QR — one-time $99.',
    images: [
      {
        url: '/images/digital-wedding-invitation-phone-mockup.png',
        width: 1200,
        height: 630,
        alt: 'A digital wedding invitation shown on a phone held in hand',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Wedding Invitation — Customized & Elegant, $99',
    description:
      'Send a beautiful digital wedding invitation. Unlimited invitees, RSVP management, free Guest Photo QR. One-time $99.',
    images: ['/images/digital-wedding-invitation-phone-mockup.png'],
  },
};

const invitationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Digital Wedding Invitation',
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

const invitationBreadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mywedding.events/' },
    { '@type': 'ListItem', position: 2, name: 'Digital Invitation', item: 'https://mywedding.events/digital-wedding-invitation' },
  ],
};

const invitationFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a digital wedding invitation cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'One-time $99. There are no subscriptions and no per-guest charges, no matter how many people you invite.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many guests can I invite with a digital wedding invitation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Unlimited. Invite ten guests or a thousand — the price never moves.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is included with a digital wedding invitation from mywedding.events?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A fully customized invitation, location details and map, music, RSVP management with email notifications, a custom link for each invitee, and a free Guest Photo QR.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do guests need to install an app to RSVP or view the invitation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The digital wedding invitation and RSVP both open in the browser — no app required.',
      },
    },
  ],
};

function Tick() {
  return (
    <span className="tick">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M5 13l4 4L19 7" /></svg>
    </span>
  );
}

export default function InvitationPage() {
  return (
    <div className="invitation-page" data-screen-label="Digital Invitation Page">
      <Header active="invitation" centered withBrand={false} />

      <div className="hero">
        <div className="hero__content">
          <div className="inner">
            <p className="eyebrow">Digital Wedding Invitation</p>
            <h1>The first thing<br />they&apos;ll <em>fall for</em>.</h1>
            <p className="sub">A beautifully crafted digital wedding invitation—tailored to your story, with everything your guests need to say yes and show up. One price, no per-guest fees, ever.</p>
            <div className="actions" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 34 }}>
              <Link className="btn btn--accent" href="#pricing">Get started — $99</Link>
              <Link className="btn btn--ghost" href="#included">What&apos;s included</Link>
            </div>
          </div>
        </div>
        <div className="hero__media">
          <img className="hero__media-img" src="/images/digital-wedding-invitation-phone-mockup.png" alt="An elegant digital wedding invitation displayed on a phone with RSVP and venue details" width="1072" height="1467" loading="eager" fetchPriority="high" decoding="async" />
        </div>
      </div>

      <section className="pricing" id="pricing">
        <div className="wrap">
          <div className="pricing-grid">

            <div className="price-panel">
              <p className="eyebrow">Simple, one-time pricing</p>
              <h2>Everything, for one fair price.</h2>
              <div className="price-big">
                <span className="amt"><sup>$</sup>99</span>
                <span className="meta"><b>One-time payment</b>No subscriptions.<br />No per-guest charges.</span>
              </div>
              <p className="note">Invite ten guests or a thousand—the price never moves. Built once, beautifully, for your wedding.</p>
              <div className="actions">
                <a className="btn btn--accent" href="https://wa.me/96178822978" target="_blank" rel="noopener noreferrer">CONTACT US ON WHATSAPP <span aria-hidden="true">↗</span></a>
              </div>
            </div>

            <div className="included" id="included">
              <h3>$99 includes <span className="divider-dot">·</span> everything below</h3>
              <ul className="feat-list">
                <li><Tick /><span className="ftxt">Unlimited number of invitees<small>No caps, no per-guest fees</small></span></li>
                <li><Tick /><span className="ftxt">Customized invitation<small>Tailored to your colors, fonts &amp; story</small></span></li>
                <li><Tick /><span className="ftxt">Location details &amp; map<small>Venue address with a tap-to-navigate map</small></span></li>
                <li><Tick /><span className="ftxt">Music<small>Set the mood with your chosen track</small></span></li>
                <li><Tick /><span className="ftxt">RSVP management<small>Track every yes, no &amp; plus-one in one place</small></span></li>
                <li><Tick /><span className="ftxt">Receive an email after each RSVP<small>A gentle notification with every reply</small></span></li>
                <li><Tick /><span className="ftxt">Custom link for each invitee<small>Personalized greetings, one link per guest</small></span></li>
                <li><Tick /><span className="ftxt">Guest Photo QR <span className="free-pill">Free</span><small>Collect every guest&apos;s photos automatically</small></span></li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      <section className="cta-band" id="cta">
        <div className="wrap">
          <h2>Ready to send something <em>unforgettable</em>?</h2>
          <p>One beautiful invitation, unlimited guests, and the free Guest Photo QR included. All for $99.</p>
          <div className="actions">
            <a className="btn btn--light" href="https://wa.me/96178822978" target="_blank" rel="noopener noreferrer">CONTACT US ON WHATSAPP <span aria-hidden="true">↗</span></a>
            <Link className="btn btn--light-ghost" href="/wedding-photo-qr-code">Explore Guest Photo QR</Link>
          </div>
        </div>
      </section>

      <Footer middleText="One-time $99 · unlimited invitees · Guest Photo QR included free" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(invitationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(invitationFaqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(invitationBreadcrumbJsonLd) }}
      />
    </div>
  );
}
