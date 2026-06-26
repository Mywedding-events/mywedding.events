import './globals.css';
const SITE_URL = 'https://mywedding.events';
const SITE_NAME = 'mywedding.events';
const OG_IMAGE = '/images/digital-wedding-invitation-phone-mockup.png';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Digital Wedding Invitations with RSVP & Photo QR — $99 | mywedding.events',
    template: '%s | mywedding.events',
  },
  description:
    'Create a custom digital wedding invitation with RSVP tracking, personalized guest links, and a free wedding photo QR code. One-time $99, unlimited invitees.',
  keywords: [
    'digital wedding invitation',
    'digital wedding invitations',
    'online wedding invitation',
    'electronic wedding invitation',
    'e-invite wedding',
    'wedding invitation website',
    'paperless wedding invitation',
    'custom digital wedding invitation',
    'wedding RSVP management',
    'wedding guest photo QR',
    'modern wedding invitation',
    'wedding invite online',
  ],
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: 'Weddings',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    url: SITE_URL,
    title: 'Digital Wedding Invitation — Elegant, Customized, $99',
    description:
      'A beautifully crafted digital wedding invitation tailored to your story. Unlimited invitees, RSVP management, and a free Guest Photo QR — for one fair $99.',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'A digital wedding invitation shown on a phone held in hand',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Wedding Invitation — Elegant, Customized, $99',
    description:
      'Send a beautiful digital wedding invitation. One-time $99, unlimited invitees, RSVP management, free Guest Photo QR.',
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  manifest: '/manifest.webmanifest',
  formatDetection: {
    email: false,
    telephone: false,
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
  themeColor: '#ffffff',
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/icon.svg`,
  sameAs: [],
  description:
    'Beautiful digital wedding invitations with RSVP management and a free Guest Photo QR.',
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      telephone: '+961-78-822-978',
      availableLanguage: ['en'],
      areaServed: 'Worldwide',
    },
  ],
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: 'en',
  publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
