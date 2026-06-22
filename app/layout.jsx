import './globals.css';

export const metadata = {
  title: 'mywedding.events — Your wedding, beautifully organized',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
