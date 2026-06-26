import '../landing.css';
import SeoLandingPage from '@/components/SeoLandingPage';

export const metadata = {
  title: 'Digital wedding invitations designed for modern couples',
  description: 'Create elegant digital wedding invitations with RSVP, custom guest links, maps, music, and a free wedding photo QR code for one simple price.',
  alternates: { canonical: '/digital-wedding-invitations' },
  openGraph: {
    url: '/digital-wedding-invitations',
    title: 'Digital wedding invitations designed for modern couples',
    description: 'Create elegant digital wedding invitations with RSVP, custom guest links, maps, music, and a free wedding photo QR code for one simple price.',
  },
};

const highlights = [
  { title: 'A design that matches your wedding', desc: 'Custom colors, fonts, wording, photos, and music' },
  { title: 'Built-in RSVP management', desc: 'Track every yes, no, and plus-one in one place' },
  { title: 'A personal link for each guest', desc: 'Named greetings instead of one generic card' },
  { title: 'Venue details with a tap-to-open map', desc: 'Guests find the ceremony and reception in seconds' },
  { title: 'Free Guest Photo QR', desc: 'Collect candid photos and videos from everyone' },
  { title: 'Unlimited guests, one-time $99', desc: 'No subscriptions and no per-guest fees, ever' },
];

const sections = [
  {
    eyebrow: 'Why digital',
    heading: 'A wedding invitation that does more than a printed card',
    paragraphs: [
      'A printed card looks beautiful on the table, but it cannot update itself, gather replies, or remember who is bringing a plus-one. A digital wedding invitation keeps the elegance of a custom design and adds the practical tools that planning a wedding actually needs.',
      'Everything your guests need — the story, the schedule, the venue, the music, and the RSVP — lives behind one link they can open on any phone, with nothing to download.',
    ],
    items: null,
  },
  {
    eyebrow: 'How it works',
    heading: 'From your wedding details to a link you can share',
    paragraphs: [
      'You send us your wedding information, design direction, venue, and any guest questions you want to ask. We assemble it into a polished invitation that reads beautifully on phones and desktops alike.',
      'When it is ready, you share the link however you like — WhatsApp, email, or a printed insert with a QR code. Guests open it, view the details, and RSVP in a couple of taps.',
    ],
    items: null,
  },
  {
    eyebrow: 'One fair price',
    heading: 'Everything included for a one-time $99',
    paragraphs: [
      'There are no monthly fees and no charge per guest. Invite fifty people or five hundred — the price never moves, and the free Guest Photo QR is included with every invitation.',
      'When you are ready, message us on WhatsApp with your wedding details and we will start your custom design.',
    ],
    items: null,
  },
];

const faqs = [
  { question: 'What is a digital wedding invitation?', answer: 'It is a custom invitation page guests open from a link on any phone or computer. It holds your wedding details, venue map, music, and an RSVP form — no app or printing required.' },
  { question: 'How much does it cost?', answer: 'A one-time $99. There are no subscriptions and no per-guest charges, no matter how many people you invite.' },
  { question: 'Can the design match our wedding style?', answer: 'Yes. Each invitation is customized around your colors, fonts, wording, photos, music, and venue details.' },
  { question: 'Do our guests need to install anything?', answer: 'No. The invitation, RSVP form, and photo upload all open directly in the browser.' },
  { question: 'Is the Guest Photo QR really free?', answer: 'Yes. Guest Photo QR is included free with every digital wedding invitation so you can collect guest photos and videos in one gallery.' },
  { question: 'How do we get started?', answer: 'Message mywedding.events on WhatsApp with your wedding date, venue, and design preferences and we will begin your custom invitation.' },
];

export default function Page() {
  return (
    <SeoLandingPage
      eyebrow='Digital Wedding Invitations'
      title='Digital wedding invitations designed for modern couples'
      intro='Create an elegant digital wedding invitation with RSVP, custom guest links, maps, music, and a free wedding photo QR code — all for one simple price.'
      heroImage='/images/digital-wedding-invitation-phone-mockup.png'
      heroImageAlt='An elegant digital wedding invitation shown on a phone with RSVP and venue details'
      highlights={highlights}
      highlightsTitle='Everything a modern wedding invitation should do'
      sections={sections}
      faqs={faqs}
    />
  );
}
