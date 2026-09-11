import Link from 'next/link';

const footerLinks = [
  { href: '/digital-wedding-invitation', label: 'Digital Invitations' },
  { href: '/wedding-photo-qr-code', label: 'Guest Photo QR' },
  { href: '/digital-wedding-invitations', label: 'For Weddings' },
  { href: '/wedding-rsvp-website', label: 'RSVP Website' },
  { href: '/faq', label: 'FAQs' },
  { href: '/contact', label: 'Contact' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms' },
];

export default function Footer({ middleText }) {
  return (
    <footer className="site-footer">
      <Link className="brand" href="/">
        <img className="brand-mark" src="/assets/my-day-logo.svg" alt="My Day" />
        <span className="brand-word">
          My <span className="brand-accent">Day</span>
        </span>
      </Link>
      <nav className="footer-nav" aria-label="Footer navigation">
        {footerLinks.map((link) => (
          <Link href={link.href} key={link.href}>{link.label}</Link>
        ))}
      </nav>
      <span>{middleText}</span>
      <span>© 2026 My Day</span>
    </footer>
  );
}
