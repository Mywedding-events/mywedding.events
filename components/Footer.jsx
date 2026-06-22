import Link from 'next/link';

export default function Footer({ middleText }) {
  return (
    <footer className="site-footer">
      <Link className="brand" href="/">
        <img className="brand-mark" src="/assets/logo-trim.png" alt="mywedding.events monogram" />
        <span className="brand-word">
          mywedding<span className="brand-dot">.</span>events
        </span>
      </Link>
      <span>{middleText}</span>
      <span>© 2026 mywedding.events</span>
    </footer>
  );
}
