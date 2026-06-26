import '../landing.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = { title: 'Privacy Policy', description: 'Privacy Policy for mywedding.events digital wedding invitations and Guest Photo QR.', alternates: { canonical: '/privacy-policy' } };

export default function PrivacyPolicyPage() {
  return <div className="landing-page legal-page"><Header centered withBrand={false} /><section className="landing-section"><div className="wrap landing-copy"><h1>Privacy Policy</h1><p>Last updated: June 26, 2026.</p><h2>Information we collect</h2><p>We may collect wedding details, contact information, RSVP responses, guest names, uploaded photos or videos, and messages you send to us so we can provide digital invitation and Guest Photo QR services.</p><h2>How we use information</h2><p>We use information to create and operate your invitation, manage RSVP responses, provide support, improve the service, and communicate with you about your order.</p><h2>Guest uploads</h2><p>Guest photos and videos are provided for the couple’s wedding gallery. Couples should only share upload links and QR codes with intended guests.</p><h2>Contact</h2><p>For privacy questions, contact hello@mywedding.events or WhatsApp +961 78 822 978.</p></div></section><Footer middleText="Privacy · RSVP · Guest Photo QR" /></div>;
}
