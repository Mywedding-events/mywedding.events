import '../landing.css';
import SeoLandingPage from '@/components/SeoLandingPage';

export const metadata = {
  title: 'Digital wedding invitation with RSVP tracking built in',
  description: 'Send a custom digital wedding invitation where guests can view details, open the map, enjoy your music, and RSVP from their personalized link.',
  alternates: { canonical: '/digital-wedding-invitation-with-rsvp' },
  openGraph: {
    url: '/digital-wedding-invitation-with-rsvp',
    title: 'Digital wedding invitation with RSVP tracking built in',
    description: 'Send a custom digital wedding invitation where guests can view details, open the map, enjoy your music, and RSVP from their personalized link.',
  },
};

const highlights = [
  { title: 'Invitation and RSVP in one link', desc: 'Guests view the details and reply on the same page' },
  { title: 'Replies tied to each guest', desc: 'Personal links keep your headcount accurate' },
  { title: 'Plus-one and meal questions', desc: 'Ask what you need before the day arrives' },
  { title: 'Email notification per reply', desc: 'Know the moment someone confirms' },
  { title: 'Venue map and music included', desc: 'Everything in one guest-friendly experience' },
  { title: 'Free Guest Photo QR', desc: 'Collect the day’s candid moments afterward' },
];

const sections = [
  {
    eyebrow: 'One experience',
    heading: 'The invitation and the RSVP live in the same place',
    paragraphs: [
      'When the invitation and the reply form are separate, guests read the details in one place and then have to hunt for a form somewhere else — and some never make it back. Here, both live behind one link.',
      'A guest opens your invitation, reads the story and details, opens the venue map, and replies — all without leaving the page or switching to another tool.',
    ],
    items: null,
  },
  {
    eyebrow: 'Accurate headcount',
    heading: 'Every reply lands against the right guest',
    paragraphs: [
      'Because each guest has a personalized link, their RSVP is recorded against their name automatically. You see who is coming, who is bringing a plus-one, and any answers you asked for, like meal choice.',
      'You also get an email notification with each reply, so your numbers stay current without a spreadsheet to maintain.',
    ],
    items: null,
  },
  {
    eyebrow: 'One fair price',
    heading: 'Invitation and RSVP for a one-time $99',
    paragraphs: [
      'RSVP is not a separate add-on — it is part of the same $99 invitation, with unlimited guests and no per-guest fees. The free Guest Photo QR is included too.',
      'Message us on WhatsApp with your details and the questions you want to ask, and we will set it up.',
    ],
    items: null,
  },
];

const faqs = [
  { question: 'How do guests RSVP from the invitation?', answer: 'The RSVP form is built into the invitation. Guests open their personal link, read the details, and reply on the same page — no separate form or app.' },
  { question: 'Will replies be tied to each guest?', answer: 'Yes. Personalized links record each reply against the right name, including plus-ones and any questions you set.' },
  { question: 'Do I get notified of replies?', answer: 'Yes. You receive an email notification after each RSVP, and responses are organized in one place.' },
  { question: 'Can I ask meal or dietary questions?', answer: 'Yes. You can add custom RSVP questions such as meal preference, dietary needs, or song requests.' },
  { question: 'Do guests need an app?', answer: 'No. The invitation, RSVP, and photo upload all open in any browser.' },
  { question: 'Is RSVP an extra cost?', answer: 'No. RSVP is included in the one-time $99 invitation, with unlimited guests and no per-guest fees.' },
];

export default function Page() {
  return (
    <SeoLandingPage
      eyebrow='Digital Wedding Invitation with RSVP'
      title='A digital wedding invitation with RSVP tracking built in'
      intro='Send a custom digital wedding invitation where guests can view the details, open the map, enjoy your music, and RSVP from their own personalized link.'
      heroImage='/images/couple-portrait.jpeg'
      heroImageAlt='A couple whose digital wedding invitation includes built-in RSVP tracking'
      highlights={highlights}
      highlightsTitle='Invitation and RSVP, working together'
      sections={sections}
      faqs={faqs}
      faqLead='The invitation and RSVP are one experience — included together in your custom digital invitation.'
    />
  );
}
