import '../landing.css';
import SeoLandingPage from '@/components/SeoLandingPage';

export const metadata = { title: 'Digital Wedding Invitation FAQ', description: 'Answers about digital wedding invitations, RSVP tracking, Guest Photo QR, pricing, guest links, and setup.', alternates: { canonical: '/faq' } };

const faqs = [
  { question: 'How much does a digital wedding invitation cost?', answer: 'The custom digital wedding invitation is $99 as a one-time payment with no per-guest charge.' },
  { question: 'Can I invite unlimited guests?', answer: 'Yes. You can invite unlimited guests without changing the price.' },
  { question: 'Do guests need an app?', answer: 'No. Invitations, RSVPs, and photo uploads work in the browser.' },
  { question: 'Is Guest Photo QR included?', answer: 'Yes. Guest Photo QR is included free with every digital wedding invitation.' },
  { question: 'Can we use custom wording and colors?', answer: 'Yes. Your invitation can be customized around your wedding style and information.' },
  { question: 'Can guests upload videos?', answer: 'Yes. Guest Photo QR is designed for guest photo and video uploads.' },
];
const sections = [{ eyebrow: 'Answers', heading: 'Everything in one place', paragraphs: ['Use this FAQ to understand what is included, how guests RSVP, and how Guest Photo QR helps gather the candid photos guests take throughout your wedding.', 'For package details, visit the digital wedding invitation page or the wedding photo QR code page.'], items: ['Digital invitation: custom design with venue details and music', 'RSVP: browser-based replies and notifications', 'Photo QR: guest uploads without an app'] }];

export default function FaqPage() { return <SeoLandingPage eyebrow="FAQ" title="Digital Wedding Invitation FAQ" intro="Answers about RSVP, guest links, pricing, customization, and Guest Photo QR for mywedding.events." sections={sections} faqs={faqs} />; }
