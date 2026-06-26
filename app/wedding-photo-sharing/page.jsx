import '../landing.css';
import SeoLandingPage from '@/components/SeoLandingPage';

export const metadata = {
  title: 'Wedding photo sharing without scattered group chats',
  description: 'Collect candid wedding photos and videos from every guest in one private gallery using a QR code included with your digital invitation.',
  alternates: { canonical: '/wedding-photo-sharing' },
  openGraph: {
    url: '/wedding-photo-sharing',
    title: 'Wedding photo sharing without scattered group chats',
    description: 'Collect candid wedding photos and videos from every guest in one private gallery using a QR code included with your digital invitation.',
  },
};

const highlights = [
  { title: 'One gallery, not ten group chats', desc: 'Every guest’s photos collected in one place' },
  { title: 'Photos and videos together', desc: 'Keep the moving moments, not just the stills' },
  { title: 'No app for guests', desc: 'They scan a code and upload from the browser' },
  { title: 'Nothing lost after the day', desc: 'No more asking people to “send me that one”' },
  { title: 'Private to your wedding', desc: 'Shared only with the guests you invite' },
  { title: 'Included free with your invitation', desc: 'Comes with every $99 digital invitation' },
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
    eyebrow: 'Included free',
    heading: 'Part of your digital wedding invitation',
    paragraphs: [
      'Guest photo sharing comes free with every $99 digital wedding invitation through the Guest Photo QR, so your invitation, RSVP, and photos all come from one place.',
      'Message us on WhatsApp to set up your invitation with photo sharing included.',
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
  { question: 'How much does it cost?', answer: 'Photo sharing is included free with every $99 digital wedding invitation. Message us on WhatsApp to begin.' },
];

export default function Page() {
  return (
    <SeoLandingPage
      eyebrow='Wedding Photo Sharing'
      title='Wedding photo sharing without scattered group chats'
      intro='Collect candid wedding photos and videos from every guest in one private gallery, using a QR code included with your digital invitation.'
      heroImage='/images/guest-photo-qr-step-4-collect-gallery.png'
      heroImageAlt='A shared wedding gallery filled with photos uploaded by guests'
      highlights={highlights}
      highlightsTitle='Every guest’s photos, in one place'
      sections={sections}
      faqs={faqs}
      secondaryCta={{ label: 'Explore Guest Photo QR', href: '/wedding-photo-qr-code' }}
      ctaTitle='Ready to gather every photo from your day?'
      ctaText='Message us on WhatsApp and we’ll set up your digital invitation with free guest photo sharing, so the whole day is collected in one gallery.'
    />
  );
}
