import './wedding-photo-qr-code.css';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Guest Photo QR — Free with every Digital Wedding Invitation',
  description:
    'Guest Photo QR collects every guest’s wedding photos and videos into one shared gallery — automatically. Free with every $99 digital wedding invitation from mywedding.events.',
  keywords: [
    'wedding photo QR',
    'guest photo QR code',
    'wedding photo sharing app',
    'shared wedding gallery',
    'digital wedding invitation with photo sharing',
  ],
  alternates: { canonical: '/wedding-photo-qr-code' },
  openGraph: {
    url: '/wedding-photo-qr-code',
    title: 'Guest Photo QR — Free with every Digital Wedding Invitation',
    description:
      'A single QR turns every guest’s phone into a contributor to your wedding album. Included free with the $99 digital wedding invitation.',
    images: [
      {
        url: '/images/wedding-guest-photo-qr-code.png',
        width: 1200,
        height: 630,
        alt: 'A guest scanning a wedding table card QR code to add photos to a shared gallery',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guest Photo QR — Free with every Digital Wedding Invitation',
    description:
      'Collect every guest photo automatically. Free with the $99 digital wedding invitation.',
    images: ['/images/wedding-guest-photo-qr-code.png'],
  },
};

const photoQrBreadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mywedding.events/' },
    { '@type': 'ListItem', position: 2, name: 'Guest Photo QR', item: 'https://mywedding.events/wedding-photo-qr-code' },
  ],
};

const photoQrHowToJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to collect every wedding guest photo with a Guest Photo QR code',
  description:
    'Use a single QR code to gather every guest’s wedding photos and videos into one private, shared gallery — no apps required.',
  totalTime: 'PT2M',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Display your code',
      text: 'Your unique QR appears on table cards, signage and your digital wedding invitation.',
      url: 'https://mywedding.events/wedding-photo-qr-code#how',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Guests scan it',
      text: 'A quick scan opens your upload page right in their browser — no app to install.',
      url: 'https://mywedding.events/wedding-photo-qr-code#how',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'They upload',
      text: 'Photos and videos upload straight from the camera roll in seconds.',
      url: 'https://mywedding.events/wedding-photo-qr-code#how',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'You collect it all',
      text: 'Every memory gathers in one private gallery for you to keep and share.',
      url: 'https://mywedding.events/wedding-photo-qr-code#how',
    },
  ],
};

const photoQrServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Guest Photo QR — shared wedding photo gallery',
  serviceType: 'Wedding photo sharing',
  provider: { '@type': 'Organization', name: 'mywedding.events', url: 'https://mywedding.events' },
  description:
    'A single QR code that turns every wedding guest’s phone into a contributor to one shared, private wedding photo gallery. Free with every $99 digital wedding invitation from mywedding.events.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
  },
};

