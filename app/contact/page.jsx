import '../landing.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Contact mywedding.events',
  description: 'Contact mywedding.events to start a custom digital wedding invitation with RSVP and Guest Photo QR.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <div className="landing-page legal-page" data-screen-label="Contact">
      <Header centered withBrand={false} />
      <section className="landing-hero"><div className="inner"><p className="eyebrow">Contact</p><h1>Start your digital wedding invitation.</h1><p className="sub">Share your wedding date, venue, design preferences, and guest needs. We will guide you through the next steps.</p><div className="actions"><a className="btn btn--accent" href="https://wa.me/96178822978" target="_blank" rel="noopener noreferrer">Contact on WhatsApp ↗</a><a className="btn btn--ghost" href="mailto:hello@mywedding.events">Email us</a></div></div></section>
      <section className="landing-section"><div className="wrap landing-copy"><h2>What to send</h2><p>Include your names, wedding date, venue, preferred colors, invitation wording, music choice, and whether you need RSVP questions such as meal preference or plus-one details.</p><h2>What happens next</h2><p>We confirm the details, prepare your custom digital invitation, and help you share the finished link with your guests.</p></div></section>
      <Footer middleText="Contact · custom digital wedding invitations" />
    </div>
  );
}
