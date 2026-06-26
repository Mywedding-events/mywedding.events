import Link from 'next/link';

const footerLinks = [
  { href: '/digital-wedding-invitation', label: 'Digital Wedding Invitation' },
  { href: '/wedding-photo-qr-code', label: 'Wedding Photo QR Code' },
  { href: '/digital-wedding-invitations', label: 'Digital Wedding Invitations' },
  { href: '/wedding-rsvp-website', label: 'Wedding RSVP Website' },
  { href: '/faq', label: 'FAQs' },
  { href: '/contact', label: 'Contact' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms' },
];

export default function Footer({ middleText }) {
  return (
    <footer className="site-footer">
      <Link className="brand" href="/">
        <img className="brand-mark" src="/assets/mywedding-events-logo.png" alt="mywedding.events monogram" />
        <span className="brand-word">
          mywedding<span className="brand-dot">.</span>events
        </span>
      </Link>
      <nav className="footer-nav" aria-label="Footer navigation">
        {footerLinks.map((link) => (
          <Link href={link.href} key={link.href}>{link.label}</Link>
        ))}
      </nav>
      <span>{middleText}</span>
      <span>© 2026 mywedding.events</span>
    </footer>
  );
}
