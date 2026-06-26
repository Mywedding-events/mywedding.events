'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const TOTAL = 4;

export default function Slider() {
  const [i, setI] = useState(0);
  const wheelLockRef = useRef(false);
  const touchStartRef = useRef(null);
  const hasRestoredRef = useRef(false);

  const go = useCallback((idx) => {
    const next = Math.max(0, Math.min(TOTAL - 1, idx));
    setI(next);
    try {
      localStorage.setItem('mwe_home_slide', String(next));
    } catch (_) {}
  }, []);

  useEffect(() => {
    if (hasRestoredRef.current) return;
    hasRestoredRef.current = true;
    try {
      const saved = parseInt(localStorage.getItem('mwe_home_slide') || '0', 10);
      if (Number.isFinite(saved)) setI(Math.max(0, Math.min(TOTAL - 1, saved)));
    } catch (_) {}
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') go(i + 1);
      if (e.key === 'ArrowLeft') go(i - 1);
    };
    const onWheel = (e) => {
      if (wheelLockRef.current) return;
      const d = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (Math.abs(d) < 12) return;
      wheelLockRef.current = true;
      go(i + (d > 0 ? 1 : -1));
      setTimeout(() => { wheelLockRef.current = false; }, 850);
    };
    const onTouchStart = (e) => { touchStartRef.current = e.touches[0].clientX; };
    const onTouchEnd = (e) => {
      if (touchStartRef.current === null) return;
      const dx = e.changedTouches[0].clientX - touchStartRef.current;
      if (Math.abs(dx) > 45) go(i + (dx < 0 ? 1 : -1));
      touchStartRef.current = null;
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('wheel', onWheel, { passive: true });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchend', onTouchEnd, { passive: true });
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, [i, go]);

  const slideClass = (k) => 'slide' + (k === i ? ' is-active' : '');

  return (
    <div className="stage">
      <div className="track" id="track" style={{ transform: `translateX(${-i * 100}%)` }}>

        <section className={slideClass(0)} data-screen-label="Slide 01 — Welcome">
          <div className="slide__content">
            <div className="inner">
              <p className="eyebrow anim d1">Beautiful weddings, beautifully organized</p>
              <h2 className="lead anim d2">Your wedding,<br />in one <em>beautiful</em> place.</h2>
              <p className="sub anim d3">Send a digital wedding invitation guests will adore, collect every shared photo with a single QR code, and—soon—book the people who make the day. All under one calm, considered roof.</p>
              <div className="actions anim d4">
                <Link className="btn btn--accent" href="/digital-wedding-invitation">Create your invitation</Link>
                <Link className="btn btn--ghost" href="/wedding-photo-qr-code">Guest Photo QR</Link>
              </div>
            </div>
          </div>
          <div className="slide__media">
            <img className="ph-img" style={{ objectPosition: '50% 40%' }} src="/images/santorini-wedding-couple-portrait.png" alt="A bride and groom walking a whitewashed Santorini path above the caldera at sunset" width="2160" height="2700" loading="eager" fetchPriority="high" decoding="async" />
          </div>
        </section>

        <section className={slideClass(1)} data-screen-label="Slide 02 — Digital Invitation">
          <div className="slide__content">
            <div className="inner">
              <p className="eyebrow anim d1">Digital Wedding Invitation</p>
              <h2 className="lead anim d2">An invitation<br />worthy of the <em>day</em>.</h2>
              <div className="price-row anim d3">
                <span className="price"><sup>$</sup>99</span>
                <span className="price-note">one-time · unlimited invitees</span>
              </div>
              <ul className="mini-list anim d3">
                <li>Customized to your style, with location, map &amp; music</li>
                <li>RSVP management with an email after every reply</li>
                <li>A custom link for each invitee</li>
              </ul>
              <div className="actions anim d4">
                <Link className="btn" href="/digital-wedding-invitation">See everything included</Link>
              </div>
            </div>
          </div>
          <div className="slide__media">
            <img className="ph-img" style={{ objectPosition: 'center' }} src="/images/digital-wedding-invitation-phone-mockup.png" alt="An elegant digital wedding invitation displayed on a phone with RSVP and venue details" width="1072" height="1467" loading="lazy" decoding="async" />
          </div>
        </section>

        <section className={slideClass(2)} data-screen-label="Slide 03 — Guest Photo QR">
          <div className="slide__content">
            <div className="inner">
              <p className="eyebrow anim d1">Guest Photo QR · <span className="serif-italic" style={{ textTransform: 'none', letterSpacing: 0, fontSize: '1.2em' }}>Free</span></p>
              <h2 className="lead anim d2">Every photo,<br />from <em>every</em> guest.</h2>
              <p className="sub anim d3">One little QR code on each table. Guests scan, upload the moments they captured, and your whole shared wedding photo gallery fills itself—no apps, no chasing, no cost.</p>
              <div className="actions anim d4">
                <Link className="btn btn--accent" href="/wedding-photo-qr-code">How it works</Link>
              </div>
            </div>
          </div>
          <div className="slide__media">
            <img className="ph-img" style={{ objectPosition: '45% 46%' }} src="/images/wedding-guest-photo-qr-code.png" alt="A wedding guest scanning a 'Capture the Love' table card QR code to upload photos to a shared gallery" width="1136" height="1385" loading="lazy" decoding="async" />
          </div>
        </section>

        <section className={slideClass(3) + ' trio-slide'} data-screen-label="Slide 04 — Coming Soon">
          <div className="trio-wrap">
            <div className="trio-head">
              <p className="eyebrow anim d1">On the way</p>
              <h2 className="lead anim d2">The people who make <em>the day</em>.</h2>
            </div>
            <div className="trio">
              <article className="trio-card anim d3">
                <div className="ph"><img className="ph-fill" src="/images/wedding-photographer.png" alt="Wedding photographer capturing a couple at golden hour" width="1500" height="1200" loading="lazy" decoding="async" /></div>
                <div className="trio-meta"><h3>Photographers</h3><span className="tag">Coming Soon</span></div>
              </article>
              <article className="trio-card anim d3">
                <div className="ph"><img className="ph-fill" src="/images/wedding-reception-restaurant.png" alt="Elegant wedding reception table setting at a restaurant venue" width="1402" height="1122" loading="lazy" decoding="async" /></div>
                <div className="trio-meta"><h3>Restaurants</h3><span className="tag">Coming Soon</span></div>
              </article>
              <article className="trio-card anim d4">
                <div className="ph"><img className="ph-fill" style={{ objectPosition: '72% center' }} src="/images/wedding-musicians.png" alt="A wedding singer performing amid candles and white roses" width="1402" height="1122" loading="lazy" decoding="async" /></div>
                <div className="trio-meta"><h3>Musicians</h3><span className="tag">Coming Soon</span></div>
              </article>
            </div>
          </div>
        </section>

      </div>

      <noscript>
        <div className="noscript-content">
          <section>
            <h2>Your wedding, in one beautiful place.</h2>
            <p>Send a digital wedding invitation guests will adore, collect every shared photo with a single QR code, and—soon—book the people who make the day.</p>
            <p><Link href="/digital-wedding-invitation">Create your digital wedding invitation</Link> · <Link href="/wedding-photo-qr-code">Guest Photo QR</Link></p>
          </section>
          <section>
            <h2>Digital Wedding Invitation — $99</h2>
            <p>One-time payment, unlimited invitees, RSVP management, custom guest links, location with map, music, and a free Guest Photo QR.</p>
          </section>
          <section>
            <h2>Guest Photo QR — Free</h2>
            <p>One QR code per table. Guests scan, upload their photos, and your shared wedding gallery fills itself — no apps, no chasing.</p>
          </section>
        </div>
      </noscript>

      <button className="arrow arrow--prev" aria-label="Previous" disabled={i === 0} onClick={() => go(i - 1)}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M15 5l-7 7 7 7" /></svg>
      </button>
      <button className="arrow arrow--next" aria-label="Next" disabled={i === TOTAL - 1} onClick={() => go(i + 1)}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M9 5l7 7-7 7" /></svg>
      </button>

      <div className="dots">
        {Array.from({ length: TOTAL }).map((_, idx) => (
          <button
            key={idx}
            className={'dot' + (idx === i ? ' is-active' : '')}
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => go(idx)}
          />
        ))}
      </div>
      <div className="counter">
        <b>{String(i + 1).padStart(2, '0')}</b> / <span>{String(TOTAL).padStart(2, '0')}</span>
      </div>
    </div>
  );
}
