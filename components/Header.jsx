import Link from 'next/link';

const NAV_ITEMS = [
  { href: '/digital-wedding-invitation', label: 'Digital Invitation', key: 'invitation' },
  { href: '/wedding-photo-qr-code', label: 'Guest Photo QR', key: 'photo-qr' },
];

export default function Header({ active, centered = false, withBrand = true }) {
  return (
    <header className={'site-header' + (centered ? ' site-header--center' : '')}>
      {withBrand && (
        <Link className="brand" href="/">
          <img className="brand-mark" src="/assets/my-day-logo.svg" alt="My Day" />
          <span className="brand-word">
            My <span className="brand-accent">Day</span>
          </span>
        </Link>
      )}
      <nav className="nav">
        {NAV_ITEMS.map((item) => {
          const isActive = active === item.key;
          const tag = item.tag && (
            <span className={'nav-tag nav-tag--' + item.tag.kind}>{item.tag.text}</span>
          );
          if (item.disabled) {
            return (
              <span key={item.key} className="nav-link is-disabled">
                <span className="nav-label">{item.label}</span>
                {tag}
              </span>
            );
          }
          return (
            <Link
              key={item.key}
              className={'nav-link' + (isActive ? ' is-active' : '')}
              href={item.href}
            >
              <span className="nav-label">{item.label}</span>
              {tag}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
