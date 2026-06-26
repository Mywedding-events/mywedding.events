import '../landing.css';
import SeoLandingPage from '@/components/SeoLandingPage';

export const metadata = {
  title: 'Wedding photo sharing QR code for guest uploads',
  description: 'Give guests one simple QR code to upload wedding photos and videos into a shared gallery without asking anyone to download an app.',
  alternates: { canonical: '/wedding-photo-sharing-qr-code' },
  openGraph: {
    url: '/wedding-photo-sharing-qr-code',
    title: 'Wedding photo sharing QR code for guest uploads',
    description: 'Give guests one simple QR code to upload wedding photos and videos into a shared gallery without asking anyone to download an app.',
  },
};

const highlights = [
  { title: 'One QR code for everyone', desc: 'Place it on tables, signs, or your invitation' },
  { title: 'Scan and upload in seconds', desc: 'Guests use their phone camera — no app needed' },
  { title: 'Photos and videos welcome', desc: 'Capture the candids your photographer can’t' },
  { title: 'Everything in one gallery', desc: 'No scattered group chats or lost albums' },
  { title: 'Works for every guest', desc: 'Any modern phone, any age, no learning curve' },
  { title: 'Included free with your invitation', desc: 'Guest Photo QR comes with every $99 invitation' },
];

const sections = [
  {
    eyebrow: 'How it works',
    heading: 'Guests scan, snap, and upload — that’s it',
    paragraphs: [
      'You display the QR code wherever guests gather — on each table, near the bar, or printed on your invitation. Guests point their phone camera at it, and the upload page opens instantly in the browser.',
      'From there they add the photos and videos they captured, and everything lands in one shared gallery for you to keep. No accounts, no app downloads, no chasing people for their pictures afterward.',
    ],
    items: null,
  },
  {
    eyebrow: 'Why a QR code',
    heading: 'The candid moments your photographer can’t catch',
    paragraphs: [
      'A photographer captures the day beautifully, but they can only be in one place at a time. Your guests are everywhere — at the tables, on the dance floor, in the quiet moments between.',
      'A photo sharing QR code turns every guest into a second camera, so you end up with the laughs, reactions, and behind-the-scenes shots that would otherwise live on a dozen phones forever.',
    ],
    items: null,
  },
  {
    eyebrow: 'Included free',
    heading: 'Part of your digital wedding invitation',
    paragraphs: [
      'Guest Photo QR is included free with every $99 digital wedding invitation — so your invitation, RSVP, and photo collection all come from one place.',
      'Message us on WhatsApp to set up your invitation with the photo QR included.',
    ],
    items: null,
  },
];

const faqs = [
  { question: 'How does the photo sharing QR code work?', answer: 'Guests point their phone camera at the QR code, the upload page opens in the browser, and they add their photos and videos to your shared gallery — no app required.' },
  { question: 'Do guests need to download anything?', answer: 'No. Scanning the code opens the upload page directly in the browser on any modern phone.' },
  { question: 'Can guests upload videos too?', answer: 'Yes. The QR code accepts both photos and videos, so you capture the moments as well as the moods.' },
  { question: 'Where should we place the QR code?', answer: 'Anywhere guests gather — on each table, on signage, at the bar, or printed on your invitation. One code works for everyone.' },
  { question: 'Where do the photos go?', answer: 'Every upload lands in one shared gallery for you, instead of being scattered across group chats and individual phones.' },
  { question: 'How much does it cost?', answer: 'Guest Photo QR is included free with every $99 digital wedding invitation. Message us on WhatsApp to get started.' },
];

export default function Page() {
  return (
    <SeoLandingPage
      eyebrow='Wedding Photo Sharing QR Code'
      title='A wedding photo sharing QR code for guest uploads'
      intro='Give guests one simple QR code to upload wedding photos and videos into a shared gallery — without asking anyone to download an app.'
      heroImage='/images/wedding-guest-photo-qr-code.png'
      heroImageAlt='A wedding photo sharing QR code on a table for guests to scan and upload photos'
      highlights={highlights}
      highlightsTitle='Everything your guests need to share photos'
      sections={sections}
      faqs={faqs}
      secondaryCta={{ label: 'Explore Guest Photo QR', href: '/wedding-photo-qr-code' }}
      ctaTitle='Ready to collect every guest’s photos?'
      ctaText='Message us on WhatsApp and we’ll set up your digital invitation with the free Guest Photo QR so every guest can share their photos and videos in one place.'
    />
  );
}
