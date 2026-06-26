const SITE_URL = 'https://mywedding.events';
const LAST_MODIFIED = '2026-06-26';

const routes = [
  ['/', 'weekly', 1.0],
  ['/digital-wedding-invitation', 'weekly', 0.9],
  ['/wedding-photo-qr-code', 'monthly', 0.8],
  ['/digital-wedding-invitations', 'monthly', 0.8],
  ['/online-wedding-invitations', 'monthly', 0.75],
  ['/wedding-rsvp-website', 'monthly', 0.75],
  ['/paperless-wedding-invitations', 'monthly', 0.75],
  ['/wedding-photo-sharing-qr-code', 'monthly', 0.75],
  ['/wedding-photo-sharing', 'monthly', 0.7],
  ['/digital-wedding-invitation-with-rsvp', 'monthly', 0.75],
  ['/custom-wedding-invitation-website', 'monthly', 0.7],
  ['/faq', 'monthly', 0.55],
  ['/contact', 'monthly', 0.5],
  ['/privacy-policy', 'yearly', 0.3],
  ['/terms', 'yearly', 0.3],
];

export default function sitemap() {
  return routes.map(([path, changeFrequency, priority]) => ({
    url: `${SITE_URL}${path}`,
    lastModified: LAST_MODIFIED,
    changeFrequency,
    priority,
  }));
}
