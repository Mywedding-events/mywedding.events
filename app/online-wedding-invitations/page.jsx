import '../landing.css';
import SeoLandingPage from '@/components/SeoLandingPage';

export const metadata = {
  title: 'Online wedding invitations that feel personal',
  description: 'Send a beautiful online wedding invitation guests can open anywhere, with RSVP tracking, venue details, and a polished experience from first tap to final reply.',
  alternates: { canonical: '/online-wedding-invitations' },
  openGraph: {
    url: '/online-wedding-invitations',
    title: 'Online wedding invitations that feel personal',
    description: 'Send a beautiful online wedding invitation guests can open anywhere, with RSVP tracking, venue details, and a polished experience from first tap to final reply.',
  },
};

const highlights = [
  { title: 'Opens on any phone or computer', desc: 'Nothing to install — just tap the link' },
  { title: 'Share it however you like', desc: 'WhatsApp, email, or a QR code on a printed insert' },
  { title: 'Always up to date', desc: 'Change a time or detail without reprinting anything' },
  { title: 'Personal greeting per guest', desc: 'Each link feels addressed to that guest' },
  { title: 'RSVP and venue map included', desc: 'Everything guests need in one place' },
  { title: 'Free Guest Photo QR', desc: 'Gather candid moments from the whole celebration' },
];

const sections = [
  {
    eyebrow: 'Why online',
    heading: 'One link your guests can open anywhere',
    paragraphs: [
      'An online wedding invitation goes wherever your guests are. There is no envelope to mail, no app to download, and no waiting on the post — you send a link and it opens instantly on any device.',
      'Because it lives online, it can hold far more than a card ever could: your story, the schedule, directions, music, and a place to reply, all in one elegant experience.',
    ],
    items: null,
  },
  {
    eyebrow: 'Polished, not generic',
    heading: 'A custom design, not a template everyone recognizes',
    paragraphs: [
      'Free online invitation builders tend to look the same. Your invitation is designed around your wedding — your colors, fonts, wording, and photos — so it feels like yours from the first screen.',
      'The result is a calm, considered experience that reflects the tone of your celebration rather than a busy form.',
    ],
    items: null,
  },
  {
    eyebrow: 'One fair price',
    heading: 'Unlimited guests for a one-time $99',
    paragraphs: [
      'Send your invitation to as many guests as you like — the price never changes and there are no subscriptions. RSVP and the free Guest Photo QR are included.',
      'Message us on WhatsApp with your details and we will start your online invitation.',
    ],
    items: null,
  },
];

const faqs = [
  { question: 'How do guests open an online invitation?', answer: 'You share a link by WhatsApp, email, or a QR code. Guests tap it and the invitation opens in their browser — no app and no account needed.' },
  { question: 'Can I update details after sending it?', answer: 'Yes. Because it lives online, details like timing or directions can be updated without reprinting or resending anything.' },
  { question: 'Does it work on older phones?', answer: 'Yes. The invitation is built to open smoothly on any modern phone, tablet, or computer.' },
  { question: 'Is it a template or a custom design?', answer: 'It is custom. Your invitation is designed around your wedding colors, fonts, wording, photos, and venue details.' },
  { question: 'Is RSVP included?', answer: 'Yes. RSVP management and email notifications are included, along with a free Guest Photo QR.' },
  { question: 'How much does it cost?', answer: 'A one-time $99 with unlimited guests and no per-guest fees. Message us on WhatsApp to begin.' },
];

export default function Page() {
  return (
    <SeoLandingPage
      eyebrow='Online Wedding Invitations'
      title='Online wedding invitations that feel personal'
      intro='Send a beautiful online wedding invitation guests can open anywhere, with RSVP tracking, venue details, and a polished experience from the first tap to the final reply.'
      heroImage='/images/invitation-phone-mockup.png'
      heroImageAlt='An online wedding invitation open in a phone browser with the couple’s details'
      highlights={highlights}
      highlightsTitle='Why couples send their invitation online'
      sections={sections}
      faqs={faqs}
    />
  );
}
