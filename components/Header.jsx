import Link from 'next/link';

const NAV_ITEMS = [
  { href: '/invitation', label: 'Digital Invitation', key: 'invitation' },
  { href: '/photo-qr', label: 'Guest Photo QR', key: 'photo-qr', tag: { text: 'Free', kind: 'free' } },
  { label: 'Photographers', key: 'photographers', disabled: true, tag: { text: 'Coming Soon', kind: 'soon' } },
  { label: 'Restaurants', key: 'restaurants', disabled: true, tag: { text: 'Coming Soon', kind: 'soon' } },
  { label: 'Musicians', key: 'musicians', disabled: true, tag: { text: 'Coming Soon', kind: 'soon' } },
];

export default function Header({ active, centered = false, withBrand = true }) {
  return (
    <header className={'site-header' + (centered ? ' site-header--center' : '')}>
      {withBrand && (
        <Link className="brand" href="/">
          <img className="brand-mark" src="/assets/mywedding-events-logo.png" alt="mywedding.events monogram" />
          <span className="brand-word">
            mywedding<span className="brand-dot">.</span>events
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
