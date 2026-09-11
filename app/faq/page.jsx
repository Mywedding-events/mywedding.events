import '../landing.css';
import SeoLandingPage from '@/components/SeoLandingPage';

export const metadata = { title: 'Digital Invitation FAQ', description: 'Answers about digital invitations for every occasion, RSVP tracking, Guest Photo QR, pricing, guest links, and setup.', alternates: { canonical: '/faq' } };

const faqs = [
  { question: 'What occasions do you design invitations for?', answer: 'Any occasion worth gathering for — weddings, engagements, Kateb Kteb, baptisms, birthdays, Awwal Erbene, showers, anniversaries and more.' },
  { question: 'How much does a digital invitation cost?', answer: 'The custom digital invitation is $99 as a one-time payment with no per-guest charge.' },
  { question: 'Can I invite unlimited guests?', answer: 'Yes. You can invite unlimited guests without changing the price.' },
  { question: 'Do guests need an app?', answer: 'No. Invitations, RSVPs, and photo uploads work in the browser.' },
  { question: 'How much is Guest Photo QR?', answer: 'Guest Photo QR is a separate product for a one-time $49. It can be added to any digital invitation or ordered on its own.' },
  { question: 'Can we use custom wording and colors?', answer: 'Yes. Your invitation can be customized around your occasion, style and information.' },
  { question: 'Can guests upload videos?', answer: 'Yes. Guest Photo QR is designed for guest photo and video uploads.' },
];
const sections = [{ eyebrow: 'Answers', heading: 'Everything in one place', paragraphs: ['Use this FAQ to understand what is included, how guests RSVP, and how Guest Photo QR helps gather the candid photos guests take throughout your celebration.', 'For package details, visit the digital invitation page or the Guest Photo QR page.'], items: ['Digital invitation: custom design with venue details and music', 'RSVP: browser-based replies and notifications', 'Photo QR: guest uploads without an app'] }];

export default function FaqPage() { return <SeoLandingPage eyebrow="FAQ" title="Digital Invitation FAQ" intro="Answers about RSVP, guest links, pricing, customization, and Guest Photo QR for My Day — digital invitations for every occasion." heroImage="/images/digital-wedding-invitation-phone-mockup.png" heroImageAlt="A digital invitation shown on a phone" sections={sections} faqs={faqs} />; }
