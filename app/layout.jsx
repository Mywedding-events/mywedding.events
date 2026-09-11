import './globals.css';
import { Cormorant_Garamond, Jost } from 'next/font/google';

// Site-wide typography, the only two fonts the design uses:
//   serif (Cormorant Garamond) for headings & display, sans (Jost) for body & UI.
const serif = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const sans = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-sans',
  display: 'swap',
});

const SITE_URL = 'https://mywedding.events';
const SITE_NAME = 'My Day';
const OG_IMAGE = '/images/digital-wedding-invitation-phone-mockup.png';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'My Day: Digital Invitations with RSVP & Guest Photo QR for Every Occasion',
    template: '%s | My Day',
  },
  description:
    'My Day creates beautiful digital invitations for weddings, engagements, Kateb Kteb, baptisms, birthdays, Awwal Erbene and more. One-time $99, unlimited invitees, RSVP management and custom guest links, plus a Guest Photo QR available separately for $49.',
  keywords: [
    'digital invitation',
    'digital invitations',
    'online invitation',
    'e-invite',
    'wedding invitation',
    'engagement invitation',
    'Kateb Kteb invitation',
    'baptism invitation',
    'birthday invitation',
    'Awwal Erbene invitation',
    'invitation with RSVP',
    'custom digital invitation',
    'guest photo QR',
    'invitation website',
    'paperless invitation',
  ],
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: 'Events',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    url: SITE_URL,
    title: 'My Day: Digital Invitations for Every Occasion',
    description:
      'Beautifully crafted digital invitations for weddings, engagements, Kateb Kteb, baptisms, birthdays, Awwal Erbene and more. Unlimited invitees and RSVP management for one fair $99, with a Guest Photo QR available separately for $49.',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'A digital invitation shown on a phone held in hand',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'My Day: Digital Invitations for Every Occasion',
    description:
      'Beautiful digital invitations for weddings, engagements, baptisms, birthdays and more. One-time $99, unlimited invitees, RSVP management. Guest Photo QR available for $49.',
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
    'Beautiful digital invitations for weddings, engagements, Kateb Kteb, baptisms, birthdays, Awwal Erbene and more, with RSVP management, plus a Guest Photo QR available separately for $49.',
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
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
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
