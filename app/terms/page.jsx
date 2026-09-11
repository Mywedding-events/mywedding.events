import '../landing.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = { title: 'Terms of Service', description: 'Terms of Service for My Day digital invitations and Guest Photo QR.', alternates: { canonical: '/terms' } };

export default function TermsPage() {
  return <div className="landing-page legal-page"><Header centered withBrand={false} /><section className="landing-section"><div className="wrap landing-copy"><h1>Terms of Service</h1><p>Last updated: June 26, 2026.</p><h2>Services</h2><p>My Day provides custom digital invitation pages, RSVP features, guest links, and Guest Photo QR experiences for weddings, engagements, Kateb Kteb, baptisms, birthdays, Awwal Erbene and other celebrations.</p><h2>Client content</h2><p>You are responsible for providing accurate names, dates, venue details, images, music direction, and guest information. You must have the right to use any content you provide.</p><h2>Acceptable use</h2><p>You agree not to upload unlawful, harmful, infringing, or abusive content and not to share private event links publicly unless you intend public access.</p><h2>Contact</h2><p>For service questions, contact hello@mywedding.events or WhatsApp +961 78 822 978.</p></div></section><Footer middleText="Terms · custom digital invitations" /></div>;
}
