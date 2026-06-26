import '../landing.css';
import SeoLandingPage from '@/components/SeoLandingPage';

export const metadata = {
  title: 'A wedding RSVP website without the complicated setup',
  description: 'Collect replies, plus-one details, and guest confirmations through a custom digital invitation built around your wedding day.',
  alternates: { canonical: '/wedding-rsvp-website' },
  openGraph: {
    url: '/wedding-rsvp-website',
    title: 'A wedding RSVP website without the complicated setup',
    description: 'Collect replies, plus-one details, and guest confirmations through a custom digital invitation built around your wedding day.',
  },
};

const highlights = [
  { title: 'Yes / no replies in one dashboard', desc: 'See your headcount update as guests respond' },
  { title: 'Plus-one and guest details', desc: 'Know exactly who each guest is bringing' },
  { title: 'Custom RSVP questions', desc: 'Ask about meal choice, allergies, or song requests' },
  { title: 'Email notification after each reply', desc: 'A gentle alert the moment someone responds' },
  { title: 'A personal link per guest', desc: 'Replies are tied to the right name automatically' },
  { title: 'No app, no logins for guests', desc: 'They simply tap their link and confirm' },
];

const sections = [
  {
    eyebrow: 'The problem',
    heading: 'Chasing replies across texts and group chats is exhausting',
    paragraphs: [
      'Most couples end up tracking RSVPs across WhatsApp messages, a spreadsheet, and a few phone calls — and still lose count the week before the wedding. Plus-ones get missed and meal numbers are a guess.',
      'A dedicated wedding RSVP website pulls every reply into one place, so your headcount is always current and you are never reconstructing it from scattered messages.',
    ],
    items: null,
  },
  {
    eyebrow: 'How RSVP works',
    heading: 'Each guest gets a link, you get a clear headcount',
    paragraphs: [
      'Your RSVP form lives inside your custom digital invitation. Each guest opens their personal link, confirms whether they are coming, adds their plus-one, and answers any questions you have set, such as meal preference.',
      'Every response is recorded against that guest, and you receive an email notification with each reply — no spreadsheet to maintain and no replies slipping through the cracks.',
    ],
    items: null,
  },
  {
    eyebrow: 'One fair price',
    heading: 'RSVP is included — not a paid add-on',
    paragraphs: [
      'RSVP management, custom questions, and email notifications all come with your one-time $99 invitation. There is no per-guest charge, so it costs the same whether you invite fifty guests or five hundred.',
      'Message us on WhatsApp with your guest questions and we will set up your RSVP flow.',
    ],
    items: null,
  },
];

const faqs = [
  { question: 'How do guests RSVP?', answer: 'Each guest opens their personalized invitation link and confirms in a couple of taps — including their plus-one and answers to any questions you set, like meal choice.' },
  { question: 'Do guests need an account or app?', answer: 'No. The RSVP form opens in any browser. There is nothing to download and no login to create.' },
  { question: 'Can I ask custom questions?', answer: 'Yes. You can collect meal preferences, dietary needs, song requests, or anything else you want to know before the day.' },
  { question: 'Will I be notified when someone replies?', answer: 'Yes. You receive an email notification after each RSVP, and replies are organized by guest in one place.' },
  { question: 'Can guests change their reply?', answer: 'Yes. Guests can update their response if their plans change, so your headcount stays accurate.' },
  { question: 'Is RSVP an extra cost?', answer: 'No. RSVP management is included in the one-time $99 digital invitation, with no per-guest fees.' },
];

export default function Page() {
  return (
    <SeoLandingPage
      eyebrow='Wedding RSVP Website'
      title='A wedding RSVP website without the complicated setup'
      intro='Collect replies, plus-one details, and guest confirmations through a custom digital invitation built around your wedding day — with a clear headcount you can trust.'
      heroImage='/images/invitation-phone-new.png'
      heroImageAlt='A wedding RSVP form open on a phone showing reply and plus-one options'
      highlights={highlights}
      highlightsTitle='Everything you need to manage replies'
      sections={sections}
      faqs={faqs}
      faqLead='RSVP management, custom questions, and email notifications are all included in your custom digital wedding invitation.'
      ctaText='Tell us the questions you want to ask your guests on WhatsApp and we’ll build your RSVP flow into a custom digital invitation — included for one fair price.'
    />
  );
}
