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

const sections = [{eyebrow:'Search intent',heading:'Built for couples who want clarity',paragraphs:['A digital wedding experience should do more than replace a printed card. It should give guests the details they need, make replies easy to manage, and reflect the tone of your celebration.', 'mywedding.events creates a polished invitation flow with custom styling, venue details, RSVP management, personalized guest links, and a free Guest Photo QR so your planning stays organized.'],items:['Custom design: tailored colors, wording, photos, and music', 'RSVP management: collect yes, no, and guest details in one place', 'Guest links: make every invitation feel personal', 'Photo QR: collect candid photos and videos from guests']},{eyebrow:'How it works',heading:'From wedding details to a shareable guest link',paragraphs:['You share your wedding information, preferred style, venue details, music, and any guest requirements. The invitation is then assembled into a guest-friendly experience that works on phones and desktops.', 'Guests receive a link, view the invitation, open the map, and RSVP without installing an app. After the wedding, the included photo QR helps gather the memories guests captured throughout the day.'],items:null},{eyebrow:'Why it helps',heading:'A simpler alternative to paper, forms, and group chats',paragraphs:['Printed invitations are beautiful, but they cannot update themselves, collect replies, or gather guest photos. A digital invitation keeps the romance of a custom design while adding practical planning tools.', 'Instead of juggling separate RSVP forms, map links, WhatsApp threads, and photo albums, your guests get one clear place to find everything.'],items:null}];
const faqs = [{question:'Do guests need an app?',answer:'No. Guests open the invitation, RSVP form, and photo upload page directly in their browser.'},{question:'Is RSVP included?',answer:'Yes. RSVP management and email notifications are included with the $99 digital wedding invitation.'},{question:'Can the design match our wedding style?',answer:'Yes. The invitation can be customized around your colors, wording, photos, music, and event details.'},{question:'Is Guest Photo QR included?',answer:'Yes. Guest Photo QR is included free with every digital wedding invitation.'},{question:'Can we invite unlimited guests?',answer:'Yes. There are no per-guest charges or invitee caps.'},{question:'How do we get started?',answer:'Start from the digital wedding invitation page or contact mywedding.events on WhatsApp with your wedding details.'}];

export default function Page() {
  return (
    <SeoLandingPage
      eyebrow='Paperless Wedding Invitations'
      title='Paperless wedding invitations with less waste and more control'
      intro='Skip printing delays and mailing stress with a custom paperless wedding invitation that includes RSVP, maps, music, and guest photo collection.'
      sections={sections}
      faqs={faqs}
    />
  );
}
