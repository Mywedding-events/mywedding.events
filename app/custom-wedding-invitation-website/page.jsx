import '../landing.css';
import SeoLandingPage from '@/components/SeoLandingPage';

export const metadata = {
  title: 'Custom wedding invitation website for your story',
  description: 'Share your ceremony details, reception location, RSVP form, guest links, music, and photo QR inside one elegant custom wedding invitation website.',
  alternates: { canonical: '/custom-wedding-invitation-website' },
  openGraph: {
    url: '/custom-wedding-invitation-website',
    title: 'Custom wedding invitation website for your story',
    description: 'Share your ceremony details, reception location, RSVP form, guest links, music, and photo QR inside one elegant custom wedding invitation website.',
  },
};

const highlights = [
  { title: 'Your story and the details', desc: 'How you met, the day’s schedule, and what to expect' },
  { title: 'Ceremony and reception venues', desc: 'Each with its own address and tap-to-open map' },
  { title: 'Designed around your wedding', desc: 'Your colors, fonts, wording, photos, and music' },
  { title: 'RSVP built into the site', desc: 'Guests confirm without leaving the page' },
  { title: 'A personal link for each guest', desc: 'Named greetings instead of one generic page' },
  { title: 'Free Guest Photo QR', desc: 'A shared gallery for everyone’s photos and videos' },
];

const sections = [
  {
    eyebrow: 'More than a card',
    heading: 'One website that holds your whole wedding',
    paragraphs: [
      'A custom wedding invitation website gives every part of your day a home: your story, the timeline, the ceremony and reception venues, what to wear, and how to reply — all in one calm, scrollable place.',
      'Instead of squeezing details onto a card or scattering them across messages, you hand guests a single link that answers their questions before they ask.',
    ],
    items: null,
  },
  {
    eyebrow: 'Truly custom',
    heading: 'Designed around your wedding, not a stock template',
    paragraphs: [
      'This is not a drag-and-drop builder that ends up looking like everyone else’s. We design the site around your colors, typography, photos, and tone so it feels unmistakably yours.',
      'You tell us what matters — the story, the schedule, the dress code, the playlist — and we shape it into one cohesive experience.',
    ],
    items: null,
  },
  {
    eyebrow: 'One fair price',
    heading: 'Your wedding website for a one-time $99',
    paragraphs: [
      'Everything — the design, the RSVP, the venue maps, the guest links, and the free Guest Photo QR — is included in a single $99 payment with no per-guest fees.',
      'Message us on WhatsApp with your details and we will start building your wedding website.',
    ],
    items: null,
  },
];

const faqs = [
  { question: 'What can the wedding website include?', answer: 'Your story, the day’s schedule, ceremony and reception venues with maps, dress code, music, an RSVP form, and a free Guest Photo QR — all in one place.' },
  { question: 'Is it really custom-designed?', answer: 'Yes. The site is designed around your wedding colors, fonts, wording, photos, and tone rather than a fixed template.' },
  { question: 'Can it cover two venues?', answer: 'Yes. You can show separate ceremony and reception locations, each with its own address and tap-to-open map.' },
  { question: 'Do guests need an app or login?', answer: 'No. The whole site, including RSVP and photo upload, opens in any browser.' },
  { question: 'Can each guest get their own link?', answer: 'Yes. Personalized links let you greet guests by name and tie their RSVP to the right person.' },
  { question: 'How much does it cost?', answer: 'A one-time $99 with unlimited guests and no per-guest fees. Message us on WhatsApp to begin.' },
];

export default function Page() {
  return (
    <SeoLandingPage
      eyebrow='Custom Wedding Invitation Website'
      title='A custom wedding invitation website for your story'
      intro='Share your ceremony details, reception location, RSVP form, guest links, music, and photo QR inside one elegant custom wedding invitation website.'
      heroImage='/images/hero-couple.png'
      heroImageAlt='A couple whose wedding details live on one custom invitation website'
      highlights={highlights}
      highlightsTitle='One website for every part of your day'
      sections={sections}
      faqs={faqs}
    />
  );
}
