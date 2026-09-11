import '../landing.css';
import SeoLandingPage from '@/components/SeoLandingPage';

export const metadata = {
  title: 'Wedding photo sharing without scattered group chats',
  description: 'Collect candid wedding photos and videos from every guest in one private gallery using the $49 Guest Photo QR.',
  alternates: { canonical: '/wedding-photo-sharing' },
  openGraph: {
    url: '/wedding-photo-sharing',
    title: 'Wedding photo sharing without scattered group chats',
    description: 'Collect candid wedding photos and videos from every guest in one private gallery using the $49 Guest Photo QR.',
  },
};

const highlights = [
  { title: 'One gallery, not ten group chats', desc: 'Every guest’s photos collected in one place' },
  { title: 'Photos and videos together', desc: 'Keep the moving moments, not just the stills' },
  { title: 'No app for guests', desc: 'They scan a code and upload from the browser' },
  { title: 'Nothing lost after the day', desc: 'No more asking people to “send me that one”' },
  { title: 'Private to your wedding', desc: 'Shared only with the guests you invite' },
  { title: 'A simple one-time $49', desc: 'No subscription and no per-guest fees' },
];

const sections = [
  {
    eyebrow: 'The problem',
    heading: 'The best photos are stuck on everyone else’s phones',
    paragraphs: [
      'After the wedding, the moments you most want are scattered — a few in a group chat, some on a cousin’s phone, others never shared at all. Collecting them means weeks of asking and still missing most.',
      'Wedding photo sharing fixes that by giving guests one easy way to send everything to the same place, while the day is still fresh.',
    ],
    items: null,
  },
  {
    eyebrow: 'How it works',
    heading: 'Every guest contributes to one shared gallery',
    paragraphs: [
      'Guests scan a simple QR code, and the upload page opens in their browser. They add the photos and videos they took, and each one lands in a single gallery you keep — no accounts, no app, no friction.',
      'Instead of chasing pictures one by one, you end up with the whole day from every angle, gathered in one place automatically.',
    ],
    items: null,
  },
  {
    eyebrow: 'Simple pricing',
    heading: 'A one-time $49, on its own or alongside your invitation',
    paragraphs: [
      'Guest photo sharing runs on the Guest Photo QR — a standalone product for a one-time $49. Order it on its own, or add it to your $99 digital wedding invitation so your invitation, RSVP, and photos all come from one place.',
      'Message us on WhatsApp to set up your Guest Photo QR.',
    ],
    items: null,
  },
];

const faqs = [
  { question: 'How do guests share their photos?', answer: 'Guests scan a QR code, which opens an upload page in the browser, then add their photos and videos to one shared gallery — no app or account needed.' },
  { question: 'Does it collect videos as well?', answer: 'Yes. Both photos and videos can be uploaded, so the moving moments are kept alongside the stills.' },
  { question: 'Is the gallery private?', answer: 'Yes. The gallery is for your wedding and shared only with the guests you give the link or code to.' },
  { question: 'Why not just use a group chat?', answer: 'Group chats compress photos, scatter them across threads, and miss anyone not in the chat. One shared gallery keeps everything together at full quality.' },
  { question: 'Do guests need to install an app?', answer: 'No. Everything happens in the browser after scanning the code.' },
  { question: 'How much does it cost?', answer: 'Guest photo sharing runs on the Guest Photo QR, a one-time $49. Message us on WhatsApp to begin.' },
];

export default function Page() {
  return (
    <SeoLandingPage
      eyebrow='Wedding Photo Sharing'
      title='Wedding photo sharing without scattered group chats'
      intro='Collect candid wedding photos and videos from every guest in one private gallery, using the Guest Photo QR — a one-time $49.'
      heroImage='/images/guest-photo-qr-step-4-collect-gallery.png'
      heroImageAlt='A shared wedding gallery filled with photos uploaded by guests'
      highlights={highlights}
      highlightsTitle='Every guest’s photos, in one place'
      sections={sections}
      faqs={faqs}
      secondaryCta={{ label: 'Explore Guest Photo QR', href: '/wedding-photo-qr-code' }}
      ctaTitle='Ready to gather every photo from your day?'
      ctaText='Message us on WhatsApp and we’ll set up your Guest Photo QR for $49, so the whole day is collected in one gallery.'
    />
  );
}
