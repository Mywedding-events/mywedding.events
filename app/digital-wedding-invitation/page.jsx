import './invitation.css';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Digital Invitation with RSVP: Custom Design for $99',
  description:
    'A beautifully crafted digital invitation tailored to your occasion, weddings, engagements, Kateb Kteb, baptisms, birthdays, Awwal Erbene and more. Unlimited invitees, RSVP management, custom guest links, location & map, and music, one-time $99. Add the Guest Photo QR for $49.',
  keywords: [
    'digital invitation',
    'digital invitations',
    'online invitation',
    'wedding invitation',
    'engagement invitation',
    'baptism invitation',
    'birthday invitation',
    'custom digital invitation',
    'invitation with RSVP',
    'paperless invitation',
  ],
  alternates: { canonical: '/digital-wedding-invitation' },
  openGraph: {
    url: '/digital-wedding-invitation',
    title: 'Digital Invitation with RSVP: Custom Design for $99',
    description:
      'A beautifully crafted digital invitation tailored to your occasion. Unlimited invitees and RSVP management, one-time $99. Add the Guest Photo QR for $49.',
    images: [
      {
        url: '/images/digital-wedding-invitation-phone-mockup.png',
        width: 1200,
        height: 630,
        alt: 'A digital invitation shown on a phone held in hand',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Invitation with RSVP: Custom Design for $99',
    description:
      'Send a beautiful digital invitation for any occasion. Unlimited invitees, RSVP management. One-time $99. Guest Photo QR available for $49.',
    images: ['/images/digital-wedding-invitation-phone-mockup.png'],
  },
};


const invitationFaqs = [
  {
    question: 'What occasions can I use a digital invitation for?',
    answer: 'Any occasion worth gathering for: weddings, engagements, Kateb Kteb, baptisms, birthdays, Awwal Erbene, showers, anniversaries and more. Each invitation is designed around your event.',
  },
  {
    question: 'How much does a digital invitation cost?',
    answer: 'One-time $99. There are no subscriptions and no per-guest charges, no matter how many people you invite.',
  },
  {
    question: 'Can I invite unlimited guests?',
    answer: 'Yes. Invite ten guests or a thousand, the price never moves.',
  },
  {
    question: 'Do guests need an app?',
    answer: 'No. Your invitation, guest details, and RSVP form open directly in the browser on any modern phone or computer.',
  },
  {
    question: 'Can guests RSVP from their phone?',
    answer: 'Yes. Guests can RSVP from their personalized invitation link, and you receive an email notification after each reply.',
  },
  {
    question: 'Can you match our colors and theme?',
    answer: 'Yes. Each invitation is customized around your colors, fonts, wording, photos, music, venue details, and story.',
  },
  {
    question: 'How much is the Guest Photo QR?',
    answer: 'Guest Photo QR is a separate product for a one-time $49. Add it to your invitation so guests can upload photos and videos to one shared gallery.',
  },
  {
    question: 'How long does setup take?',
    answer: 'Setup timing depends on your content and revision needs, but the process starts as soon as you share your event details, design direction, and guest requirements.',
  },
];

const invitationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Digital Invitation',
  description:
    'A beautifully crafted digital invitation tailored to your occasion, weddings, engagements, Kateb Kteb, baptisms, birthdays, Awwal Erbene and more. Includes RSVP management, custom guest links, music, and location with map. Guest Photo QR available separately for $49.',
  brand: { '@type': 'Brand', name: 'My Day' },
  category: 'Invitations',
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
  mainEntity: invitationFaqs.map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: answer,
    },
  })),
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
            <p className="eyebrow">Digital Invitation</p>
            <h1>The first thing<br />they&apos;ll <em>fall for</em>.</h1>
            <p className="sub">A beautifully crafted digital invitation for any occasion, weddings, engagements, Kateb Kteb, baptisms, birthdays, Awwal Erbene and more, tailored to your story, with everything your guests need to say yes and show up. One price, no per-guest fees, ever.</p>
            <div className="actions" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 34 }}>
              <Link className="btn btn--accent" href="#pricing">Get started for $99</Link>
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
              <p className="note">Invite ten guests or a thousand, the price never moves. Built once, beautifully, for your occasion.</p>
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
              </ul>
              <p className="addon-note">Add <Link href="/wedding-photo-qr-code">Guest Photo QR</Link> <span className="free-pill">+$49</span> to collect every guest&apos;s photos automatically.</p>
            </div>

          </div>
        </div>
      </section>


      <section className="faq" id="faq">
        <div className="wrap faq-wrap">
          <div className="faq-head">
            <p className="eyebrow">Digital invitation FAQ</p>
            <h2>Questions people ask before getting started.</h2>
            <p>Everything below is included in your custom digital invitation with RSVP and guest links, plus an optional Guest Photo QR for $49.</p>
          </div>
          <div className="faq-list">
            {invitationFaqs.map(({ question, answer }) => (
              <article className="faq-item" key={question}>
                <h3>{question}</h3>
                <p>{answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band" id="cta">
        <div className="wrap">
          <h2>Ready to send something <em>unforgettable</em>?</h2>
          <p>One beautiful invitation with unlimited guests, all for $99, and add the Guest Photo QR for $49.</p>
          <div className="actions">
            <a className="btn btn--light" href="https://wa.me/96178822978" target="_blank" rel="noopener noreferrer">CONTACT US ON WHATSAPP <span aria-hidden="true">↗</span></a>
            <Link className="btn btn--light-ghost" href="/wedding-photo-qr-code">Explore Guest Photo QR</Link>
          </div>
        </div>
      </section>

      <Footer middleText="One-time $99 · unlimited invitees · Guest Photo QR add-on $49" />

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
