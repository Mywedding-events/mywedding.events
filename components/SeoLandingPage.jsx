import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const WHATSAPP = 'https://wa.me/96178822978';

function Tick() {
  return (
    <span className="tick" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M5 13l4 4L19 7" /></svg>
    </span>
  );
}

export default function SeoLandingPage({
  eyebrow,
  title,
  intro,
  heroImage = '/images/digital-wedding-invitation-phone-mockup.png',
  heroImageAlt = 'A digital wedding invitation displayed on a phone',
  secondaryCta = { label: 'See the $99 invitation', href: '/digital-wedding-invitation' },
  highlights,
  highlightsEyebrow = 'What’s included',
  highlightsTitle = 'Everything your wedding needs, in one link',
  highlightsNote = 'Included with your custom digital wedding invitation — a one-time $99, with unlimited guests and no per-guest fees.',
  sections,
  faqs,
  faqLead,
  ctaTitle = 'Ready to make your wedding details easier to share?',
  ctaText = 'Tell us about your wedding on WhatsApp and we’ll start your custom digital invitation — RSVP and a free Guest Photo QR included, all for one fair price.',
}) {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  };

  return (
    <div className="landing-page" data-screen-label={title}>
      <Header centered withBrand={false} />

      <section className="seo-hero">
        <div className="seo-hero__content">
          <div className="inner">
            <p className="eyebrow">{eyebrow}</p>
            <h1>{title}</h1>
            <p className="sub">{intro}</p>
            <div className="actions">
              <a className="btn btn--accent" href={WHATSAPP} target="_blank" rel="noopener noreferrer">Contact us on WhatsApp <span aria-hidden="true">↗</span></a>
              <Link className="btn btn--ghost" href={secondaryCta.href}>{secondaryCta.label}</Link>
            </div>
          </div>
        </div>
        <div className="seo-hero__media">
          <img src={heroImage} alt={heroImageAlt} loading="eager" fetchPriority="high" decoding="async" />
        </div>
      </section>

      {highlights && highlights.length > 0 ? (
        <section className="seo-highlights">
          <div className="wrap">
            <div className="seo-highlights__head">
              <p className="eyebrow">{highlightsEyebrow}</p>
              <h2>{highlightsTitle}</h2>
              {highlightsNote ? <p className="seo-highlights__note">{highlightsNote}</p> : null}
            </div>
            <ul className="seo-feat-list">
              {highlights.map((item) => (
                <li key={item.title}><Tick /><span className="ftxt">{item.title}<small>{item.desc}</small></span></li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {sections.map((section) => (
        <section className="landing-section" key={section.heading}>
          <div className="wrap landing-grid">
            <div>
              <p className="eyebrow">{section.eyebrow}</p>
              <h2>{section.heading}</h2>
            </div>
            <div className="landing-copy">
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.items ? (
                <ul className="landing-list">
                  {section.items.map((item) => <li key={item}><strong>{item.split(':')[0]}:</strong>{item.includes(':') ? item.slice(item.indexOf(':') + 1) : ''}</li>)}
                </ul>
              ) : null}
            </div>
          </div>
        </section>
      ))}

      <section className="landing-section" id="faq">
        <div className="wrap">
          <p className="eyebrow">FAQ</p>
          <h2>Helpful answers before you decide.</h2>
          {faqLead ? <p className="landing-faq-lead">{faqLead}</p> : null}
          <div className="landing-faq">
            {faqs.map(({ question, answer }) => (
              <article key={question}>
                <h3>{question}</h3>
                <p>{answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <h2>{ctaTitle}</h2>
          <p>{ctaText}</p>
          <div className="actions">
            <a className="btn btn--light" href={WHATSAPP} target="_blank" rel="noopener noreferrer">Contact us on WhatsApp <span aria-hidden="true">↗</span></a>
            <Link className="btn btn--light-ghost" href={secondaryCta.href}>{secondaryCta.label}</Link>
          </div>
        </div>
      </section>
      <Footer middleText="Digital invitations · RSVP · Guest Photo QR" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </div>
  );
}
