import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function SeoLandingPage({ eyebrow, title, intro, sections, faqs, primaryCta = 'Start your invitation', secondaryCta = 'Explore Photo QR' }) {
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
      <section className="landing-hero">
        <div className="inner">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="sub">{intro}</p>
          <div className="actions">
            <Link className="btn btn--accent" href="/digital-wedding-invitation">{primaryCta}</Link>
            <Link className="btn btn--ghost" href="/wedding-photo-qr-code">{secondaryCta}</Link>
          </div>
        </div>
      </section>

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
          <h2>Ready to make your wedding details easier to share?</h2>
          <p>Get a custom digital invitation with RSVP and Guest Photo QR for one fair price.</p>
          <div className="actions">
            <Link className="btn btn--light" href="/digital-wedding-invitation">See the $99 invitation</Link>
            <a className="btn btn--light-ghost" href="https://wa.me/96178822978" target="_blank" rel="noopener noreferrer">Contact on WhatsApp ↗</a>
          </div>
        </div>
      </section>
      <Footer middleText="Digital invitations · RSVP · Guest Photo QR" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </div>
  );
}