export default function PhotoQrPage() {
  return (
    <div className="photo-qr-page" data-screen-label="Guest Photo QR Page">
      <Header active="photo-qr" centered withBrand={false} />

      <div className="hero">
        <div className="hero__content">
          <div className="inner">
            <p className="eyebrow free-line">Guest Photo QR <span className="free-pill">Always Free</span></p>
            <h1>Every photo,<br />from <em>every</em> guest.</h1>
            <p className="sub">Your guests capture moments you&apos;ll never see from the front of the room. Guest Photo QR gathers every one of them automatically, into a single shared gallery. No apps. No cost.</p>
            <div className="actions">
              <Link className="btn btn--accent" href="/digital-wedding-invitation">Included with every invitation</Link>
              <Link className="btn btn--ghost" href="#how">See how it works</Link>
            </div>
          </div>
        </div>
        <div className="hero__media">
          <img src="/images/wedding-guest-photo-qr-code.png" alt="A wedding guest scanning a 'Capture the Love' table card QR code to upload photos to a shared gallery" />
        </div>
      </div>

      <section className="what">
        <div className="wrap what-grid">
          <div>
            <p className="eyebrow">What it is</p>
            <h2>A shared gallery that fills itself.</h2>
          </div>
          <div className="body">
            <p className="lead-line">Guest Photo QR is a single code that turns every guest&apos;s phone into a contributor to your wedding album.</p>
            <p>Place the code on tables, in the program, or beside the guest book. When someone scans it, they&apos;re taken to your private upload page—branded to your wedding where they can drop in the photos and videos they took that day.</p>
            <p>Everything lands in one place, in real time. No chasing group chats, no &ldquo;can you send me that one?&rdquo;, no missing the candid shots from the dance floor. And because it comes bundled with your Digital Invitation, it&apos;s completely <em>free</em>.</p>
          </div>
        </div>
      </section>

      <section className="how" id="how">
        <div className="how-head">
          <p className="eyebrow">How it works</p>
          <h2>Four taps to a full album.</h2>
        </div>
        <div className="steps">
          <div className="step">
            <img className="shot" src="/images/guest-photo-qr-step-1-display-code.png" alt="A Capture the Love wedding photo QR card displayed on a candlelit reception table" />
            <span className="num">01</span>
            <h4>Display your code</h4>
            <p>Your unique QR appears on table cards, signage and your invitation.</p>
          </div>
          <div className="step">
            <img className="shot" src="/images/guest-photo-qr-step-2-guests-scan.png" alt="A wedding guest scanning the table QR card with their phone camera" />
            <span className="num">02</span>
            <h4>Guests scan it</h4>
            <p>A quick scan opens your upload page right in their browser—no app to install.</p>
          </div>
          <div className="step">
            <img className="shot" src="/images/guest-photo-qr-step-3-upload-photos.png" alt="A phone showing the photo selection screen ready to upload wedding photos to the shared gallery" />
            <span className="num">03</span>
            <h4>They upload</h4>
            <p>Photos and videos upload straight from the camera roll in seconds.</p>
          </div>
          <div className="step">
            <img className="shot" src="/images/guest-photo-qr-step-4-collect-gallery.png" alt="A newlywed couple viewing their shared wedding photo gallery on a laptop" />
            <span className="num">04</span>
            <h4>You collect it all</h4>
            <p>Every memory gathers in one private gallery for you to keep and share.</p>
          </div>
        </div>
      </section>

      <section className="benefits">
        <div className="ben-head">
          <p className="eyebrow">Why couples love it</p>
          <h2>Nothing gets missed.</h2>
        </div>
        <div className="ben-grid">
          <div className="ben">
            <span className="mk">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
                <path d="M14 14h3v3M21 21v-3M17 21h-3" />
              </svg>
            </span>
            <h4>No app required</h4>
            <p>Guests of every age can join. It all works in the phone they already have.</p>
          </div>
          <div className="ben">
            <span className="mk">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M21 15V8a2 2 0 0 0-2-2h-3l-2-2H8L6 6H5a2 2 0 0 0-2 2v7" />
                <circle cx="12" cy="13" r="3.4" />
              </svg>
            </span>
            <h4>Every angle, captured</h4>
            <p>Candids your photographer never saw. Now part of your story forever.</p>
          </div>
          <div className="ben">
            <span className="mk">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                <rect x="4" y="4" width="16" height="16" rx="2" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </span>
            <h4>Private &amp; yours</h4>
            <p>One gallery, just for the two of you can download, keep and share on your terms.</p>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <p className="eyebrow">Free with every invitation</p>
          <h2>Don&apos;t let a single moment <em>slip away</em>.</h2>
          <p>Guest Photo QR comes included at no extra cost with your $99 Digital Invitation.</p>
          <div className="actions">
            <Link className="btn btn--light" href="/digital-wedding-invitation">Get the invitation + Photo QR</Link>
            <Link className="btn btn--light-ghost" href="/">Back to home</Link>
          </div>
        </div>
      </section>

      <Footer middleText="Guest Photo QR · always free with your Digital Invitation" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(photoQrServiceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(photoQrHowToJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(photoQrBreadcrumbJsonLd) }}
      />
    </div>
  );
}
