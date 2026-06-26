import '../landing.css';
import SeoLandingPage from '@/components/SeoLandingPage';

export const metadata = {
  title: 'Paperless wedding invitations with less waste and more control',
  description: 'Skip printing delays and mailing stress with a custom paperless wedding invitation that includes RSVP, maps, music, and guest photo collection.',
  alternates: { canonical: '/paperless-wedding-invitations' },
  openGraph: {
    url: '/paperless-wedding-invitations',
    title: 'Paperless wedding invitations with less waste and more control',
    description: 'Skip printing delays and mailing stress with a custom paperless wedding invitation that includes RSVP, maps, music, and guest photo collection.',
  },
};

const highlights = [
  { title: 'No printing, no mailing', desc: 'Skip print runs, postage, and lost envelopes' },
  { title: 'Send in minutes, not weeks', desc: 'Share the moment it’s ready — no production wait' },
  { title: 'Update details anytime', desc: 'Fix a time or venue without reprinting a thing' },
  { title: 'Kinder to the planet', desc: 'No paper, no waste, no return-to-sender stack' },
  { title: 'RSVP and venue map built in', desc: 'Everything guests need without an insert card' },
  { title: 'Free Guest Photo QR', desc: 'Collect the day’s photos in one shared gallery' },
];

const sections = [
  {
    eyebrow: 'Why paperless',
    heading: 'All the elegance of a card, none of the print run',
    paragraphs: [
      'Printed suites are lovely, but they come with proofs, print runs, postage, and the inevitable handful that arrive late or never arrive at all. A paperless wedding invitation removes that whole production line.',
      'You keep the elegance of a custom design and gain something paper can’t offer: an invitation you can send instantly and update whenever plans shift.',
    ],
    items: null,
  },
  {
    eyebrow: 'Less waste',
    heading: 'A choice your guests — and the planet — appreciate',
    paragraphs: [
      'Going paperless means no stacks of unused cards, no envelopes in the recycling, and no extra prints “just in case.” It is a small, visible way to keep your celebration thoughtful.',
      'And because nothing is mailed, last-minute guests are as easy to add as forwarding a link.',
    ],
    items: null,
  },
  {
    eyebrow: 'One fair price',
    heading: 'One-time $99, unlimited guests',
    paragraphs: [
      'There is no per-guest cost and no subscription. Invite as many people as you like for a single price, with RSVP and the free Guest Photo QR included.',
      'Message us on WhatsApp with your wedding details to start your paperless invitation.',
    ],
    items: null,
  },
];

const faqs = [
  { question: 'What is a paperless wedding invitation?', answer: 'It is a custom digital invitation you share as a link instead of a printed card — with your details, venue map, music, and RSVP all in one place.' },
  { question: 'Does paperless mean it looks less special?', answer: 'Not at all. Your invitation is custom-designed around your colors, fonts, and photos, so it feels just as considered as a printed suite.' },
  { question: 'How do I send it to guests?', answer: 'Share the link by WhatsApp or email, or add a QR code to a small printed insert if you’d like a physical touch.' },
  { question: 'Can I still add guests late?', answer: 'Yes. Adding a guest is as simple as sending another link — no reprinting or extra postage.' },
  { question: 'Is RSVP included?', answer: 'Yes. RSVP management, email notifications, and a free Guest Photo QR are all included.' },
  { question: 'How much does it cost?', answer: 'A one-time $99 with unlimited guests and no per-guest fees. Message us on WhatsApp to get started.' },
];

export default function Page() {
  return (
    <SeoLandingPage
      eyebrow='Paperless Wedding Invitations'
      title='Paperless wedding invitations with less waste and more control'
      intro='Skip printing delays and mailing stress with a custom paperless wedding invitation that includes RSVP, maps, music, and guest photo collection.'
      heroImage='/images/santorini-wedding-couple-portrait.png'
      heroImageAlt='A couple celebrating their wedding without printed invitations'
      highlights={highlights}
      highlightsTitle='Why couples choose to go paperless'
      sections={sections}
      faqs={faqs}
    />
  );
}
